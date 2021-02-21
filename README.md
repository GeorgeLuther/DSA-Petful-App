# Petful Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Summary

Live Link: https://petful-client-template.georgeluther.vercel.app/

The intent of this app is to connect pets with people. Petful is a first come first serve pet adoption agency. Those who join the waiting list put into a queue. They can then see the available cats and dogs. When it is their turn they are given the choice between the cat and dog that have been in the kennel the longest. 

## Using the app

### Landing Page:
As a pet lover, I can visit the landing page so that I can get more information about the adoption process.

When I go to the landing page:

-[x] I see a description of the adoption process.
-[x] I see a meaningful picture related to the description.
-[x] I see a button for starting the adoption process.

### Adoption Page:

As a user interested in adopting pets, I want to get more information 
on each pet so that I can make an informed decision about who to adopt.

When I visit the adoption page, each available pet display shows:

-[x] An image of the pet;
-[x] A physical description of the pet;
-[x] The pet's name, gender, age, and breed.
-[x] A story of the pet's journey to the shelter

As a user interested in adopting pets, 
I want to see the pets that I can adopt.
- [x] When I visit the adoption page, I can only see the 
pet that is next in line to be adopted.

As a user interested in adopting pets, I want to get in line to adopt.
When I visit the adoption page, there is a waiting list:

-[x] I can see a list of other people currently in line.
-[x] I can submit my name and be added to the end of the line.
-[x] When I am not at the beginning of the line, I cannot see an option to adopt a pet.
-[x] For demo purposes: Once I join the line, I can see other pets being adopted until I am at the front of the line.
    -[x] Every five seconds, the user at the front of the line should be removed from the line and one of the pets up for adoption should disappear.
    -[x] When I am at the front of the line, a new user should be added to the line behind me every five seconds until there are a total of five users in line.

As a user interested in adopting pets, I want to adopt a pet.
When I am at the front of the line:

- [x] I can see an option to adopt a pet.
- [x] When I choose to adopt a pet: 
    -[x] I see a confirmation that I have adopted the pet.
    -[x] I see my name removed from the line.
    -[x] I see the pet I adopted is removed from view and replaced with another pet.

    
## Tech Stack

This project uses JavaScript, React, HTML, and CSS on the front end and Node with express on the backend. There is currently no database, but instead an JS implementation of a queue. The front end is hosted with Vercel and the backend is hosted with Heroku.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
