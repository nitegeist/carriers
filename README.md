# Carrier Search Scenario

This scenario was done as a test for [Avantmark Technologies](https://avantmark.com/) as part of the hiring process.

## Technologies

- [React.js](https://reactjs.org/) for frontend functionality and state management.
- [Axios](https://www.npmjs.com/package/axios) for API calls.
- [Bootstrap](https://getbootstrap.com/) for user interface styling and components.

## Getting Started

### Install [Node.js](https://nodejs.org/en/)

This application uses packages from the Node Package Manager (npm) and Node.js and will not work without them.

### Open a terminal

Open either `cmd` or `powershell` on Windows. If not using windows then open the terminal of choice on your Operating System.

### Enter the project directory using the terminal

This can be done using the `cd` command. Example: `cd carriers/`.

### Run `npm install`

Installs all the packages & dependencies this application needs in order to work.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## The Problem

Company ABC is a logistics company. This company matches carriers/trucks with customers who have
cargo to deliver. You are tasked with creating a web application that will find all the carriers within a
geographical area given a city, state and a radius.

**Note**: Your application should allow the user to input a location and radius and return a list of carriers
that meet the criteria.

## The Solution

In order to solve this problem, I read through the scenario multiple times. Firstly, I identified the **user inputs** for the
application which are `city`, `state`, and `radius` respectively. I was given one API Endpoint, however I quickly noticed
that the sample **`POST`** request in the scenario had a list of addresses which are `city` and `state` that it passed to
the given API Endpoint.

**`"Addresses": ["Clear Lake MN", "Brooklyn Park MN", "New Hope, MN"]`**

This would then return a list of Carriers for the given addresses. I considered where this list of addresses was coming from,
and also how to use the `radius` input as it was not part of this **`POST`** request. While doing this, I built the application using the aforementioned technologies and laid out the API calls as I had them in my head. I first made a pseudo **`GET`** request which would go to
an endpoint `/QueryAddresses` and return the inputted addresses after the call failed, then pass the inputs to the given API Endpoint
and retrieve the list of carriers.

After a few days of research, I determined that I had to find another identifier for `city` and `state` if I intended to use the `radius` input. At first I thought of latitude and longitude values, but upon doing more research, I came across Postal Codes or Zip Codes and recalled that these are used as identifiers for cities **within** states. After confirming this through more research, I came across the [ZipCodeApi](https://www.zipcodeapi.com/) where after reading the documentation, I determined that this was the tool of choice to solve the problem of the missing API calls.

After getting an **API Key**, I made a **`GET`** request to their [Location to Zip Codes](https://www.zipcodeapi.com/API#locToZips) endpoint using the `city` and `state` user inputs and retrieved an `array` of zip codes which I stored in the `zipcode` variable. I then grabbed the first element of the array and passed it in another **`GET`** request along with the `radius` user input to their [Zip Codes By Radius](https://www.zipcodeapi.com/API#radius) endpoint, which returned an `array` of zip Codes, cities and states within the specified radius (in miles) which I stored in the `adminAreas` variable.

I grabbed the cities and states from the returned `array` and stored them in a variable called `addresses` and sent them as addresses in a **`POST`** request to the API Endpoint given in the scenario with the appropriate headers for authorization which returned an `array` of carriers in those locations. After getting the `array`, I displayed the search results in table format.
