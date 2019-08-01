FROM openjdk:8-jdk-alpine
MAINTAINER sasu
VOLUME /tmp
ARG JAR_FILE
ADD /target/api-0.0.1-SNAPSHOT.jar /app.jar
ENTRYPOINT ["/usr/bin/java", "-Dspring.profiles.active=default","-jar","app.jar"]