# Parcial 1 - Sergio Oliveros

## Instalación y ejecución

* Clonar repositorio:

```bash
git clone https://github.com/ElSergioOliveros/Parcial1-Web.git
```

* Instalar dependencias:

```bash
cd parcial1
npm install
```

* Ejecutar:

```bash
npm start
```

## Decisiones y proceso de desarrollo: 

Para el desarrollo de esta aplicación web se utilizaron 2 tecnologías clave, el framework de desarrollo de Javascript *React* y el sistema de disñeo *Bootstrap*. Donde las principales razones de uso para estas 2 fueron su diseño simple y poderoso, que permiten prototipado rápido y sin muchas complicaciones. De forma que permiten un desarrollo ágil y de poco esfuerzo para la obtención de resultados.      

Para la organización del proyecto, inicialmente se trató de hacer una organización fuertemente desacoplada. Intentando mantener cada página (Login y Home) en un archvio diferente, al igual que sus compoentes (Barra de navegación, tarjetas y grillas). Sin emabergo, debido a problemas en la transferencia de parámetros a la hora de llamar componentes distintos, se optó por manejar archvios fuertemente acoplados, pero que mantenian contexto local. De forma que era posible usar variables previamente definidas. 

Finalmente, los componentes utilizados fueron los siguientes:
* *useState*: Para actualizar el valor de variables que representan los campos donde el usuario es capaz de ingresar valores. 
* *useNavigate*: Para redireccionar entre páginas de la aplicación.
* *Bootstrap - Container, Row, Col, Form, Button.*: Para permitir la visualización de componentes gráficos complejas mediante el uso de una librería simple. 
* *Bootstrap - Modal*: Para lograr mostrar componentes gráficos encima de otros. En especifico para mostrar el detalle de las cartas.  

## Visualización:
![image](https://github.com/user-attachments/assets/ddce32dc-5508-43ef-b52e-25901a3a62a1)

![image](https://github.com/user-attachments/assets/395ba5ff-38ba-427b-a98a-1f8536641b70)

