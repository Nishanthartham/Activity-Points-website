import React, { Component, useState } from 'react'

function Login() {
  return (
    <div>

    <form>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>UserName</label>
          <input 
            type="number"
            className="form-control"
            placeholder="Enter your roll number"
            />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
              />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
</div>
  )
}

export default Login

// export default class Login extends Component {
//   render() {
//     return (
      
//     )
//   }
// }
