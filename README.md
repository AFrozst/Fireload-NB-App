# Fireload-NB-App

Aplicacion Movil con **React Native** usando **Expo**

## Instalación de herramientas para el entorno de desarrollo

Como paso inicial deberemos instalar Node.js, este es un entorno en tiempo de ejecución multiplataforma, de código abierto, usando el lenguaje de programación JavaScript, asíncrono.

Descargar el CLI de Expo. (Nota: En caso de obtener el apk previamente se recomienta tener una cuenta en expo para finalizar con la contruccion de un archivo apk del proyecto)

    npm i -g expo-cli

este comando instalara de forma globa el CLI de Expo.

Una vez instalado Expo, procederemos a la instalación de Yarn, un nuevo tipo de instalador de paquetes JavaScript y gestor de dependencias donde introduce cambios en esa gestión de dependencias, en la ejecución de tareas y algunas mejoras de rendimiento, también en el cambio de enfoque en la descarga e instalación de los paquetes y en su gestión de las dependencias.

Podemos instalar Yarn corriendo el siguiente comando en la consola:

    npm i yarn

Como siguiente paso debemos instalar las dependencias del proyecto usando yarn, lo haremos de la siguiente manera, en consola corremos el siguiente comando:

    yarn add install

De esta manera tenemos todas las dependencias usados en este proyecto. _(Nota las instalacion de las dependencias, la ejecucion de la consola debe situarse dentro de la carpeta fireload-nb-app)_

## Correr “Fireload - App”

Lo primero es ingresar a la consola y dirigirno a la carpeta del proyecto y ejecutar el siguiente comando:

    yarn start

o si prefiere de igual forma puede ejecutar el comando por expo:

    expo start

La ventaja de usar el comando de Expo, puedes seguir la depuracion de la app en una interfaz web ejecutandose en un puerto destinado por expo. Se le muestra despues de ejecutar el comando.

  http://localhost:19002

Como ultimo paso es conectar nuestro dispositivo movil, por el codigo QR que ofrece expo. O usando un emulador Android o iOS.
