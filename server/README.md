## Setting up the Database with Docker and MySQL

Install a docker containerized MySQL dev environment using the following command.

```sh
docker run \
    -p 0.0.0.0:3999:3306 \
    --name filmpedia-db \
    -e MYSQL_ROOT_PASSWORD=password \
    -e MYSQL_USER=filmpedia-dev \
    -e MYSQL_PASSWORD=password \
    -e MYSQL_DATABASE=filmpedia \
    -d mysql:latest
```

This is going to create a docker instance `filmpedia-db`, running MySQL latest version with the root password being `password`. It also creates a database called `filmpedia`, creates a user called `filmpedia-dev` (with password being `password`).
