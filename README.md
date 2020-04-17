# jambu
Jambu is a boilerplate project using React, Relay and Javascript on the front end and MongoDB, GraphQL and Express on the back end, with some initial styling in Semantic-UI. 

To run:
1. Clone down to your Local Machine
2. Navigate to the new repo and run `npm install` in both CLIENT and SERVER
2. in SERVER, create `.env` and update it with your MongoDB account details as per `.env.example`
3. in the terminal, navigate to CLIENT and run `npm run relay` to generate your GraphQL schemas with Relay
4. then run `npm start` to spin up your server and run webpack. You should be able to see your boilerplate in localhost:4000
5. In the browser, you can navigate to localhost:4000/graphql to test and run your queries and mutations

- if you alter your queries at all, you will need to run `npm run relay` in CLIENT

