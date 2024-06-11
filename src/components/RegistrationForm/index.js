import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class RegistrationForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  register = async () => {
    const {history} = await this.props
    history.replace('/login')
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    if (password.length >= 9) {
      localStorage.setItem(username, password)
      this.onSubmitSuccess('*********')
    } else {
      this.onSubmitFailure('Password Must Contain Minimum 9 Characters')
    }
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-form-container">
        <img
          src="https://www.afaqs.com/all/news/images/news_story_grfx/2016/04/47641/bindass-logo.jpg"
          className="login-website-logo-mobile-img"
          alt="website logo"
        />
        <img
          src="https://www.afaqs.com/all/news/images/news_story_grfx/2016/04/47641/bindass-logo.jpg"
          className="login-img"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.WE9FHRUgHs37zZhwPV9EowHaHa&pid=Api&P=0&h=180"
            className="login-website-logo-desktop-img"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Register
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
          <button
            type="button"
            className="register-button"
            onClick={this.register}
          >
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default RegistrationForm
