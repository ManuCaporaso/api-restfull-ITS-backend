# TRABAJO PRACTICO DE BACKEND- INSTITUTO TECNICO SUPERIOR CIPOLLETTI
## PETICIONES CRUD CON JSON WEB TOKEN, EXPRESS VALIDATOR Y BCRYP

## REGISTRO DE USUARIO
# Método: POST

```
http://localhost:3000/api/auth/register

{
  "username": "tusuario",
  "email": "tusuario@example.com",
  "password": "password123"
}
```

## LOGIN DE USUARIO
# Método: POST
```
http://localhost:3000/api/auth/login

{
  "email": "tusuario@example.com",
  "password": "password123"
}
```

## OBTENER PERFIL DEL USUARIO
# Método: GET
```
http://localhost:3000/api/users/profile
Headers:
Authorization: Bearer <token>
(Reemplaza <token> con el token JWT que obtuviste en el login)
```

## ACTUALIZAR PERFIL DE USUARIO
# Método: PUT

```
URL: http://localhost:3000/api/users/profile
Headers:
Content-Type: application/json
Authorization: Bearer <token>

{
  "username": "nuevonombreusuario",
  "email": "nuevonombreusuario@example.com",
  "password": "newpassword123"
}
```


## ELIMINAR CUENTA DE USUARIO
# Método: DELETE

```
URL: http://localhost:3000/api/users/profile
Headers:
Authorization: Bearer <token>
```
