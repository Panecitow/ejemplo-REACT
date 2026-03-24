# Documentación de Backend - API Panecitow 🥖

**Alfonso Garcia Hernandez** *5° Cuatrimestre - Desarrollo de Software Multiplataforma - Universidad Tecnológica de Xicotepec de Juárez*

---

## Descripción del Proyecto

Este proyecto es una **API RESTful** que sirve como backend para el sistema "Panecitow". Está diseñado para gestionar operaciones clave como el registro de usuarios, catálogo de productos (panes), categorías y carritos de compras. Muestra el uso práctico de bases de datos relacionales y mapeo objeto-relacional (ORM) en un entorno de servidor.

---

## Tecnologías Utilizadas

- **JavaScript**
- **Node.js**
- **Express.js** (Framework para el servidor)
- **Sequelize** (ORM para la base de datos)
- **MySQL** (Gestor de base de datos usando XAMPP)
- **NPM** (Gestor de paquetes)

---

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas antes de iniciar:
- **Node.js**: [Descargar Node.js](https://nodejs.org/) (NPM se instala automáticamente).
- **XAMPP**: [Descargar XAMPP](https://www.apachefriends.org/es/index.html) (Para correr el servidor de MySQL).

---

## Instalación y Configuración

Sigue estos pasos para configurar y levantar el servidor localmente:

### 1. Clonar el repositorio

1. Abre **GitHub** y copia el enlace HTTPS del repositorio.
2. Abre tu terminal (Git Bash o la de Visual Studio Code) en la carpeta donde guardarás el proyecto.
3. Ejecuta el comando:
   ```bash
   git clone (https://github.com/Panecitow/ejemplo-REACT.git)

### 2.Instalar  dependencias necesarias
   cd BackEnd-Panecitow
npm install

### 3. Configurar la Base de Datos (XAMPP)
Abre el Panel de Control de XAMPP y enciende el servicio de MySQL.

Ingresa a http://localhost/phpmyadmin/ en tu navegador.

Crea una base de datos nueva llamada exactamente: db_panecitow.

(Opcional) Importa el archivo db_panecitow.sql incluido en el proyecto. Si no lo haces, Sequelize sincronizará las tablas automáticamente al iniciar.

### 4. Variables de Entorno
Crea un archivo llamado .env en la raíz del proyecto (al mismo nivel que app.js) y agrega la siguiente configuración:

Fragmento de código
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=
DB_NAME=db_panecitow
DB_PORT=3306

PORT=3000
### 5. Iniciar el Servidor
Levanta la API en modo desarrollo ejecutando:

Bash
node app.js
