/*
Higher Order Component - HOC

A component that renders another component. 
Advantages: 
1. Reuse code
2. Render hijacking
3. Prop manipulation
4. Abstract state

*/

import React from 'react';
import ReactDOM from 'react-dom'
import { div } from 'react-dom-factories';

const Info = (props) => (
    <div>
    <h1>Info</h1>
    <p>The info is {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private, privileged information. Please do not share</p>}
            <WrappedComponent { ...props }/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (<WrappedComponent {...props} />) : ( <p>Please log in to view the information</p> )}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details"/>, document.getElementById('app') )
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details"/>, document.getElementById('app') )