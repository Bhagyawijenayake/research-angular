# ResearchAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.




# Research Angular Application

This is a Dockerized Angular application. Follow the instructions below to build and run the Docker image.

## Prerequisites

- Docker: You need to have Docker installed on your machine. You can download Docker from the [official Docker website](https://www.docker.com/products/docker-desktop).

## Building the Docker Image

To build the Docker image, navigate to the project directory in your terminal and run the following command:

```bash
docker build -t research-angular:nginx .

docker run -p 8080:80 research-angular

docker run --name angular-app -d -p 8082:80 research-angular:nginx
