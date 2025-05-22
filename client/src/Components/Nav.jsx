import { useState } from 'react';
import '../styles/nav.css';
import { useMediaQuery } from '@mui/material';

function Nav({ lng, setLng, allLngs }) {

    const [showMenu, setShowMenu] = useState(false);
    const [openHamburger, setOpenHamburger] = useState(false);
    const isDesktop = useMediaQuery('(min-width:720px)');

    const LangMenu = () => {
        return(
            <div className='lng-menu'>
                {allLngs.map((e, idx) => (
                    <div 
                    className='lng-sub-menu'
                    onClick={() => {
                        setLng(e);
                        setShowMenu(false);
                    }}
                    key={idx}
                    >
                        <span>{e.language}</span>
                        <img src={e.image} alt="" />
                    </div>
                ))}
            </div>
        )
    }

    const HamburgerMenu = () => {
        return(
            <div className='hamburger'>
                {
                    lng.nav && lng.nav.map((e, idx) => {
                        return <a key={idx} href="">{e}</a>
                    })
                }
            </div>
        )
    }

    return (
        <nav className='nav'>
            <div className='nav-logo-container'>
                {
                    isDesktop ? 
                        <img onClick={() => window.location.reload()} className='nav-logo' src="https://storage.123fakturera.se/public/icons/diamond.png" alt="" />
                    :
                        <div>
                            <button 
                            className='hamburger-btn'
                            onClick={() => {
                                setOpenHamburger(!openHamburger)
                            }}>
                                ☰
                            </button>

                            {
                                openHamburger && <HamburgerMenu />
                            }
                        </div>
                }                
            </div>

            <div className='nav-container'>
                {
                    isDesktop && lng.nav && lng.nav.map((e, idx) => {
                        return <a key={idx} href="">{e}</a>
                    })
                }
                <div 
                    onClick={() => {
                            setShowMenu(!showMenu);
                }}
                className='nav-lng-container'>
                    <span className='nav-lng'>{lng.language}</span>
                    <img 
                    className='nav-flag'
                    src={lng.image} alt="" />

                    {
                        showMenu && 
                        <LangMenu />
                    }
                </div>
            </div>
        </nav>
    )
}

export default Nav