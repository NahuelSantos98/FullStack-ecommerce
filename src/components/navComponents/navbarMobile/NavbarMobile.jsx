import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../utils/img/Logo Shop.png';
import {LinksNavbar ,ButtonCartNav } from '../linksNavbar/LinksNavbar'
import routes from '../../../utils/routes';

const NavbarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative z-20 border-b bg-white">
      <div className="px-6">
        <div className="flex items-center justify-between">
          <div className="relative z-20">
            <Link to={routes.home}>
              <img src={logo} alt="Shop Logo" className="w-32" />
            </Link>
          </div>

          <div className="flex items-center justify-end border-l">
            <button
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              className="block relative z-20 p-6 -mr-6 cursor-pointer"
            >
              <div
                aria-hidden="true"
                className={`m-auto h-0.5 w-6 rounded bg-sky-900 transition-transform duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1' : ''
                }`}
              ></div>
              <div
                aria-hidden="true"
                className={`m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition-transform duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              ></div>
            </button>

            <div
              className={`fixed inset-0 w-[calc(100%-4.5rem)] bg-white border-r shadow-xl transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
              <div className="flex flex-col h-full justify-between">
                <ul className="px-6 pt-32 text-gray-700 space-y-8">
                  <LinksNavbar title='Home' path={routes.home} />
                  <LinksNavbar title='Contact' path={routes.contact} />
                  <LinksNavbar title='Help' path={routes.help}/>
                </ul>

                <div className="border-t py-8 px-6">
                  <ButtonCartNav title="Cart" path={routes.cart} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
