# toolboxtv


Bienvenidos!

Dentro del repositorio existen 2 carpetas, frontend y backend. Para correr ambas es necesario accesarlas individualmente y ejecutar npm install.
Uana vez las dependencias han sido instaladas se puede construir la imagen y el container para servir las apps.
es necesario ejecutar estos comandos en ambas carpetas

sudo docker build -t <nombre> .
sudo docker run -p <port>:<port> -d <nombre>:latest
  
Para reemplazar <nombre> sugiero usar los nombres de las apps frontend ó backend según corresponda.
Para los puertos sugiero usar 3000 para frontend y 5500 para el backend. Ambos puertos han sido configurados dentro del proyecto para servir las apps de esa manera.
  
  
 Agradezco el tiempo de parte de ustedes para revisar este proyecto, quedo atento a feedback.
 Muchas gracias!
