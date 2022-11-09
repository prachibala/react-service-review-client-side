import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
const NavTop = () => {
    return (
        <div>
            <div className=" bg-lime-400 ">
                <div className="p-2 flex justify-end w-11/12">
                    <button>
                        <FaFacebookF></FaFacebookF>
                    </button>
                    <button className="ml-3">
                        <FaGoogle></FaGoogle>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavTop;
