# SaatilanSeuranta
FullStack app, Spring boot and React.js

 git clone https://github.com/sasuolander/SaatilanSeurantaApi.git
 
 mvn clean install 
 
 mvn spring-boot:run
 
 You can run app also as Docker image.
 
  Build docker image : docker build -t demo .
 Run : docker run -d -p 8080:8080 demo
 When you want to stop it you need to check first name of app.
 app name : docker ps
 then run docker stop app_name

 App is in 127.0.0.1:8080

 
 Swagger doc is in 127.0.0.1:8080/swagger-ui.html
