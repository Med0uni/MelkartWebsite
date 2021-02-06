import React, {useState} from 'react'
import './Nav.css';
import Link from "next/link";
import melkartLogo from './White.png';


function Navbar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      }; 


   
    return(
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link href='/' className='navbar-logo'>
                      <img src={melkartLogo} width="70" height="75" />                
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav=menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                        <Link href='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link
                            to='/prestation'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Prestation
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link
                            to='/store'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Store
                        </Link>
                        </li>

                        <li>
                        <Link
                            to='/cantact'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Contactez nous
                        </Link>
                        </li>
                        <li>
                        <Link
                            to='/blog'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Blog
                        </Link>
                        </li>
                    </ul>
                    {/*{button && <Button buttonStyle='btn--outline'>sign up</Button>} */}
                </div>
            </nav>
        </>
    )
}

export default Navbar