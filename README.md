# Full Stack Developer Assignment
Part of the interview process with Vangst requires you to complete this take home assignment.
There are two parts to this assignment, a full stack application, and an API/Data model design document. This repository is a starter for the full stack application.

## Using this project

### Frontend - React
The frontend React code can be found in the `/client` folder. The frontend was created using create-react-app and can be started by running the following command in the root folder of th project.
``` bash 
yarn run:client 
```
This will start the frontend on localhost at port 3000.

### Backend 
There are three options for the backend code:
- Java
- Kotlin
- NodeJs/Express

You may add your own backend if you would like to use a different language.

You can start the backend by running one of the following commands
``` bash
yarn run:server:java
yarn run:server:kotlin
yarn run:server:node
```
These will start the server in the respective language on port 8080.

# Full Stack App
Create an application to help a user with their problem. The frontend needs to be in React but the backend can be in any language you would like. You should include at least one unit test for both backend and frontend. If you would like to style your application you may use any front end styling framework such as Material-ui or Bootstrap.

__Problem Statement:__ I like to eat ice cream, but I can never remember what flavors I have had or what I thought of them.

__Requirements:__
- I need to be able to add new flavors to my list and give them a rating
- I need to be able to view all the flavors I have added
- I need to be able to change a rating on a flavor
- Add one more feature you think the user might like

__Deliverables:__
- Completed, runnable code
- A readme file containing the following:
- An explanation as to why you picked the backend language that you did
- Instruction on how to run the app
- An explanation of the added feature and why you picked it
