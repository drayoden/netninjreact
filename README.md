react - try again with Net Ninja: YT - December 2020
github: https://github.com/iamshaunjp/Complete-React-Tutorial
* use `create-react-app` to create the initial react app:
  * /node_modules - all packages including react, etc.
  * /public - public files (to the browser) `index.html` -> `<div id='root'></div>`
  * /src - most dev will be here including components - App.js - inside 'return' kind of like JS -> JSX
    * deleted App.text.js - not covered here
    * `index.js` - kick starts the app -> `getElementId('root')`
    * `reportWebVitals.js` - performance reporting - not needed here - deleted - dleted import in index.js also
    * `setupTest.js` - deleted
* preview in browser - `npm run start` - starts local server
* NOTE: `npm install` uses package.json to install all dependencies in node_modules folder
* Component files start with a capital letter
* `/src/App.css` - deleted + import in App.js - is inserted into second '<style>' tag. We will use index.css in this tut.
* state - a component encompasses variables not available to other components unless they are exposed with 'useState'
* props - a component can receive data even from other components via props. see BlogList.js
* useEffect - fire a function after each render. this is a good place to fetch data from a db.
* created 'data' directory to hode JSON file for JSON Server
* JSON server:
  * created `data/db.json`
  * run server -- `npx json-server --watch <jsonfile> --port <portnum>`  -- NOTE: see port in Home.js (fetch) 
* Created Home1.js - with useEffect with fetch, error checking etc. New Home.js will continue by creating a custom hook (useFetch.js) to take care of the same functionality.
* React router -- react intercepts requests for pages and delivers the content (component) for that request (url)
  * install: `npm install react-router-dom@5` -- getting a specific version -> '...@5'
  * update `src/App.js`
* deleted /node_modules (188Mb) to save space. Just do `npm install` to reinstall dependencies (package-json)
* DONE! 02/07/2021 -- Nice tut, I think I now have a good grasp of react basics.
