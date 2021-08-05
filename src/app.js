import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

store.dispatch(addExpense({description: "Water Bill", createdAt: 225, amount: 5000}));
store.dispatch(addExpense({description: "Rent", createdAt: 1000, amount: 109500}));
store.dispatch(addExpense({description: "Gas Bill", amount: 7500}));






const jsx = (
  <div>
   <Provider store={store}>
     <AppRouter />
   </Provider>
  </div>
)

ReactDOM.render(jsx, document.getElementById('app'));

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
  6a. It wasn't sending back the HTML file.
  6b. I fixed this by adding one configuration line in webpack.config.js
  6c. Using historyApiFallback: true, I told the dev-server to fallback to the index.html file on all 404 errors.
7. Profit!

What I've done: Commit 4 - 12 Jul 21 - 13 Jul 21
1. Replaced div with Switch - Switch renders routes exclusively.
2. Added a route for when no page exists at that URL.
3. This route doesn't contain a path, meaning it renders regardless of what route you use.
4. Switch will look through all the routes until it finds something that matches. 
5. The NotFoundPage will always match it, so it gets thrown up if nothing else matches!
6. Profit!

What I've done: Commit 5: 13 Jul 21
1. I want to set up client-side routing, as right now I'm still having to refresh from the server. 
2. To do this, I need links. Thankfully, I won't be using anchor tags. React-Router has <Link> to handle that for me!
3. When using <Link>, the whole page doesn't refresh, so client-side routing is now active!
4. Added a div so BrowserRouter has only one child
  4a. Put the Switch component within this div
  4b. The reason for doing all of this is so that I can place a Header component that shows up on every page. 
  4c. The Header appears on every page, as it sits outside of the routing code, so I added links to all pages there. 
5. NavLink is more for navigation
  5a. Whichever link is active, it will be highlighted under the header. 
  5b. Much like routes, we have to use the "exact" prop on NavLink because Dashboard matches every URL
  5c. NavLink replaces Link entirely when used for navigation, but the link in the 404 page doesn't need to be NavLink
6. Profit!

What I've done: Commit 6 13 Jul 21
1. Moved each component into its own file and exported to AppRouterJS.

*/
