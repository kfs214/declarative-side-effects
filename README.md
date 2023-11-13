# declarative-side-effects

This project is a proof of concept to demonstrate how to build a custom hook for handling side effects declaratively, instead of using libraries like SWR.\
It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to Run the Project

To run the project locally, you need to have `Node.js` and `npm` installed on your machine. Then, follow these steps:

1. Clone this repository or download the zip file.
2. Navigate to the project directory and run `npm install` to install the dependencies.
3. Run `npm start` to start the development server.
4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

The app will reload automatically if you make any changes to the code. You will also see any lint errors in the console.

## How to Mock the API Response

The app uses [Mock Service Worker] to intercept and mock the API requests. You can find the mock handlers in [src/mocks/handlers.ts](./src/mocks/handlers.ts).

- To mock a successful response, comment out `ctx.status(400),` in the handler function.
- To mock an error response, uncomment `ctx.status(400),` in the handler function.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
