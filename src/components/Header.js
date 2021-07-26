import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <div>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <br />
    <NavLink to="/create" activeClassName="is-active">Create an Expense</NavLink>
    <br />
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    <br />
    <br />
  </div>
)

// Stripped the edit page, as we don't need an empty edit page. The user will populate the edit with an expense

export default Header;