# docker_node_tutorial
Tutorial to deploy an Node.js application on Docker


# Como rodar

É necessário ter o docker instalado.

### Rode os comandos:

```sh
$ docker build -t seunome/docker-node-tutorial .
$ docker run -p 3000:3000 -d seunome/docker-node-tutorial
```

### Acesse sua aplicação:

Em seu navegador vá até `localhost:3000`

### Comandos úteis:

Ver todas minhas imagens
```sh
$ docker images
```

Ver containers rodando neste momento:
```sh
$ docker ps
```

Parar a execução de um container (Substitua o CONTAINER ID pelo visto no `docker ps` )
```sh
$ docker kill <CONTAINER ID>
```
