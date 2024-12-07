import NavbarMobile from "../../components/navComponents/navbarMobile/NavbarMobile";
import NavbarDesktop from '../../components/navComponents/navbarDesktop/NavbarDesktop'

const Navbar = () => {
    return (
        <header className="z-[100]">
            <div className="block md:hidden">
                <NavbarMobile />
            </div>
            <div className="hidden md:block">
                <NavbarDesktop />
            </div>
        </header>
    );
};

export default Navbar;
