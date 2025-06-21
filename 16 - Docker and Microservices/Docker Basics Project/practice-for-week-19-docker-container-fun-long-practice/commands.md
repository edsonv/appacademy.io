docker container run -d --name nginx -p 8080:80 nginx

docker container run -d --name httpd -p 8100:80 httpd

docker container run -d --name mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 mysql

docker container stop nginx
docker container stop https
docker container stop mysql

docker container rm nginx
docker container rm https
docker container rm mysql

docker container run -it --name web nginx bash
ls
exit
docker container start nginx
docker container ls

docker container run --name ubuntu -d ubuntu

docker container run --name ubuntu -d -t ubuntu

docker exec -i ubuntu bash

docker container stop ubuntu
docker container rm ubuntu

docker container run -it --name ubuntu -d ubuntu

docker container run -it --name notliketheother ubuntu bash
docker container run -t -d --name characters alpine
docker exec -i characters /bin/sh -c "while :; do wget -qO- https://swapi.dev/api/people/?search=r2; printf '\n'; sleep 5s; done"

docker container run --name characters alpine /bin/sh -c "while :; do wget -qO- https://swapi.dev/api/people/?search=r2; printf '\n'; sleep 5s; done"

docker container run --name elasticsearch1 --net AppAcademy --net-alias elastic -d elasticsearch:2
docker container run --name elasticsearch2 --net AppAcademy --net-alias elastic -d elasticsearch:2

docker container run --name alpine --net AppAcademy -t -d alpine nslookup elastic1
docker container run --name alpine --net AppAcademy -t -d alpine
docker exec -i alpine nslookup elastic1
docker exec -i alpine nslookup elastic2
docker container run --name alpine --net AppAcademy alpine nslookup elastic

docker run -it --rm --net AppAcademy --name manager alpine/curl sh

while true; do curl -s elastic:9200; sleep 1; done
