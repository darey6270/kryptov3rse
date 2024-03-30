import {CgSpinner} from "react-icons/cg";

const Loader = () => {
    return (
        <div className={"animate-spin text-white text-5xl"}>
            <CgSpinner />
        </div>
    );
};

export default Loader;