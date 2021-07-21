# Escenarios
## 1-Crear/Actualizar Carrito
### Ruta funcionando, faltan detalles verificar si la orden es de tipo carrito
```js
//Ruta
//PUT /localhost:3001/create/update
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
## Consulta Ruta prueba - Crear/Actualizar Carrito
```js
//PUT localhost:3001/order/addOrder
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

## 2-Eliminar un solo producto del carrito por su ID
```js
//DELETE localhost:3001/order/delete/product
//Devuelve `Producto ID: ${productId} eliminado`
//Back recibe body:
const body = {
  userId,
  productId
}
```
## Consulta Ruta prueba - Eliminar un solo producto del carrito por su ID

### Recordar que tiene que existir la orden para poder eliminar productos
```js
//DELETE localhost:3001/order/addOrder
//Consulta 1
{
        "userId": "d1687b07-058c-414a-bb5a-77a8d897be57",
"productId":2
    }
//Consulta 2
{
        "userId": "d1687b07-058c-414a-bb5a-77a8d897be57",
"productId":3
    }

```

## 3-Obtener lista de las ordenes del carrito segun userId
### Funcion para administrador
```js
//Funcion
//GET localhost:3001/order/:userId
//Devuelve las ordenes del usuario
//Back recibe por query.params un userId
```
## Consulta Ruta prueba - Lista de las ordenes del carrito segun userId

### Recordar que tiene que existir la orden para poder eliminar productos
```js
//GET localhost:3001/order/d1687b07-058c-414a-bb5a-77a8d897be57
//Consulta 1
'localhost:3001/order/d1687b07-058c-414a-bb5a-77a8d897be57'
```

## 4-Cambiar estado del carrito por userId
### Esta es para el caso de que el estado de cambie a lualquiera de los siguientes:
- PENDING 
- PROCESSING
- COMPLETED
- CANCELED

```js
//DELETE localhost:3001/order/delete/product
//Devuelve `Producto ID: ${productId} eliminado`
//Back recibe body:
const body = {
  userId,
  productId
}
```

## 5-Vaciar el carrito de la orden por userId
### 
```js
//DELETE localhost:3001/order/delete/product
//Devuelve `Producto ID: ${productId} eliminado`
//Back recibe body:
const body = {
  userId,
  productId
}
```

## Consulta Ruta prueba - Eliminar un solo producto del carrito por su ID

### Recordar que tiene que existir la orden para poder eliminar productos
```js
//DELETE localhost:3001/order/addOrder
//Consulta 1
{
        "userId": "d1687b07-058c-414a-bb5a-77a8d897be57",
"productId":2
    }
//Consulta 2
{
        "userId": "d1687b07-058c-414a-bb5a-77a8d897be57",
"productId":3
    }

```
# Lo que si gue no esta terminado.
## 3-Cambiar stock de products, cuando orderState === 'processing'

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
