const Footer = () => {
    return (
        <footer className={"gradient-bg-footer pb-6"}>
            <div className={"max-w-[1500px] mx-auto w-full text-white"}>
               <div className={"flex flex-col sm:flex-row items-center justify-between w-[80%] mx-auto"}>
                   <p className={"font-mono text-2xl md:text-base font-semibold"}>kryptov3rse</p>
                   <div className={"py-2 flex justify-between gap-5 md:w-3/5 w-full "}>
                       {["Market", "Exchange", "Wallets"].map((item, index) => <p key={index}>{item}</p>)}
                   </div>
               </div>

                <div className={"border border-b border-gray-700 mt-8  w-[90%] mx-auto md:w-full"}/>

                <div className={"mt-3 flex justify-between items-center w-[90%] mx-auto md:w-full"}>
                    <p className={"text-sm"}>@kryptov3rse2022</p>
                    <p className={"text-sm"}>All rights reserved</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;