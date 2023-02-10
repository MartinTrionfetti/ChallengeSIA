# Configurar setup
1-Crear la base de datos con el siguiente comando:

```sh
Create database SIA
```

2-Una vez creada ejecutar el script que se encuentra en la carpeta Database.
3-Error de Roslyn -> ejecutar en Consola PM el siguiente comando:

```sh
-Update-Package Microsoft.CodeDom.Providers.DotNetCompilerPlatform -r
```

4-Una vez abierta la solución hacer un restore package de la misma.
5-Compilar y ejecutar

## Features
- Alta, baja, modificación y listado de productos.
- Alta, baja, modificación y listado de categorías.

### Arquitectura/Back
- Net Framework 4.8
- SQLs
- Se utilizó inyección de dependencias.
- Se trabajó con Entity Framework.
- Mapeo de clases.(AutoMapper)
- Se habilitó el CORS para que pueda ser consumido de cualquier dominio.
- 
### Arquitectura/Front
- Angular 15.
- Vista ABM de productos.
- Vista ABM de categorias.
- Modals.
- Servicios para acceder a los controladores del back.
- RXJS para consumo de observables/BehaviourSubject.

##### Framework diseño
- Bootstrap



