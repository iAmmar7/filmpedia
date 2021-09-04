## Setting up the Database with Docker and MySQL

Install a docker containerized MySQL dev environment using the following command.

```sh
docker run \
    -p 0.0.0.0:3999:3306 \
    --name cheff-rest-db \
    -e MYSQL_ROOT_PASSWORD=password \
    -e MYSQL_USER=cheff-rest-dev \
    -e MYSQL_PASSWORD=password \
    -e MYSQL_DATABASE=cheff-rest \
    -d mysql:latest
```

This is going to create a docker instance `cheff-rest-db`, running MySQL latest version with the root password being `password`. It also creates a database called `cheff-rest`, creates a user called `cheff-rest-dev` (with password being `password`).
