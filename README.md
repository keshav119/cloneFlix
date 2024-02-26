# Project Title

This project is a Netflix clone that replicates the core functionality and design of the popular streaming platform. It aims to provide a familiar user experience with features like a dynamic movie library, user authentication, and responsive UI. 

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech-Stack](#tech-stack)
- [Setup](#setup)
- [Deploy](#deploy)
- [Final-Notes](#final-notes)

## Overview

The deployed back-end server is slow so feel free to deploy it on a local environment to test its full potential. This webapp is hosted on https://clone-flix-beta.vercel.app. The api is hosted at https://clone-flix-backend.vercel.app/ to test out your front end functionality. 

## Features

The key features include:

- User Authentication
- Admin & Regular user setup
- Random Object selection
- Database Interactions
- Video Streaming/Preview
- Good looking and functional UI

## Tech-Stack

The tech-stack used:

- Frontend:
  - React js

- Backend:
  - Node js with express API

- Deployment:
  - Repository for CI/CD - Github
  - Hosting Platform - Vercel.com

- Database:
  - MongoDB(with mongoose)

## Setup

This is a guide on how to setup the project locally. 

```bash
# Clone the repository
git clone https://github.com/keshav119/cloneFlix.git

# Change into the project directory (Backend first)
cd api

# Install dependencies
npm install

# Configure environment variables (MONGO_URI && SECRET_KEY)
cp .env.example .env
# Update the .env file with your configuration

# Start the development server
npm start

# Change into the project directory (Frontend now)
cd client

# Install dependencies
npm install

#change the axios api end points to "https://localhost:3000/" wherever required

# Start the development server
npm start
```

## Deploy

This is a guide on how to deploy this project on a serverless architecture like vercel (both frontend and API)

- Backend:
  - Setup a new project on vercel and import your CI/CD github repo
  - Add vercel.json(or refer to the desired serverless service documentation - Very Important for Node js serverless deployment)
  - Setup env variables
  - Leave the build and install commands to default or override with (npm install and npm start)
  - Run the build
  - check with a simple login http request using postman or thunder for server functionality
  
- Frontend:
  - Change the axios api end points to the hosted backend server first
  - Setup a new project on vercel and import your CI/CD github repo
  - select create-react-app as the choice of framework(React-JS)
  - Leave the build and install commands to default or override with (npm build, npm install, npm start)
  - run the build
  - check for functionality

## Final-Notes

The Admin side of the project is still not functional as it requires some changes and optimisations. In the meantime it is irrelevant to the client side so you can implement you DB and check for functionality
