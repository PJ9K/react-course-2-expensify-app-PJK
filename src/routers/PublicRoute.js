import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

export const PublicRoute = ({ 
  isAuthenticated, 
  component: Component,
  ...rest                     // take the rest of the properties
}) => (
  <Route {...rest} component={(props) => (
    isAuthenticated ? (
      <Redirect to="/Dashboard" />
    ) : (
      <Component {...props} />
    )
  )} />
)

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PublicRoute)