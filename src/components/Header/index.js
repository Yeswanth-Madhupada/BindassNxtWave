import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://media.licdn.com/dms/image/D4D0BAQHhkPy2EJOqTA/company-logo_200_200/0/1711614121467/bindassdeal_private_limited_logo?e=1726099200&v=beta&t=TaPF5i0QYVHi3UVRubt-VGO5IXP67u7uHxebUADVTSY"
              alt="website logo"
            />
          </Link>

          <button type="button" className="nav-mobile-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-bar-image"
              onClick={onClickLogout}
            />
          </button>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://media.licdn.com/dms/image/D4D0BAQHhkPy2EJOqTA/company-logo_200_200/0/1711614121467/bindassdeal_private_limited_logo?e=1726099200&v=beta&t=TaPF5i0QYVHi3UVRubt-VGO5IXP67u7uHxebUADVTSY"
              alt="website logo"
            />
          </Link>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
