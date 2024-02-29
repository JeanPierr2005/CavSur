# CavSur


**Descripción** 


CAVSUR es una entidad creada para satisfacer
necesidades de terceros basada en la asistencia a
partidos, es decir la prestación de servicios a entidades que
lo requieran, esto por todo el valle del sur.


La persona que se registra en la página web podrá postular eventos deportivos a realizar, este evento
necesitará de la asistencia de árbitros los cuales
el mismo usuario registrado solicita dependiendo
de los que se encuentren disponibles. Adicional
tendrá un apartado donde registrará los detalles
del evento en cuestion.

Este proyecto se esta trabajando en React con Laravel, y como gestor de base de datos MySQL.


**Instalación** 

pasos para abrir el proyecto:
- Abrir el Visual Studio Code.
- Iniciar el xampp o el gestor de base de datos.
- Abrir la terminal de comandos.
- Ingresar el comando 
```bash
  php artisan run serve
  npm run dev
```
- Darle click al link que nos arroja la consola o ir al buscador de google y poner localhost + el puerto correspodiente.
- Ya está todo hecho, ya se puede navegar por la página.


**Estructura del proyecto** 

Nuestro proyecto trabajado con Laravel se ve estructurado de esta forma:

app/: En este directorio encontramos los controladores que a su vez contienen los Middleware y los Requests. Aparte de los controladores se muestran los modelos de cada entidad.

database/: Carpeta de la base de datos donde se encontrarán todas las migraciones necesarias y hechas en nuestro proyecto.

resoucers/: Acá almacenamos todos los componentes de nuestro proyecto,  todos los layouts y las rutas necesarias para que el proyecto funcione de manera correcta.

**Uso** 

Primeramente el usuario deberá registrarse para poder acceder a los apartados y funcionalidades de la página. Luego de esto podrá navegar, consultar sobre la corporación y ver las fotos que representa a la comunidad de CavSur.

Este usuario puede registrar eventos propios o visualizar los propuestos por demás personas. Agregará eventos mediante un formulario que pide los siguientes datos:
- Datos de la persona a cargo tales como: Nombre, Apellidos, Número de documento y su número de contacto.
- Datos propios del evento como: Ubicación, fecha y hora, actividad a realizar y el número de arbitros requeridos para dicho evento.
Despues de finalizar con el registro, si se le olvidó algun dato imporatante puede modificar el evento recientemente agregado o eliminarlo si así lo desea, estas funcionalidades se encuentran en la parte derecha de la tabla donde se visualiza el evento creado.

Ademas de registrar eventos podrá anexar los detalles de este o visualizar los dellates de eventos anteriores propuestos por si mismo o por otra persona, al igual mediante un formulario que pedirá los datos de la persona y los detalles del dichoso evento. Se podrá modificar y eliminar de la misma manera.

Por parte del Administrador tendrá un apartado donde registrará a los arbitros disponibles para que asistan a los eventos registrados por los usuarios. Este formulario será basado en los datos personales del arbitro, tales como: Nombre, Apellidso, Número de documento y número de contacto. Adicional también podrá modificar la información o eliminarla en caso tal de que el arbitro no se encuentre disponible. 
El Administrador únicamente podrá visualizar los eventos y los detalles de los partidos registrados pero no podrá ejercer acciones sobre estos como modificar o eliminar.


**Estado** 

Actualmente este proyecto sigue en desarrollo. Su equipo tabaja en las actualizaciones tanto a nivel de diseño gráfico como infraestructual para entregar un proyecto totalmente funcional que no se deje debilitar por los demás en el mercado y así llegar al exito planeado.

**Créditos**

En desarrollo por:
+ Jean Pierre Valencia 
+ Manuela Gallego
                
