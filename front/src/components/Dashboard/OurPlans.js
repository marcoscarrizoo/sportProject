import React from 'react'
import './ourplans.css'

const OurPlans = () => {
    const imagen = 'https://dam.cosmoenespanol.com/wp-content/uploads/2020/07/5-razones-para-levantar-pesas.jpg'
    return (
        <div z>
            <div className='box'>
                <h1 className='ourPlans-title'>PLANES</h1>
            </div>

        <div style={{backgroundImage: `url(${imagen})`}} className='text'>
            <div className='data'>
                <div>
                    SportGym es la marca líder en servicios deportivos más grande de la Argentina desde hace más de 25 años.<br></br>
                    Cuenta con +90 centros deportivos adheridos con máquinas de última generación e instalaciones modernas y <br></br>
                    espaciosas para garantizarle  a sus más de 100K socios el mejor entrenamiento. 
                    El socio puede elegir entre los tres planes que ofrecemos: 
                    <p>&nbsp;</p>
                </div>

                <div className='standar'>
                    <h3>PLAN STANDAR:</h3> consiste en el libre acceso a los Servicios únicamente en los Locales identificados como PLUS <br></br>
                    que integran la Cadena de Clubes. Promoción disponible en algunos locales; con acceso limitado a determinados locales. <br></br> 
                    podran acceder a sala de musculacion y solo tendran acceso a la sucursal elegida por el usuario
                </div>

                <p>&nbsp;</p>

                <div className='premium'>
                  <h3>PLAN PREMIUM:</h3> 
                  consiste en el libre acceso a los Servicios en los Locales identificados como TOTAL; PLUS, que integran la Cadena de Clubes, <br></br>
                  pudiendo ingregar libremente a cualquiera de nuestras sucursales, con el carnet de socio PREMIUM, tambien <br></br>
                  tendra acceso ILIMITADO a todas las actividades que el club ofrece, tanto recreativas como a la piscina sin costo adicional. 
                  <p>&nbsp;</p>
                  
                </div>

                <h4>En SportGym cuidamos tu salud, por eso te recordamos que tu apto médico es indispensable al momento de iniciar una actividad física (leyes nº 139 y 12329)</h4>
                </div>
                  
        </div>
        
        </div>
    )
}

export default OurPlans
