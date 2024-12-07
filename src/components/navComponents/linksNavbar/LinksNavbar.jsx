import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import PropTypes from "prop-types";


export const LinksNavbar = ({title, path}) => {
    return (
        <li type="none">
            <Link
                to={path}
                className='text-gray-800 hover:text-emerald-600 transition'
            >
                <span className="relative">{title}</span>
            </Link>
        </li>
    );
};

LinksNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}

export const ButtonCartNav = ({ title, path }) => {
  return (
    <Link to={path}>
      <button className={`group relative inline-flex items-center justify-center w-full overflow-hidden border-2 rounded-full border-lime-950 p-3 md:px-4 md:py-2 md:w-[8rem] lg:w-[10rem]`}>
        <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-[#75988f] text-white duration-500 group-hover:translate-x-0">
          <CiShoppingCart size={24} />
        </span>
        <span className="ease absolute flex h-full w-full transform items-center justify-center text-emerald-950 transition-all duration-500 group-hover:translate-x-full">
          {title}
        </span>
        <span className="invisible relative">{title}</span>
      </button>
    </Link>
  );
};


ButtonCartNav.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}
