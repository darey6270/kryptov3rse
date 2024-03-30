import {AiFillPlayCircle} from "react-icons/ai";
import {SiEthereum} from "react-icons/si";
import {BsInfoCircle} from "react-icons/bs";
import {useTransactionContext} from "../contexts/TransactionContext";
import {shortenAddress} from "../utils/shortenAddress";
import Loader from "./Loader";

const Welcome = () => {

    const {isLoading, connectWallet, currentAccount, message, setMessage, keyword, setKeyword, amount, setAmount, addressTo, setAddressTo, sendTransaction} = useTransactionContext();

    const handleSubmit = () => {
        sendTransaction();
    }

    return (
        <section className={"flex max-w-7xl mx-auto"}>
            <div className={"flex flex-col mf:flex-row justify-between md:w-full md:p-20 py-12 px-4"}>

                {/*left*/}
                <div className={"flex flex-1 justify-start flex-col mf:mr-10"}>
                    <h1 className={"text-3xl sm:text-5xl py-1 text-white text-gradient"}>Send Crypto <br/> across the world</h1>
                    <p className={"w-full md:w-[350px] text-gray-300 text-left mt-5 font-light"}>Explore the crypto universe. Buy and sell crypto easily on Kryptoverse</p>
                    {!currentAccount && <button onClick={connectWallet} className={"flex items-center gap-1 justify-center w-1/2 md:w-2/5 items-center bg-[#2952b3] my-5 py-3 px-1 md:p-3 rounded-full cursor-pointer hover:bg-[#2546bd] text-white font-semibold"}>
                        <AiFillPlayCircle />
                        Connect Wallet
                    </button>}

                    <div className={"grid sm:grid-cols-3 grid-cols-2 w-full mt-10 text-gray-400 rounded-2xl"}>
                        <p className={"border border-gray-400 rounded-tl-2xl text-center py-5"}>Binance</p>
                        <p className={"border border-gray-400 text-center py-5 rounded-tr-2xl sm:rounded-none "}>Reliability</p>
                        <p className={"border border-gray-400 sm:rounded-tr-2xl text-center py-5"}>Ethereum</p>
                        <p className={"border border-gray-400 sm:rounded-bl-2xl  text-center py-5"}>Blockchain</p>
                        <p className={"border border-gray-400 rounded-bl-2xl sm:rounded-none text-center py-5"}>Security</p>
                        <p className={"border border-gray-400 rounded-br-2xl  text-center py-5"}>CoinMarketCap</p>
                    </div>
                </div>

                {/*right*/}
                <div className={"flex flex-col flex-1 items-center w-full mf:mt-0 mt-10"}>
                    {/*ethereum-card -top*/}
                    <div className={"p-3 items-between flex flex-col justify-between rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism"}>
                        <div className={"flex justify-between items-start"}>
                            <div className={"h-12 w-12 rounded-full border border-2 flex justify-center items-center text-2xl text-white"}><SiEthereum /></div>
                            <BsInfoCircle className={"text-white text-lg"} />
                        </div>

                        <div className={""}>
                            {currentAccount ? <p className={"text-white font-light text-sm"}>{shortenAddress(currentAccount)}</p> : <p className={"text-white font-light text-sm"}>Address</p>}
                            <p className={"text-white font-semibold text-lg mt-1"}>Ethereum</p>
                        </div>
                    </div>

                    {/*form*/}
                    <div className={"space-y-3 flex flex-col justify-start items-center blue-glassmorphism p-5 w-full sm:w-96 "}>
                        <input onChange={e => setAddressTo(e.target.value)} value={addressTo} step={"0.0001"} placeholder={"Address To"} type="text" className={" w-full rounded-sm p-2 outline-none bg-transparent text-white text-sm white-glassmorphism"} />
                        <input onChange={e => setAmount(e.target.value)} value={amount} step={"0.0001"} placeholder={"Amount (ETH)"} type="number" className={" w-full rounded-sm p-2 outline-none bg-transparent text-white text-sm white-glassmorphism"} />
                        <input onChange={e => setKeyword(e.target.value)} value={keyword} step={"0.0001"} placeholder={"Keyword (Gif)"} type="text" className={" w-full rounded-sm p-2 outline-none bg-transparent text-white text-sm white-glassmorphism"} />
                        <input onChange={e => setMessage(e.target.value)} value={message} step={"0.0001"} placeholder={"Enter Message"} type="text" className={" w-full rounded-sm p-2 outline-none bg-transparent text-white text-sm white-glassmorphism"} />

                        <div className={"h-[1px] w-full bg-gray-400 "}/>

                        {isLoading ? <Loader /> : <button onClick={handleSubmit} className={" border border-[#3d4f7c] p-2 rounded-2xl cursor-pointer text-white w-full"}>Send now</button>}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Welcome;