import { FaSearch } from "react-icons/fa";

const Search = () => {
    return (
        <div className="flex items-center border border-black rounded-3xl shadow-lg bg-[#75988f] md:w-[20rem]">
            <label htmlFor="search" className="pl-1">
                <FaSearch className="mr-2 text-black" />
            </label>
            <input
                type="search"
                className="flex-grow outline-none bg-[#75988f] text-black rounded-3xl p-1"
                id="search"
            />
        </div>
    );
};

export default Search;
