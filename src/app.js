import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'normalize.css/normalize.css'
import './styles/styles.scss'

// Checking out the syntax of React Router

const ExpenseDashboardPage = () => (<div>ExpenseDashboardPage</div>);
const AddExpensePage = () => (<div>AddExpensePage</div>);
const EditExpensePage = () => (<div>EditExpensePage</div>);
const HelpPage = () => (<div>HelpPage</div>);
const NotFoundPage = () => (<div>The page you were looking for was not found</div>)


const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));

/*
In this current state, the server-side rendering is how we get our initial page.
In this case, it's path="/" as / means root.
However, if you try to type /create into the URL, you get
  Cannot GET /create
Which, understandably, is confusing.
The reason behind this is because the / in /create means the root of the server, not index.html
So you've got to change that!
In webpack.config.js we add historyApiFallback, set to true, to the devServer object.
This will tell the devServer to always serve up the index.html file on all 404 errors.

Without the exact prop on the first route, the ExpenseDashboardPage component,
the component would be displayed anytime the url contains a forward-slash, because
it matches.
To remedy this issue for when we only want AddExpensePage displayed, for example,
we use exact={true} to only show ExpenseDashboardPage if the URL matches
exactly.

What I've done: Commit 3 - 12 Jul 21
1. Installed React-Router-DOM (as opposed to React-Router-Native for mobiles)
2. Imported BrowserRouter and Routes
3. Down below, at line 16, I configured the routes for the application.
  3.a BrowserRouter only needs to be initialised once. It wants one child only. This is a div. After Commit 4, it is Switch
  3.b Route is initialised as many times as I have pages to route to.
4. path and component are the URL and the component you display on the page when you visit that URL
5. At this point, /create (as an example) would display both the ExpenseDashboardPage and AddExpensePage
  5.a To fix this; I added the exact prop, which matches the ExpenseDashboard page to ONLY a forward-slash.
6. Finally, the server wasn't equipped to handle client-side routing.
  6.a It wasn't sending back the HTML file.
  6.b I fixed this by adding one configuration line in webpack.config.js
  6.c Using historyApiFallback: true, I told the dev-server to fallback to the index.html file on all 404 errors.
7. Profit!

What I've done: Commit 4 - 12 Jul 21 - 13 Jul 21
1. Replaced div with Switch - Switch renders routes exclusively.
2. Added a route for when no page exists at that URL.
3. This route doesn't contain a path, meaning it renders regardless of what route you use.
4. Switch will look through all the routes until it finds something that matches. 
5. The NotFoundPage will always match it, so it gets thrown up if nothing else matches!
*/
