// import React from 'react'
// import './activities.css'


// const Activities = () => {
//     const itemData2 = [
//         {
//             img: 'https://www.bsaspersonaltrainer.com.ar/wp-content/uploads/2014/07/Musculacion-estetica-6-metodos-infalibles-para-hipertrofiar.jpg',
//             title: 'Musculación'
//         },
//         {
//             img: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/07/18/15634659732891.png',
//             title: 'CrossFit'
//         },

//         {
//             img: 'https://coolwallpapers.me/picsup/5724879-muay-thai-boxing-wallpapers.jpg',
//             title: 'Kick Boxing'
//         },
//         {
//             img: 'https://unycos.com/blog/wp-content/uploads/2019/03/entrenando-para-evitar-errores-que-cometemos-al-nadar.jpg',
//             title: 'Natacion'
//         },
//         {
//             img: 'https://img.wallpapersafari.com/desktop/728/410/1/7/b1vtO7.jpg',
//             title: 'Calistenia'
//         },
//         {
//             img: 'https://www.mensjournal.com/wp-content/uploads/2018/06/CyclingClass.jpg?quality=86&strip=all',
//             title: 'Spinning'
//         }

//     ]
//     return (
//         <div className='act-container'>

//             {/* <div className='divFather'>
//             {itemData2.map(e => 
//         <div className='items' style={{backgroundImage: `url(${e.img})`}}>
//          <div className='act-title'>{e.title}</div> 
//         </div>
//     )}
//             </div> */}
            

//                 <img className='img' src='https://www.bsaspersonaltrainer.com.ar/wp-content/uploads/2014/07/Musculacion-estetica-6-metodos-infalibles-para-hipertrofiar.jpg' alt='img'></img>


//                 <img className='img' src='https://www.bsaspersonaltrainer.com.ar/wp-content/uploads/2014/07/Musculacion-estetica-6-metodos-infalibles-para-hipertrofiar.jpg' alt='img'></img>


//                 <img className='img' src='https://www.bsaspersonaltrainer.com.ar/wp-content/uploads/2014/07/Musculacion-estetica-6-metodos-infalibles-para-hipertrofiar.jpg' alt='img'></img>
//                 <img className='img' src='https://www.bsaspersonaltrainer.com.ar/wp-content/uploads/2014/07/Musculacion-estetica-6-metodos-infalibles-para-hipertrofiar.jpg' alt='img'></img>

            

//         </div>
//     )
// }

// export default Activities
import React from 'react'
import './activities.css'

const ActivitiesImgs = () => {
 
const itemData2 = [
  {
      img: 'https://i.blogs.es/9cd306/istock-629767578/500_333.jpeg',
      title: 'Musculación'
  },
  {
      img: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/07/18/15634659732891.png',
      title: 'CrossFit'
  },

  {
      img: 'https://coolwallpapers.me/picsup/5724879-muay-thai-boxing-wallpapers.jpg',
      title: 'Kick Boxing'
  },
  {
      img: 'https://unycos.com/blog/wp-content/uploads/2019/03/entrenando-para-evitar-errores-que-cometemos-al-nadar.jpg',
      title: 'Natacion'
  },
  {
      img: 'https://img.wallpapersafari.com/desktop/728/410/1/7/b1vtO7.jpg',
      title: 'Calistenia'
  },
  {
      img: 'https://www.mensjournal.com/wp-content/uploads/2018/06/CyclingClass.jpg?quality=86&strip=all',
      title: 'Spinning'
  }

]
  return (
    <div className='act-container'>
        <div className='box2'><h1>Actividades</h1></div>
      {itemData2.map(e => 
        <div className='itemsAct' style={{backgroundImage: `url(${e.img})`}}>
         <div className='act-title'>{e.title}</div> 
        </div>
    )}
    </div>
  )
}

export default ActivitiesImgs
