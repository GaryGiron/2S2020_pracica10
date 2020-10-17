# 2S2020_pracica10

## Instrucciones

## Levantar Docker con Jenkins

### Con docker-compose.yml 
  - docker-compose up -d
  
### con docker run

  - docker run --name jenkins -p 8080:8000 -p 50000:50000 -v jenkins_home:/var/jenkins_home jenkins/jenkins:latest
  
### OJO

Se utiliza la version latest para esta practica derivado que existe problema con las dependencias de las versiones anteriores al instalar los plugins

### Correr la aplicacion
La aplicacion consta de 4 proyectos en NodeJS los cuales son: cliente repartidor restaurante orquestador
Primero se debe ingresar a la carpeta y correr npm install, para que instale los repositorios que requiere, puesto que la carpeta de node-modules se elimino para subir el repositorio de forma mas ligera

#### Levantar los servidores 
cada uno se puede levantar al ingresar a la carpeta, instalar los modulos npm install Luego para iniciar la aplicacion se usa el comando set DEBUG=NombreApp:* & npm start en el cual se sustituye NombreApp por el que corresponde a cada una de las descritas anteriormente

#### Ingresar a la UI

Para Cliente localhost:3000 Para Restaurante localhost:3100 Para Repartidor localhost:3200, el orquestador esta en el puerto 3400 pero ya que solo es como intermediario no es necesario ingresar a alguna UI

Como caso Alternativo se tiene la rama SOA_PR4

Dentro de la carpeta video_practica_6 esta el video de Sonar.

##Descarga
Para descargar los artefatos en un archivo comprimido generado por Jenkins puede realizarlo por medio de la ruta:
https://github.com/GaryGiron/2S2020SA_artefactosApp
