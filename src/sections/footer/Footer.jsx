import { LinksNavbar } from '../../components/navComponents/linksNavbar/LinksNavbar'
import logo from '../../utils/img/Logo Shop.png'
import routes from '../../utils/routes'
import { ButtonCartNav } from '../../components/navComponents/linksNavbar/LinksNavbar'

const Footer = () => {
  return (
    <section className='flex flex-col items-center container gap-4 md:flex-row md:justify-between md:py-4 md:items-center'>
        <img src={logo} alt='Logo Plant Shop' className="w-[10rem]" />
        <div className='w-[90%] text-center gap-4 md:w-auto md:flex md:items-center md:gap-6'> {/* Alineación y espaciado para pantallas grandes */}
            <div className='flex flex-col justify-center gap-4 md:flex-row md:items-center'>
                <LinksNavbar title="Home" path={routes.home} />
                <LinksNavbar title="Contact" path={routes.contact} />
                <LinksNavbar title="Help" path={routes.help} />
            </div>
            <div className='mt-4 md:mt-0 md:ml-6'> {/* Ajusta el margen en pantallas grandes */}
                <ButtonCartNav title="Cart" path={routes.cart} />
            </div>
        </div>
    </section>
  )
}

export default Footer
