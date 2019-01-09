# Carvexco


This repository contains microservices for the carvexco app.

### Getting started with the application

Prerequisites:
  - Git
  - Docker
  - Docker compose
  - npm
  - node
  
```sh
$ git clone https://github.com/SidneyNiccolson/carvexco.git
```
Export React env. variable to point to flask service in the root folder of the project:
```sh
$ export REACT_APP_USERS_SERVICE_URL=http://localhost:81
```

Build the container and run the services:
```sh
$ docker-compose -f docker-compose-dev.yml up -d --build
```
Go to http://localhost:81/users/ping to check if API service is running

Go to http://localhost:81/ to see if React is running correctly.


### Testing and debugging

(optional) Run unit test:
```sh
$ docker-compose -f docker-compose-dev.yml run users python manage.py test
```
(optional run react test):
```sh
$ docker-compose -f docker-compose-dev.yml run client npm test
```
(optional) Run coverage:
```sh
$ docker-compose -f docker-compose-dev.yml run users python3 manage.py cov
```
(optional) Run flake8 linter:
```sh
$ docker-compose -f docker-compose-dev.yml run users flake8 project
```


