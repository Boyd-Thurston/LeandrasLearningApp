# Leandra's Learning App
*A childs learning app.*



## Purpose of the project

This project fills two purposes. The primary purpose is to provide a learning app for my autistic child without pressure of age suggestions or where your learning should solely focus on encouraging the growth of skills at the child's pace. The secondary purpose is to showcase my skills at creating a web app of this type. As this is the secondary goal anything beyond what is necessary to achieve the primary purpose of this app will be left out focusing on a tidy clean and very functional delivery of the core purpose.

## User Stories

I envision this app having two distinct types of users: the parents setting up their children on the app and viewing reports on their progress and the children making use of the app.

The MVP user stories are as follows:
- [x] As a user I want to be able to login to the app
- [x] As a parent user I want to be able to register for the app
- [x] As a parent user I want to be able to register a child for the app
- [ ] As a parent user I want to be able to see my child's progress on the app
- [ ] As a child user I want to be able to play educational games on the app
- [ ] As a child user I want to be able to see my accumulated success on the app

The stretch goal user stories are as follows:
- [ ] As a child user I want to be able to register and linked to a registered parent
- [ ] As a parent user I want to be emailed a report on my child's progress
- [ ] As a parent user I want the displayed reports to be downloadable in a printerbale/attachable format

## Educational Game concept

The idea behind this game is to run like an adventure game with mini-games scattered throughout. For example to fight a monster the child user will need to answer a maths question, following is a table of the actions vs the type of activity the child user will need to complete:

|      Action      |                     Activity                    |
|------------------|-------------------------------------------------|
| Physical action  | Answer a maths question                         |
| Magical action   | Read a text and answer a comprehension question |
| Temporary Boost  | Answer a basic true or false fact question      |
| Unlock a Chest   | Complete a memory game                          |
| Disarm a Trap    | Complete a logic game                           |
| Purchase an Item | Complete mock currency based game               |
| ???              | Complete a coordination based mouse game        |

Children will collect mock currency from completing activities and its use will resemble decimal currency transactions with notes and coins to promote financial literacy. No real money will change hands in this app. Items purchased will be for decorating the child users avatar/pet/house etc. 


## Database tables

This section defines the db tables used in this add and the data types for each column

                *Users*                

|  Column   | Data Type |  Constraints  |
|-----------|-----------|---------------|
| id        | Integer   | PK increments |
| username  | String    | unique        |
| hash      | String    |               |
| email     | String    |               |
| is_child  | boolean   | default False |
| parent_id | Integer   |               |


                   *Statistics*                    

|  Column               | Data Type |  Constraints  |
|-----------------------|-----------|---------------|
| id                    | Integer   | PK increments |
| user_id               | Integer   | FK            |
| maths_skill_level     | Integer   |               |
| maths_addition        | Integer   |               |
| maths_subtraction     | Integer   |               |
| maths_multiplication  | Integer   |               |
| maths_division        | Integer   |               |
| reading_skill_level   | Integer   |               |
| reading_text          | Integer   |               |
| reading_comprehension | Integer   |               |
| Facts                 | Integer   |               |
| Logic                 | Integer   |               |
| Memory                | Integer   |               |

## Setup/Installation

If you have downloaded this repo for your own use please follow the following steps:
- Navigate to the local directory for this repo
- in the command line use:
  - npm i
  - npx knex migrate:latest
  - touch .env
- fill out .env as described in the next section
- to start the app in the command line use:  npm run dev
- in a browser navigate to localhost:3000
- enjoy

Alternatively if you just want to use this app it is deployed on heroku, check it out here <insert link here>

## .env

This project uses a .env not saved to the repo, please ensure you set up your own .env file in the root directory of this app to make use of this, it should contain a JWT_SECRET=????insert your secret here????.

## Tech used:

Frontend frameworks:
- React
- Redux
- Thunk
- Webpack

DB and framework:
- Knex
- SQLite3

Server:
- Express

Authoirsation:
- Sodium
- Jsonwebtoken
- Express-jwt

Transpiler:
- babel

cross system dev compatability:
- npm-run-all

Test Suite:
- Jest
- Enzyme
