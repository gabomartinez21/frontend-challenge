import React, {useEffect, useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from 'react-select';
import Auto from '../assets/img/icon_car.svg';

import ArrowRight from '../assets/img/chevrot right.png';

const TipoAuto = ({setUsuario, usuario}) => {

    //viewport
    const [viewport, setViewport] = useState(0);
    const widthDevice = ()=>{
        setViewport(window.innerWidth);
    }

    window.onresize = widthDevice
    
    useEffect(()=>{
        widthDevice();
    },[viewport]);


    const [seguro, setSeguro] = useState('$ 12,500')



    const optionsAnio = [
        { value: '2010', label: '2010' },
        { value: '2011', label: '2011' },
        { value: '2012', label: '2012' },
        { value: '2013', label: '2013' },
        { value: '2014', label: '2014' },
        { value: '2015', label: '2015' },
        { value: '2016', label: '2016' },
        { value: '2017', label: '2017' },
        { value: '2018', label: '2018' },
        { value: '2019', label: '2019' },
        { value: '2020', label: '2020' },
    ]
    const optionsAuto = [
        { value: 'audi', label: 'Audi' },
        { value: 'hyundai', label: 'Hyundai' },
        { value: 'mitsubishi', label: 'Mitsubishi' },
        { value: 'toyota', label: 'Toyota' },
        { value: 'ford', label: 'Ford' },
        { value: 'wolkswagen', label: 'Wolkswagen' }
    ]
    const optionsModelos = {
        'audi':[
            { value: 'a1', label: 'a1' },
            { value: 'a3', label: 'a3' },
            { value: 'tt', label: 'TT' }

        ],
        'hyundai':[
            { value: 'tucson', label: 'Tucson' },
            { value: 'elantra', label: 'Elantra' },
            { value: 'genesis', label: 'Genesis' }

        ],
        'mitsubishi':[
            { value: 'l200', label: 'l200' },
            { value: 'montero', label: 'Montero' },
            { value: 'outlander', label: 'Outlander' },

        ],
        'ford':[
            { value: 'focus', label: 'Focus' },
            { value: 'fiesta', label: 'Fiesta' },
            { value: 'mustang', label: 'Mustang' }

        ],
        'wolkswagen':[
            { value: 'golf', label: 'Golf' },
            { value: 't-cross', label: 'T-Cros' },
            { value: 'polo', label: 'Polo' },

        ]
    }
    


    const agregarRestar = (tipo) =>{
        let base = parseInt(seguro.replace(',', '').replace('$ ',''));

        if(tipo ==='rest'){
            if(base > 12500){
                base-=500;

            }
        }else{
            if(base < 16500){
            
                base+=500;
            }
            
        }
        base = base.toString();
        let newBase = '$ ';
        for(let i=0; i < base.length; i++){
            if(i === 1){
                newBase = newBase + base[i] + ','

            }else{
                newBase = newBase + base[i]

            }
        }

        setSeguro(newBase)

    }

    const handleSubmit = e => {
        e.preventDefault();

        localStorage.setItem('usuario', JSON.stringify(usuario))
        
        window.location.href = '/datos-auto/plan'
    }

    return (
        <>
            <h2>¡Hola <span>{usuario.nombre}!</span></h2>
            <p>Completa los datos de tu auto</p>
            <form className="formulario-info" onSubmit={handleSubmit}>
                <Row>
                    <Col md="8">
                        <Select options={optionsAnio} defaultValue={optionsAnio[0]} onChange={(data)=> setUsuario({...usuario, vehiculo:{...usuario.vehiculo, anio:data.value}})}/>
                        <Select options={optionsAuto} defaultValue={optionsAuto[0]} onChange={(data)=> setUsuario({...usuario, vehiculo:{...usuario.vehiculo, marca:data.value}})}/>
                        {usuario.vehiculo.marca !== '' ? (
                            <Select options={optionsModelos[usuario.vehiculo.marca]} placeholder="Modelo" onChange={(data)=> setUsuario({...usuario, vehiculo:{...usuario.vehiculo, modelo:data.value}})}/>

                        ) : null}
                    </Col>
                    <Col md="4">
                        <h4>AYUDA</h4>
                        <div className="modelo">
                            <div className="part-1">
                                <p>¿No encuentras el modelo?</p>
                                <a href="#">CLIC AQUÍ</a>

                            </div>
                            <img 
                                src={Auto}
                                alt="Auto"
                            />

                        </div>
                    </Col>
                    <Col md="8">
                        <div className="modelo">
                            <p>¿Tu auto es a gas?</p>
                            <div className="part-2">
                                <input type="radio" name="gas" value="si" id="gasSi" onChange={e => setUsuario({...usuario, vehiculo:{...usuario.vehiculo, combustible:e.target.value}})}/> 
                                <label htmlFor="gasSi">Si</label>
                                <input type="radio" name="gas" value="no" id="gasNo" onChange={e => setUsuario({...usuario, vehiculo:{...usuario.vehiculo, combustible:e.target.value}})}/>
                                <label htmlFor="gasNo">No</label>
                            </div>
                        </div>

                        <div className="group-3">
                            <div className="info-counter">
                                <h4>Indica la suma asegurada</h4>
                                <p><span>MIN $12,500</span><span>MIN $16,500</span></p>
                            </div>
                            <div className="counter">
                                <button type="button" onClick={()=>agregarRestar('rest')}>-</button>
                                <span>{seguro}</span>
                                <button type="button" onClick={()=>agregarRestar('sum')}>+</button>
                            </div>
                        </div>

                        <button type="submit">Continuar <img src={ArrowRight} alt="arrow"/></button>
                    </Col>
                </Row>

            </form>
        </>
    );
}

export default TipoAuto;