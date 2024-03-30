import {BsShieldFillCheck} from "react-icons/bs";
import {BiSearchAlt} from "react-icons/bi";
import {RiHeart2Fill} from "react-icons/ri";

const ServiceCard = ({icon, color, title, subtitle}) => (
    <div className={"flex gap-5 w-full items-center white-glassmorphism py-4 px-3 my-2 cursor-pointer hover:shadow-xl"}>
        <div className={`w-12 h-12 rounded-full flex justify-center items-center ${color}`}>{icon}</div>
        <div className={"space-y-1 flex flex-col flex-1"}>
            <h1 className={"text-white text-lg"}>{title}</h1>
            <p className={"text-white text-sm md:w-10/12"}>{subtitle}</p>
        </div>
    </div>
)

const Services = () => {
    return (
        <section className={"gradient-bg-services"}>
            <div className={"max-w-[1500px] mx-auto w-full"}>
                <div className={"flex gap-5 flex-col mf:flex-row items-center justify-between md:p-20 py-12 px-4"}>
                    <div className={"flex-1 w-full flex flex-col justify-start items-start"}>
                        <h1 className={"text-white text-3xl sm:text-5xl py-2 text-gradient"}>
                            Services that we <br/> continue to improve
                        </h1>
                        <p className={"text-gray-300 mt-3 mb-6 text-sm mf:w-9/12"}>The best choice for buying and selling your crypto assets, with the various super friendly services we offer</p>
                        <button className={"text-[#2952b3] uppercase text-lg"}>Let's get started</button>
                    </div>

                    <div className={"flex-1 flex flex-col"}>
                        <ServiceCard
                            color={"bg-[#2952E3]"}
                            title={"Security Guaranteed"}
                            icon={<BsShieldFillCheck fontSize={21} className={"text-white"} />}
                            subtitle={"Security is guaranteed. We always maintain privacy and quality of our products."}

                        />
                        <ServiceCard
                            color={"bg-[#8945f8]"}
                            title={"Best exchange rates"}
                            icon={<BiSearchAlt fontSize={21} className={"text-white"} />}
                            subtitle={"Security is guaranteed. We always maintain privacy and quality of our products."}

                        />
                        <ServiceCard
                            color={"bg-[#f84550]"}
                            title={"Fastest Transactions"}
                            icon={<RiHeart2Fill fontSize={21} className={"text-white"} />}
                            subtitle={"Security is guaranteed. We always maintain privacy and quality of our products."}

                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;