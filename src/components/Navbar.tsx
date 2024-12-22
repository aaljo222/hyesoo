import logo from '../assets/portpoliologo.png';
import { 
    NavbarContainer,
    NavbarContent,
    Logo,
    MenuLinks,
 } from '../styles/NavbarStyles';

const Navbar: React.FC = () =>{
    return (
        <NavbarContainer>
            <NavbarContent>
                <Logo className='mt-5'>
                    <img src={logo} alt='Logo'/>
                </Logo>
                <MenuLinks>
                    <a href='/home'>Home</a>
                    <a href='/projects'>Projects</a>
                </MenuLinks>
            </NavbarContent>
        </NavbarContainer>
    )
}

export default Navbar;