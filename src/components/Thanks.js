import React, {useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Thumbs1 from '../assets/img/il_thumbs-up.svg'
import BgThanks from '../assets/img/Mask Group (3).svg'


const Thanks = ({usuario, setUsuario}) => {
    const getUsuario = () => {
        const datos = JSON.parse(localStorage.getItem('usuario'));
        setUsuario({...datos})
    }
    useEffect(()=>{
        getUsuario();
    },[])
    return (  
        <section className="contenido gracias">
            <Row>
                <Col sm="4">
                    <img src={BgThanks} className="bg" alt="bg" />
                    <img src={Thumbs1} alt="pulgares" />
                </Col>
                <Col sm="8">
                    <div className="boxThanks">
                        <h1><span>¡Te damos la bienvenida!</span>Cuenta con nosotros para proteger tu vehículo</h1>
                        <p>Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:
    <span>{usuario.correo}</span></p>
                        <a href="#" className="btnRimac">Cómo usar mi seguro</a>

                    </div>
                </Col>
            </Row>
        </section>
    );
}

export default Thanks;