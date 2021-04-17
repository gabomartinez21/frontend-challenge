import React, {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form  from './Form';
import Car from '../assets/img/Group 15779.png'
import Person from '../assets/img/Mobile Person.svg';


const Home = ({setUsuario, usuario}) => {
    const [viewport, setViewport] = useState(0);
    const widthDevice = ()=>{
        setViewport(window.innerWidth);
    }

    window.onresize = widthDevice
    
    useEffect(()=>{
        widthDevice();
    },[viewport])
    
    return ( 
        <section className="principal">
            <Row>
                <Col md="5">
                    <Row>
                        <Col xs={9} sm={{span:12, order:2}}>
                            <div className="info">
                                <h3>¡NUEVO!</h3>
                                <h1>Seguro <span>Vehicular Tracking</span></h1>
                                <p>Cuentanos donde le haras seguimiento a tu seguro</p>

                            </div>
                        </Col>
                        <Col xs={3} sm={{span:12, order:1}}>
                            <img 
                                src={viewport >= 576 ? Car : Person}
                                alt=""
                                className="img-principal"
                            />

                        </Col>
                    </Row>
                    
                </Col>
                <Col md="7">
                    <Form setUsuario={setUsuario} usuario={usuario}/>
                </Col>
            </Row>
        </section>
    );
}

export default Home;