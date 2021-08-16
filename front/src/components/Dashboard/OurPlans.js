import React from 'react'
import Footer from '../Footer'
import './ourplans.css'

const OurPlans = () => {
    const imagen = 'https://p4.wallpaperbetter.com/wallpaper/7/252/1023/simple-texture-gradient-wallpaper-preview.jpg'
    return (
        <div className='ourPlans-container' style={{backgroundImage: `url(${imagen})`}}>
             
             <h1>Quienes Somos </h1>  
            

        
                <div>
                    SportGym es la marca líder en servicios deportivos más grande de la Argentina desde hace más de 25 años.
                    Cuenta con +90 centros deportivos adheridos con máquinas de última generación e instalaciones modernas y 
                    espaciosas para garantizarle  a sus más de 100K socios el mejor entrenamiento. 
                    El socio puede elegir entre los tres planes que ofrecemos: 
                   
                </div>

                <div>
                    PLAN STANDAR: consiste en el libre acceso a los Servicios únicamente en los Locales identificados como PLUS 
                    que integran la Cadena de Clubes. Promoción disponible en algunos locales; con acceso limitado a determinados locales. 
                    podran acceder a sala de musculacion y solo tendran acceso a la sucursal elegida por el usuario
                </div>

                {/* <p>&nbsp;</p> */}

                <div>
                  PLAN PREMIUM:
                  consiste en el libre acceso a los Servicios en los Locales identificados como TOTAL; PLUS, que integran la Cadena de Clubes, 
                  pudiendo ingregar libremente a cualquiera de nuestras sucursales, con el carnet de socio PREMIUM, tambien
                  tendra acceso ILIMITADO a todas las actividades que el club ofrece, tanto recreativas como a la piscina sin costo adicional. 
                  {/* <p>&nbsp;</p> */}
                  
                </div>

                {/* <h4>En SportGym cuidamos tu salud, por eso te recordamos que tu apto médico es indispensable al momento de iniciar una actividad física (leyes nº 139 y 12329)</h4> */}
                
                  
        
        {/* <Footer/> */}
        </div>
    )
}

export default OurPlans
