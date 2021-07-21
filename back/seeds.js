const products = [
  {
    "name": "True Made Whey Protein",
    "description":
      "ENA TRUEMADE WHEY PROTEIN 2LBS - 30 MEDIDAS BLEND DE PROTEINA ISOLADA + CONCENTRADA",
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_2X_871368-MLA31115313342_062019-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_701787-MLA41888172848_052020-O.webp",
    ],
    "price": 2250.21,
    "stock": 103,
    "categories": [
      {
        "name": "suplemento",
        "image":
          "https://http2.mlstatic.com/D_NQ_NP_756133-MLA41827275963_052020-O.webp",
      },
    ]
  },
  {
    "name": "Ena Protein Bar Caja X 16u 46g",
    "description": "ENA PROTEIN BAR",
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_707077-MLA40743470620_022020-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_779555-MLA40743624545_022020-O.webp",
    ],
    "price": 1315.19,
    "stock": 109,
    "categories": [
      {
        "name": "suplemento",
        "image":
          "https://blog.runnics.com/wp-content/uploads/2019/10/zapatillas-correr-tipos-1024x529-1.jpg",
      }
    ]
  },
  {
    "name": "Fish Oil 1200mg Nature's Bounty",
    "description":
      "Un suplemento dietario que contiene ácidos grasos omega-3, incluidos EPA y DHA. Aceite De Pescado Omega 3",
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_904826-MLA44008957239_112020-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_779555-MLA40743624545_022020-O.https://http2.mlstatic.com/D_NQ_NP_687475-MLA41534188094_042020-O.webp",
    ],
    "price": 1011.19,
    "stock": 105,
    "categories": [
      {
        "name": "suplemento",
        "image":
          "https://blog.runnics.com/wp-content/uploads/2019/10/zapatillas-correr-tipos-1024x529-1.jpg"
      }
    ]

  },
  {
    "name": "Shaker Vaso Mezclador Para Proteinas",
    "description": "Mezclador Proteina",
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_749209-MLA32861738659_112019-O.webp",
    ],
    "price": 349.29,
    "stock": 157,
    "categories": [
      {
        "name": "Shaker",
        "image":
          "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/FITNES34/1200x900-FITNES34-2.jpg&w=500&q=100",
      }
    ]
  },
  {
    "name": "Mancuerna Acero Pintado Ajustable 20kg",
    "description":
      "Equipamiento profesional que se adapta perfectamente a tus necesidades de ejercicio y entrenamiento sin ir al gimnasio.",
    "images": [
      "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/FITNES34/1000x1000-FITNES34.jpg&w=500&q=100",
    ],
    "price": 10805.12,
    "stock": 178,
    "categories": [
      {
        "name": "articulos de gimnasio",
        "image":
          "https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/FITNES34/1200x900-FITNES34-2.jpg&w=500&q=100",
      },
    ]
  },
  {
    "name": "Pasta De Mani Mantequilla Vitapower",
    "description":
      "Pasta de Mani Vitapower Origen: Brasil peso: 1kg cero grasas trans cero azucar agregado.",
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_812537-MLA41430185432_042020-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_958780-MLA41430158985_042020-O.webp",
    ],
    "price": 1450.11,
    "stock": 186,
    "categories": [
      {
        "name": "suplemento",
        "image":
          "https://https://www.mundodeportivo.com/r/GODO/MD/p8/ContraPortada/Imagenes/2021/04/27/Recortada/img_asola_20210401-060032_imagenes_md_propias_asola_71jcb9zm-l_ac_ux575_-klCB-U493486885716btG-572x326@MundoDeportivo-Web.jpg.mlstatic.com/D_NQ_NP_756133-MLA41827275963_052020-O.webp",
      }
    ]
  },
];

const users = [
    {
        "id": "d1687b07-058c-414a-bb5a-77a8d897be57",
        "firstName": "Knut",
        "lastName": "Waale",
        "email": "knutwaale@gmail.com",
        "password": "1234",
        "userType": "S"
    },
    {
        "id": "e8dfefe1-fda2-4edd-b188-970a39d70685",
        "firstName": "Marcos",
        "lastName": "Carrizo",
        "email": "mcarrizo@gmail.com",
        "password": "1234",
        "userType": "C"
    },
    {
        "id": "04752f7e-e5e4-483d-bcdb-c1d500a9ed94",
        "firstName": "Brian",
        "lastName": "Santaran",
        "email": "bsantaran@gmail.com",
        "password": "1234",
        "userType": "A"
    },
    {
        "id": "14744522-4890-462e-8b7b-ed79fa2cf78d",
        "firstName": "Daniel",
        "lastName": "Maers",
        "email": "dmaers@gmail.com",
        "password": "1234"
    },
    {
        "id": "49750430-28da-4202-bb69-30dd23d918c4",
        "firstName": "Francisco",
        "lastName": "Garrido",
        "email": "fgarrido@gmail.com",
        "password": "1234"
    }
];
const orders = [
    //Primera order (Etapa 1)
    {
        "orderState": "cart",
        "userId": "d1687b07-058c-414a-bb5a-77a8d897be57",
        "productId": 1,
        "quantity": 1
    }
];
module.exports = {

    products,
    users,
    orders
}

