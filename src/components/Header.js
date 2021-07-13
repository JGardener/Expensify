import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => (
  <div>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <br />
    <NavLink to="/create" activeClassName="is-active">Create an Expense</NavLink>
    <br />
    <NavLink to="/edit" activeClassName="is-active">Edit an Expense</NavLink>
    <br />
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    <br />
    <br />
  </div>
)

export default Header;