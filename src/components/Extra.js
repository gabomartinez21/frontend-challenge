import React, {useState} from 'react';

import ArrowToggle from '../assets/img/chevrot.svg';

const Extra = ({info}) => {
    
    const [show, setShow] = useState(false)
    const [activar, setActivar] = useState(false)
    const [agregado, setAgregado] = useState('Agregar')

    const agregarPlan = ()=>{
        if(!activar){
            setAgregado('Quitar')
            setActivar(true)
        }else{
            setAgregado('Agregar')
            setActivar(false)
        }
    }
    return ( 
        <li className="extra">
            <img src={info.icono} alt="example"/>
            <div className="box-info">
                <h4>{info.titulo}</h4>
                <button onClick={agregarPlan}><span>{activar ? '-' : '+'}</span> {agregado}</button>
                <div className={`descripcion ${show ? 'show' : ''}`}>
                    <p>{info.descripcion}</p>

                </div>
            </div>
            <button className={`toggleBtn ${show ? 'active' : ''}`} onClick={()=> !show ? setShow(true) : setShow(false)}><img src={ArrowToggle} alt="chevrot"/></button>
        </li>
    );
}

export default Extra;