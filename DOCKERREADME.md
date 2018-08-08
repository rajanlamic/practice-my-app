## Build image

docker build -t my-app-webpack .

## Run Container

docker run -it \
 -v ${PWD}:/usr/src/app \
 -v /usr/src/app/node_modules \
 -p 4000:9000 \
 -e CHOKIDAR_USEPOLLING=true \
 --rm my-app-webpack

## List images

docker images

## List container

docker container ls

## Stop docker container

docker stop containerId

## service

docker swarm init
docker stack deploy -c docker-compose.yml my-app-webpack
