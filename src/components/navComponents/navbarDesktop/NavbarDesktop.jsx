import logo from '../../../utils/img/Logo Shop.png'
import { ButtonCartNav, LinksNavbar } from '../linksNavbar/LinksNavbar'
import { Link } from 'react-router-dom';
import routes from '../../../utils/routes';

const NavbarDesktop = () => {
    return (
            <div className="container mx-auto flex items-center justify-between p-4">
                <div className="flex items-center">
                    <Link to={routes.home}><img src={logo} alt="Logo" className="h-9 w-auto" /></Link>
                </div>
                <nav className="flex gap-8 items-center">
                    <LinksNavbar title="Home" path={routes.home} />
                    <LinksNavbar title="Contact" path={routes.contact} />
                    <LinksNavbar title="Help" path={routes.help} />
                    <ButtonCartNav title="Cart" path={routes.cart} />
                </nav>
            </div>
    );
};

export default NavbarDesktop;
