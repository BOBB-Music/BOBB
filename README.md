# BOBB

TODO: Add a nice header

## Running BOBB

### Getting started

```bash
$ git clone git@github.com:bobb-music/BOBB.git
```

**Copy the `.env.example` to `.env` and change the values in the `.env file`**

---

### Docker (Recommended)

#### Prerequisite

-   [Docker](https://www.docker.com/)

### Running the api

```bash
$ docker-compose up -d db
$ docker-compose up api
```

### Running the client

```bash
$ docker-compose up client
```

### Running migrations

```bash
$ docker-compose exec -it api yarn prisma migrate dev
```

---

### NodeJS

#### Prerequisite

-   [NodeJS 20.x](https://nodejs.org/en/download)
-   [PostgresDB](https://www.postgresql.org/)

#### Installing

```bash
$ yarn
$ yarn prisma generate
$ yarn prisma migrate dev
```

### Running the api

```bash
# watch mode (recommended)
$ yarn api:start

# production mode
$ yarn api:start:prod
```

### Running the client

```bash
# watch mode (recommended)
$ yarn client:codegen
$ yarn client:start

# production mode
$ yarn client:start:prod
```

---

## Stay in touch

-   Contributor - [Jurien Hamaker](https://jurien.dev)
-   Website - [https://bobb.app](https://bobb.app/)

## License

BOBB is [GNU AGPLv3](LICENSE).
