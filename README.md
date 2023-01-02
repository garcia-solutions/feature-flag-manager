# Feature Flag Manager

## Tech
- [AdonisJS](https://adonisjs.com/) - API
- [PostgreSQL](https://www.postgresql.org/) - DB

## Installation
Use Dockerfile to create a serverless application or for docker usage in server:

#### Example
```sh 
docker pull matheusgarcia/feature-flag-manager

docker run -p 3333:3333 -e PORT=3333 -e APP_KEY=20dKaM8EmziPXVmwb5qnQ6Jfw2XqD0wh -e DRIVE_DISK=local -e DB_CONNECTION=pg -e PG_HOST=127.0.0.1 -e PG_PORT=5432 -e PG_USER=postgres -e PG_PASSWORD=1234 -e PG_DB_NAME=postgres -e ROOT_PASSWORD=1234 -d matheusgarcia/feature-flag-manager
```

## Environments
We need some environment variables for our API:
| Name | Description |
| ------ | ------ |
| PORT | Port to expose the API |
| APP_KEY | Generate a random key to protect your API |
| DRIVE_DISK | Use 'local' |
| DB_CONNECTION | Use 'pg' |
| PG_HOST | IP address or domain of your postgresql database |
| PG_PORT | Port, usally 5432 |
| PG_USER | User of the postgresql server |
| PG_PASSWORD | Password of the postgresql server |
| PG_DB_NAME | Database name to connect the API |
| ROOT_PASSWORD | Password to authenticate as root in the API |

## Tech Infos
- The auth token duration is 5 min;
- All operation with users or feature flags are logged in database;
- Comments and suggestions are welcome;

## Endpoints
See Postman collection in repo:
[Postman Collection](Feature-Flag-Manager.postman_collection.json)