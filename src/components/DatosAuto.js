import React, {useEffect, useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useParams, Link} from 'react-router-dom';
import TipoAuto from './TipoAuto';
import ArrowButton from '../assets/img/icon_Back.svg';
import ArrowButton2 from '../assets/img/icon_Back2.svg';
import Plan from './Plan';


const DatosAuto = ({setUsuario, usuario}) => {

    const [viewport, setViewport] = useState(0);
    const widthDevice = ()=>{
        setViewport(window.innerWidth);
    }

    window.onresize = widthDevice
    
    useEffect(()=>{
        widthDevice();
    },[viewport])

    const {tipo} = useParams();

    const getUsuario = () => {
        const datos = JSON.parse(localStorage.getItem('usuario'));
        setUsuario({...datos})
    }
    useEffect(()=>{
        getUsuario();
    },[])

    let valor = (tipo === 'auto') ? '/' : 'auto';


    return ( 
        <section className="contenido">
            <Row>
                <Col md="4">
                    {(viewport > 768) ? (
                        <ul>
                            <li className={(tipo === 'auto') ? 'active' : ''}><span>1</span> Datos del auto</li>
                            <li className={(tipo === 'plan') ? 'active' : ''}><span>2</span> Arma tu plan</li>
                        </ul>
                    ) : (
                    
                        <div className="progreso">
                            <ul>
                                <li><Link to={valor} className="btn-back"><img src={ArrowButton2} alt="arrow button"/></Link></li>
                                <li>Paso {tipo ==='auto' ? '1' : '2'} de 2</li>
                                <li>
                                    <div className="barraProgreso"></div>
                                </li>
                            </ul>
                        </div>

                    )}
                </Col>
                <Col md ="8">
                    <div className="eleccion">
                        {viewport > 768 ? <Link to={valor} className="btn-back"><img src={ArrowButton} alt="arrow button"/> Volver</Link> : null }
                        
                        {(tipo === 'auto') ? <TipoAuto setUsuario={setUsuario} usuario={usuario}/> : null}
                        {(tipo === 'plan') ? <Plan usuario={usuario}/> : null}

                    </div>
                    
                </Col>
            </Row>
        </section>
    );
}

export default DatosAuto;