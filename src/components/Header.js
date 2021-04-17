import React, {useEffect, useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../assets/img/Logo RIMAC.svg';
import Phone from '../assets/img/ic_phone.svg';


const Header = () => {

    const [viewport, setViewport] = useState(0);
    const widthDevice = ()=>{
        setViewport(window.innerWidth);
    }

    window.onresize = widthDevice
    
    useEffect(()=>{
        widthDevice();
    },[viewport])


    
    return ( 
        <div className="header">
            <Navbar className="justify-content-between nav-header">
                <Navbar.Brand href="#home">
                    <img 
                        src={Logo}
                        width="150"
                        alt="Logo Rimac"
                        className="align-top"
                    />
                </Navbar.Brand>
                <Nav className="ml-auto justify-content-end">
                    {(viewport >= 768) ? (
                        <>
                            <Nav.Item style={{'padding':'.5rem'}}>¿Tienes alguna duda?</Nav.Item>
                            <Nav.Item>

                                <Nav.Link href="tel:014116001"><img src={Phone} alt="phone"/> <span className="phone"> (01) 411 6001</span></Nav.Link>
                            </Nav.Item>
                        </>
                    ) : (
                    <Nav.Item>

                        <Nav.Link href="tel:014116001"><img src={Phone} alt="phone"/> <span className="phone"> Llámanos</span></Nav.Link>
                    </Nav.Item>

                    )}
                
                </Nav>
            </Navbar>
        </div>
    );
}

export default Header;