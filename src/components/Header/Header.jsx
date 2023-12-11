import { FaSearch } from "react-icons/fa";
import "./Header.css";

const Header = () => {
    return (
        <div className="w-full border-2 flex flex-col items-center justify-center py-4">
            <div className="flex items-center">
                <div className="block md:hidden">
                    <img className="w-[100px] h-[100px] object-cover" src="https://lyfeindex.com/wp-content/themes/main_website/circle-logo.png" alt="logo" />
                </div>
                <div>
                    <h1 className="uppercase text-3xl">LYFEIndex</h1>
                    <p className="text-center">Love You 4 Ever</p>
                </div>
            </div>
            <div className="flex flex-col mt-4">
                <div className="mb-4">
                    <input type="text" placeholder="Type to search..." className="input input-bordered w-[360px]" />
                    <button className="btn bg-blue-600 hover:bg-blue-600">
                        <FaSearch className="text-white"></FaSearch>
                    </button>
                </div>

            </div>
            <div>
            <button className="bg-[#84a7a1] animate-left-right hover:bg-[#84a7a1] text-white btn rounded-full w-[360px]">Add Memorial</button>

                {/* <button className="bg-[#84a7a1] animate-bounce hover:bg-[#84a7a1] text-white btn rounded-full w-[360px]">Add Memorial</button> */}
            </div>
        </div>
    );
};

export default Header;