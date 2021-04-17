

import Simbolo from '../assets/img/Group 92.1.svg';
import Check from '../assets/img/ic_check.svg';

const BoxPlan = () => {
    return ( 
        <div className="card-cobertura">
            <div className="modelo">
                <div className="part-1">
                    <h3>$35.00</h3>
                    <p>mensuales</p>

                </div>
                <img 
                    src={Simbolo}
                    alt="icono"
                />

            </div>

            <div className="detalles">
                <p>El precio incluye:</p>
                <ul>
                    <li><img src={Check} alt="check"/> Llanta de repuesto</li>
                    <li><img src={Check} alt="check"/> Analisis de motor</li>
                    <li><img src={Check} alt="check"/> Aros gratis</li>
                </ul>
                <a href="/thanks" className="btnRimac">Lo quiero</a>
            </div>

        </div>
    );
}

export default BoxPlan;