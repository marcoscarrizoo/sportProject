# Escenarios

## 1-Eliminar producto carrito

```js
//Ruta
//DELETE /no se todavía la ruta
//Back recibe body:
const body = {
    productId,
    userId
}
```

## 2-Cambiar stock de products, cuando orderState === 'processing'

```js
//Ruta
//PUT /no se todavía la ruta
//Back recibe body:
const body = {
        orderState === 'processing'
        userId,
        productsId:[]
    }
```
## 3-Cambiar quantity de un producto del cart

```js
//Ruta
//PUT /no se todavía la ruta
//Back recibe body:
const body = {
        userId,
        productId,
//Por defecto quantity agrega 1, si no, establece el quantity en el valor que se pase por body. Es decir, si no se pasa valor se iguala a uno mas.
        quantity
    }
```
## 4-Cuando un usuario se loguea y tiene carrito (Falta verificar si es de tipo cart)

La ruta es put porque si tiene orden previa se va a fusionar, si no, se crea. (Creo que debe funcionar)
```js
//Ruta
//PUT /localhost:3001/order/addOrder
//Back recibe body:
const body = {
        userId,
//array de productos, con id y cantidad
        products:[
            {
                productId,
                quantity
            },
            {
                productId,
                quantity
            },
        ]
    }
```
## Consulta Ruta prueba
```js
//PUT /localhost:3001/order/addOrder
//Consulta 1
{
        "userId": "d1687b07-058c-414a-bb5a-77a8d897be57",
        "products":[
            {
                "productId":1,
                "quantity":3
            },
            {
                "productId":2,
                "quantity":6
            }
        ]
    }
//Consulta 2
{
    "userId": "d1687b07-058c-414a-bb5a-77a8d897be57",
        "products": [
            {
                "productId": 3,
                "quantity": 13
            },
            {
                "productId": 2,
                "quantity": 6
            },
            {
                "productId": 1,
                "quantity": 6
            }
        ]
}

```

## Json que devuelve la ruta getOrdersByUserId
Modelo
```js
[
  {
    "id": "7155b2bd-ece6-438a-b665-c76033564aac",
    "orderState": "cart",
    "shippingState": "not initialized",
    "shippingLocation": "not initialized",
    "paymentState": "not initialized",
    "createdAt": "2021-07-18T22:01:27.968Z",
    "updatedAt": "2021-07-18T22:01:28.068Z",
    "userId": "d1687b07-058c-414a-bb5a-77a8d897be57",
    "products": [
      {
        "id": 1,
        "name": "True Made Whey Protein",
        "description": "ENA TRUEMADE WHEY PROTEIN 2LBS - 30 MEDIDAS BLEND DE PROTEINA ISOLADA + CONCENTRADA",
        "images": [
          "https://http2.mlstatic.com/D_NQ_NP_2X_871368-MLA31115313342_062019-F.webp",
          "https://http2.mlstatic.com/D_NQ_NP_701787-MLA41888172848_052020-O.webp"
        ],
        "price": 2250,
        "stock": 3,
        "Order_Product": {
          "price": 2250,
          "quantity": 1,
          "orderId": "7155b2bd-ece6-438a-b665-c76033564aac",
          "productId": 1
        }
      }
    ],
    "user": {
      "id": "d1687b07-058c-414a-bb5a-77a8d897be57",
      "email": "knutwaale@gmail.com",
      "password": "1234",
      "userType": "S",
      "firstName": "Knut",
      "lastName": "Waale"
    }
  },
  {
    "id": "84133c87-bf34-49f2-97d7-32c682e7d341",
    "orderState": "cart",
    "shippingState": "not initialized",
    "shippingLocation": "not initialized",
    "paymentState": "not initialized",
    "createdAt": "2021-07-18T22:01:31.108Z",
    "updatedAt": "2021-07-18T22:01:31.164Z",
    "userId": "d1687b07-058c-414a-bb5a-77a8d897be57",
    "products": [
      {
        "id": 1,
        "name": "True Made Whey Protein",
        "description": "ENA TRUEMADE WHEY PROTEIN 2LBS - 30 MEDIDAS BLEND DE PROTEINA ISOLADA + CONCENTRADA",
        "images": [
          "https://http2.mlstatic.com/D_NQ_NP_2X_871368-MLA31115313342_062019-F.webp",
          "https://http2.mlstatic.com/D_NQ_NP_701787-MLA41888172848_052020-O.webp"
        ],
        "price": 2250,
        "stock": 3,
        "Order_Product": {
          "price": 2250,
          "quantity": 1,
          "orderId": "84133c87-bf34-49f2-97d7-32c682e7d341",
          "productId": 1
        }
      }
    ],
    "user": {
      "id": "d1687b07-058c-414a-bb5a-77a8d897be57",
      "email": "knutwaale@gmail.com",
      "password": "1234",
      "userType": "S",
      "firstName": "Knut",
      "lastName": "Waale"
    }
  },
  {
    "id": "4dc04d29-1b06-4358-a236-d7db0649be67",
    "orderState": "cart",
    "shippingState": "not initialized",
    "shippingLocation": "not initialized",
    "paymentState": "not initialized",
    "createdAt": "2021-07-18T22:01:34.501Z",
    "updatedAt": "2021-07-18T22:01:34.615Z",
    "userId": "d1687b07-058c-414a-bb5a-77a8d897be57",
    "products": [
      {
        "id": 1,
        "name": "True Made Whey Protein",
        "description": "ENA TRUEMADE WHEY PROTEIN 2LBS - 30 MEDIDAS BLEND DE PROTEINA ISOLADA + CONCENTRADA",
        "images": [
          "https://http2.mlstatic.com/D_NQ_NP_2X_871368-MLA31115313342_062019-F.webp",
          "https://http2.mlstatic.com/D_NQ_NP_701787-MLA41888172848_052020-O.webp"
        ],
        "price": 2250,
        "stock": 3,
        "Order_Product": {
          "price": 2250,
          "quantity": 1,
          "orderId": "4dc04d29-1b06-4358-a236-d7db0649be67",
          "productId": 1
        }
      }
    ],
    "user": {
      "id": "d1687b07-058c-414a-bb5a-77a8d897be57",
      "email": "knutwaale@gmail.com",
      "password": "1234",
      "userType": "S",
      "firstName": "Knut",
      "lastName": "Waale"
    }
  }
]
```
