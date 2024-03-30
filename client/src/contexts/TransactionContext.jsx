import {createContext, useContext, useEffect, useState} from "react";
import {ethers} from "ethers";

import {contractABI, contractAddress} from "../utils/constants";

export const TransactionContext = createContext();

const {ethereum} = window;

const getEthereumContracts = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    return transactionContract;
}

export const TransactionContextProvider = ({children}) => {
    const [currentAccount, setCurrentAccount] = useState("");
    const [amount, setAmount] = useState("");
    const [addressTo, setAddressTo] = useState("");
    const [keyword, setKeyword] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
    const [transactions, setTransactions] = useState([]);

    const clearForm = () => {
        setKeyword("");
        setAmount("");
        setAddressTo("");
        setMessage("");
    }

    const checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) return alert("Please install metamask");
            const accounts = await ethereum.request({method: "eth_accounts"});

            if (accounts.length) {
                setCurrentAccount(accounts[0]);

                await getAllTransactions();
            } else {
                console.log("No accounts found");
            }
        } catch (err) {
            console.log(err)
        }
    }

    const checkIfTransactionExists = async () => {
        try {
            const transactionContract = getEthereumContracts();
            const transactionCount = await transactionContract.getTransactionCount();

            window.localStorage.setItem("transactionCount", transactionCount);

        } catch (err) {
            console.log(err);
            throw new Error("No ethereum object.");
        }
    }

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install metamask");
            const accounts = await ethereum.request({method: "eth_requestAccounts"});

            if (accounts.length) {
                setCurrentAccount(accounts[0]);
            } else {
                console.log("No accounts found");
            }

            setCurrentAccount(accounts[0])

        } catch (err) {
            console.log(err);
            throw new Error("No ethereum object.");
        }

    }

    const sendTransaction = async () => {
        try {
            if (!ethereum) return alert("Please install metamask");

            const transactionContract = getEthereumContracts();
            const parsedAmount = ethers.utils.parseEther(amount);

            await ethereum.request({
                method: "eth_sendTransaction",
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: "0x5208",
                    value: parsedAmount._hex
                }]
            });

            const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword);
            setIsLoading(true);
            console.log(`loading--- ${transactionHash.hash}`);
            await transactionHash.wait();
            clearForm();
            setIsLoading(false);
            console.log(`success--- ${transactionHash.hash}`);

            const transactionCount = await transactionContract.getTransactionCount();
            setTransactionCount(transactionCount.toNumber());
            window.location.reload();

        } catch (err) {
            console.log(err);
            throw new Error("No ethereum object.");
        }
    }

    const getAllTransactions = async () => {
        try {
            if (!ethereum) return alert("Please install metamask");

            const transactionContract = getEthereumContracts();
            const availableTransactions = await transactionContract.getAllTransactions();
            const structuredTransactions = availableTransactions.map((transaction) => ({
                addressTo: transaction.receiver,
                addressFrom: transaction.sender,
                timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString("en-US"),
                message: transaction.message,
                keyword: transaction.keyword,
                amount: parseInt(transaction.amount._hex) / (10 ** 18)
            }));

            setTransactions(structuredTransactions);

        } catch (err) {
            console.log(err);
            throw new Error("No ethereum object.");
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
        checkIfTransactionExists();
    }, [transactionCount])


    return <TransactionContext.Provider value={{
        connectWallet,
        currentAccount,
        addressTo,
        setAddressTo,
        amount,
        setAmount,
        keyword,
        setKeyword,
        message,
        setMessage,
        sendTransaction,
        isLoading,
        transactions
    }}>
        {children}
    </TransactionContext.Provider>
}

export const useTransactionContext = () => useContext(TransactionContext);