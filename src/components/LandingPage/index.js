import {Component} from 'react'
import {v4} from 'uuid'

import LandingPageItems from '../LandingPageItems'
import Header from '../Header'

import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '2024-06-01',
    name: 'Item1',
    title: 'VolleyBall',
  },
  {
    id: 1,
    timeAccessed: '2024-09-11',
    name: 'Item11',
    title: 'Tennis',
  },
  {
    id: 2,
    timeAccessed: '2024-02-21',
    name: 'Item2',
    title: 'Tennis',
  },
  //   {
  //     id: 3,
  //     timeAccessed: '2024-06-04',
  //     name: 'Item3',
  //     title: 'Cricket',
  //   },
  //   {
  //     id: 4,
  //     timeAccessed: '2024-05-07',
  //     name: 'Item4',
  //     title: 'FootBall',
  //   },
  //   {
  //     id: 5,
  //     timeAccessed: '2024-01-10',
  //     name: 'Item5',
  //     title: 'Tennis',
  //   },

  //   {
  //     id: 6,
  //     timeAccessed: '2024-11-04',
  //     name: 'Item6',
  //     title: 'FootBall',
  //   },
  //   {
  //     id: 7,
  //     timeAccessed: '2024-05-07',
  //     name: 'Item7',
  //     title: 'FootBall',
  //   },

  //   {
  //     id: 8,
  //     timeAccessed: '2024-04-01',
  //     name: 'Item8',
  //     title: 'Cricket',
  //   },
  //   {
  //     id: 9,
  //     timeAccessed: '2024-05-11',
  //     name: 'Item9',
  //     title: 'Cricket',
  //   },
]

class LandingPage extends Component {
  state = {
    searchInput: '',
    browserList: initialHistoryList,
    titleInput: '',
    category: '',
    dateInput: '',
    Asc: true,
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  sorterDate = () => {
    const {browserList, Asc} = this.state
    if (Asc === true) {
      const sortedList = browserList.sort(
        (a, b) => new Date(a.timeAccessed) - new Date(b.timeAccessed),
      )
      this.setState({browserList: sortedList})
    } else {
      const sortedList = browserList
        .sort((a, b) => new Date(a.timeAccessed) - new Date(b.timeAccessed))
        .reverse()
      this.setState({browserList: sortedList})
    }
  }

  sorterCat = () => {
    const {browserList, Asc} = this.state
    if (Asc === true) {
      const strAscending = browserList.sort((a, b) =>
        a.title > b.title ? 1 : -1,
      )
      this.setState({browserList: strAscending})
    } else {
      const strAscending = browserList
        .sort((a, b) => (a.title > b.title ? 1 : -1))
        .reverse()
      this.setState({browserList: strAscending})
    }
  }

  deleteTransaction = id => {
    const {browserList} = this.state
    const updatedTransactionList = browserList.filter(
      eachTransaction => eachTransaction.id !== id,
    )

    this.setState({
      browserList: updatedTransactionList,
    })
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {titleInput, dateInput, category} = this.state
    const newBrowserList = {
      id: v4(),
      timeAccessed: dateInput,
      name: titleInput,
      title: category,
    }

    this.setState(prevState => ({
      browserList: [...prevState.browserList, newBrowserList],
      titleInput: '',
      dateInput: '',
      category: '',
    }))
  }

  onChangeDateInput = event => {
    this.setState({dateInput: event.target.value})
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeCategory = event => {
    this.setState({category: event.target.value})
  }

  toggle = () => {
    this.setState(prevState => ({Asc: !prevState.Asc}))
  }

  render() {
    const {searchInput, browserList, Asc} = this.state
    const {titleInput, dateInput, category} = this.state
    const searchResults = browserList.filter(eachDestination =>
      eachDestination.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <>
        <Header />
        <div className="app-container">
          <div className="navbar">
            <div className="search-input-container">
              <h1 className="hdz">Bindass PVT LTD</h1>
              <div className="search-container">
                <div className="search-icon-color">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                    alt="search icon"
                    className="search-icon"
                  />
                </div>
                <input
                  type="search"
                  className="search-input"
                  placeholder="Search Category"
                  value={searchInput}
                  onChange={this.onChangeSearchInput}
                />
              </div>
              <button type="button" onClick={this.toggle} className="btz">
                {Asc ? 'Ascending' : 'Descending'}
              </button>
              <button type="button" onClick={this.sorterCat} className="btz">
                Sort-By-Category
              </button>
              <button type="button" onClick={this.sorterDate} className="btz">
                Sort-By-Date
              </button>
            </div>
          </div>
          <div className="destinations-search-container">
            {searchResults.length > 0 ? (
              <ul className="destinations-list">
                {searchResults.map(eachDestination => (
                  <LandingPageItems
                    key={eachDestination.id}
                    destinationDetails={eachDestination}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            ) : (
              <p className="empty-history">There is no Items to show</p>
            )}
          </div>
          <div className="app-container">
            <div className="responsive-container">
              <div className="appointments-container">
                <div className="add-appointment-container">
                  <form className="form" onSubmit={this.onAddAppointment}>
                    <h1 className="add-appointment-heading">Add ItemZZZ</h1>
                    <label htmlFor="title" className="label">
                      TITLE
                    </label>
                    <input
                      type="text"
                      id="title"
                      value={titleInput}
                      onChange={this.onChangeTitleInput}
                      className="input"
                      placeholder="Title"
                    />
                    <label htmlFor="title" className="label">
                      CATEGORY
                    </label>
                    <input
                      type="text"
                      id="title"
                      value={category}
                      onChange={this.onChangeCategory}
                      className="input"
                      placeholder="Category"
                    />
                    <label htmlFor="date" className="label">
                      DATE
                    </label>
                    <input
                      type="date"
                      id="date"
                      value={dateInput}
                      onChange={this.onChangeDateInput}
                      className="input"
                    />
                    <button type="submit" className="add-button">
                      Add
                    </button>
                  </form>
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.07jcggsrrhdPWc2vYVoj3gHaEK&pid=Api&P=0&h=180"
                    alt="appointments"
                    className="appointments-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default LandingPage
