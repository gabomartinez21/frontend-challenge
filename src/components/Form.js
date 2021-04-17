import React, {useState} from 'react';
import Select from 'react-select';
import getUsers from '../config/user';

const Form = ({usuario, setUsuario}) => {
    
    const options = [
        { value: 'dni', label: 'DNI' },
        { value: 'ce', label: 'CE' },
        { value: 'pasaporte', label: 'Pasaporte' }
    ]
    
    const [politica, setPolitica] = useState(false)
    

    const handleSubmit = e=>{
        e.preventDefault();
        if(!politica){
            alert('Debes aceptar las Políticas de Privacidad y los Terminos y Condiciones')
        
        }else if( usuario.doc==='' && usuario.celular==='' && usuario.placa ===''){
            
            alert('Debes rellenar los campos')
        }else{
            getUsers().then(({results}) =>{
                const user = results[0];
                
                setUsuario({...usuario, 
                    id:user.login.uuid,
                    nombre:user.name.first,
                    apellido:user.name.last,
                    correo:user.email,
                    tipoDoc: usuario.tipoDoc === '' ? options[0].value : usuario.tipoDoc
                })
                
            }).then(res =>{
                localStorage.setItem('usuario', JSON.stringify(usuario))
        
                window.location.href = '/datos-auto/auto'
    
            })

        }

        // setUsuario({...usuario})



    }

    

    return ( 
        <>
            <div className="formulario">
                <h2>Déjanos tus datos</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <Select options={options} defaultValue={options[0]}  onChange={(data)=> setUsuario({...usuario, tipoDoc:data.value})}/>
                        <input type="number" placeholder="Nro. de doc"  onChange={e => {if(e.target.value.length <=9) setUsuario({...usuario, doc:e.target.value})}} value={usuario.doc}/>

                    </div>
                    <input type="tel" placeholder="Celular" onChange={e => setUsuario({...usuario, celular:e.target.value})} value={usuario.celular} maxLength="9"/>
                    <input type="Text" placeholder="Placa"  onChange={e => setUsuario({...usuario, placa:e.target.value})} value={usuario.placa}/>
                    <div className="politicas">
                        <input type="checkbox" name="politicas" onChange={e => {e.target.checked ? setPolitica(true) : setPolitica(false)}}/>
                        <p>
                            Acepto la <a href="#">Política de Protección de Datos</a> Personales y los <a href="#">Términos y Condiciones.</a>
                        </p>

                    </div>

                    <button type="submit">Cotízalo</button>
                </form>

            </div>
        </>
    );
}

export default Form;