import React, {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Person from '../assets/img/Person plan.svg';
import Nav from 'react-bootstrap/Nav';
import Extra from './Extra';
import BoxPlan from './BoxPlan';



const Plan = ({usuario}) => {

    const [planes, setPlanes ] = useState([])
    const [cobertura, setCobertura ] = useState('coberturas')


    const obtenerCoberturas = async () =>{
        const req = await fetch('http://localhost:3000/data/planes.json')
        const res = await req.json();
        return res;
    }
    useEffect(()=>{
        obtenerCoberturas().then(pl=>{
            setPlanes(pl[cobertura])
        })
        console.log(cobertura);
    },[cobertura])

    


    return (  
        <>
            <section className="resumen">
            
                <Row>
                    <Col md="8">
                        <div className="boxCard">
                            <h2>Mira las coberturas</h2>
                            <p>Conoce las coberturas para tu plan</p>
                            <div className="card">
                                <p>Placa: <span>{usuario.placa}</span></p>
                                <h2>{usuario.vehiculo.marca} {usuario.vehiculo.anio} <span>{usuario.vehiculo.modelo}</span></h2>
                                <a href="datos-auto/plan">EDITAR</a>
                                <img 
                                    src={Person}
                                    alt='Persona feliz'
                                />
                            </div>

                        </div>
                        
                        <div className="coberturas">
                            <h3>Agrega o quita coberturas</h3>

                            <div className="menu">
                                <Nav
                                    defaultActiveKey="coberturas"
                                    onSelect={(selectedKey) => setCobertura(selectedKey)}
                                >
                                    <Nav.Item>
                                        <Nav.Link eventKey="coberturas">Protege a<br/>tu auto</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="protege">Protege a los que te rodean</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="mejora-plan">Mejora tu<br/>plan</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>

                            <div className="agregados" id={cobertura}>
                                <ul>
                                    {planes.map(plan=>(
                                        <Extra key={plan.id} info={plan} />
                                    ))}
                                </ul>

                            </div>
                            <div className="agregados" id="protege"></div>
                            <div className="agregados" id="mejora-plan"></div>
                        </div>
                    </Col>
                    <Col md="4">
                        <BoxPlan />
                    </Col>
                </Row>

            </section>
        </>
    );
}

export default Plan;