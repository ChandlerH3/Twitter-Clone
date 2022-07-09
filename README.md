# Twitter-Clone

## Install the backend dependencies

1. Navigate to the server folder `cd server`
2. Install the required packages `yarn install`
3. Once that's done you can start the server with `yarn start:server`


## Install React for the frontend

You'll need to create the front-end using `create-react-app`. Run the following from _within the main workshop directory_:

1. If you just installed the server dependencies, you'll need to open a new terminal to get back to the main project directory.
2. Run the following command `npx create-react-app client`. This will create a new folder called `client` in the project. ALL of the work for this project will be done in there.
3. There are some additional dependencies that you will need for the project. Navigate to the client folder: `cd client`
4. Install the following dependencies with `yarn`:

- styled-components
- react-router-dom@5.3.0
- react-icons
- moment

## Run `yarn start` to start the front-end application.

>NOTE: Newer versions of React tend to be a bit wonky with react-router-dom v5. Remove `React.StrictMode` from the `index.js` of the client to fix this!

The cat silhouette logo is provided in `assets/logo.svg`

>NOTE: REST API used for this project is Critter API, and the the server runs on port 31415