import {useTransactionContext} from "../contexts/TransactionContext";
import {shortenAddress} from "../utils/shortenAddress";

const TransactionCard = ({addressTo, addressFrom, timestamp, message, amount, keyword}) => {

    return (
        <div className={"white-glassmorphism w-full flex p-3 h-[270px] rounded-xl hover:shadow-2xl "}>
            <div className={"flex w-full mt-3"}>
                <div className={"flex flex-col mb-2 justify-between w-full p-2 "}>
                    <div className={"space-y-2"}>
                        <a target={"_blank"} rel={"noopener noreferrer"} className={"block"} href={`https://goerli.etherscan.io/address/${addressFrom}`}>
                            <p className={"text-white text-base"}>From: <span className={"ml-1"}>{shortenAddress(addressFrom)}</span></p>
                        </a>
                        <a target={"_blank"} rel={"noopener noreferrer"} className={"block"} href={`https://goerli.etherscan.io/address/${addressTo}`}>
                            <p className={"text-white text-base"}>To: <span className={"ml-1"}>{shortenAddress(addressTo)}</span></p>
                        </a>
                        <p>Amount: {amount} ETH</p>

                        {keyword && <p className={"text-white text-base "}>Keyword: <span className={"ml-1"}>{keyword}</span></p>}
                        {message && <p className={"text-white text-base "}>Message: <span className={"ml-1"}>{message}</span></p>}
                    </div>

                    <div className={"bg-gray-800 bg-opacity-60 rounded-full px-3 py-2 text-slate-300 font-semibold text-center"}>
                        {timestamp}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Transactions = () => {

    const {currentAccount, transactions} = useTransactionContext();

    return (
        <section className={"gradient-bg-transactions"}>
            <div className={"max-w-7xl mx-auto w-full"}>
                <div className={"flex flex-col justify-center items-center 2xl:px-20 px-4 py-12"}>
                    {!currentAccount && <h2 className={"text-white text-left md:text-center text-3xl my-2"}>Connect your account to see the latest transactions</h2>}
                    {currentAccount && <h3 className={"text-white text-left md:text-center text-3xl my-2"}>Latest Transactions</h3>}
                    <div className={"grid grid-cols-1 w-full my-4 sm:grid-cols-2 md:grid-cols-3 gap-4 text-white"}>
                        {transactions.reverse().map((transaction,index) => <TransactionCard key={index} {...transaction} />)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Transactions;