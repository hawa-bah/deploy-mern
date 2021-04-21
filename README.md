# Deploy-mern
This repository is part of a tutorial to deploy a MERN application using Heroku. You can read more about it in the [blog post](https://dev.to/hawacodes/deploying-a-mern-app-with-heroku-3km7).
It contains a basic full-stack application which allows users to submit a quote with a form. All the quotes will be displayed in the web application. 

<img src="https://user-images.githubusercontent.com/56238080/113559449-49a6de00-95f9-11eb-89db-bcc347681699.png" width="70%" >


### Table of contents
- [Project structure](#Project-structure)
- [API endpoints](#API-endpoints)
- [Getting started](#Getting-started)

## Project structure
- client/src:
  - components : React components for the user interface
  - pages
- index.js : point of entry, also known as server. 
- routes : includes the API end points definition
- models : Mongoose database Schemas

## API endpoints
- `POST /quotes/post ` - create a new document containing a quote and the corresponding author.
- `GET /quotes/get ` - get all the quotes from the database.

## Getting started
Run the following commands:
```bash
$ git clone https://github.com/hawa-bah/deploy-mern
$ npm install 
$ cd client 
$ npm install
```
