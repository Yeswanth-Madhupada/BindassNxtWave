import {Component} from 'react'

import LandingPageItems from '../LandingPageItems'

import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '2024-06-01',
    name: 'Item1',
    title: '1 Category',
  },
  {
    id: 1,
    timeAccessed: '2024-09-11',
    name: 'Item11',
    title: '7 Category',
  },
  {
    id: 2,
    timeAccessed: '2024-02-21',
    name: 'Item2',
    title: '7 Category',
  },
  {
    id: 3,
    timeAccessed: '2024-06-04',
    name: 'Item3',
    title: '3 Category',
  },
  {
    id: 4,
    timeAccessed: '2024-05-07',
    name: 'Item4',
    title: '7 Category',
  },
  {
    id: 5,
    timeAccessed: '2024-01-10',
    name: 'Item5',
    title: '3 Category',
  },

  {
    id: 6,
    timeAccessed: '2024-11-04',
    name: 'Item6',
    title: '5 Category',
  },
  {
    id: 7,
    timeAccessed: '2024-05-07',
    name: 'Item7',
    title: '2 Category',
  },

  {
    id: 8,
    timeAccessed: '2024-04-01',
    name: 'Item8',
    title: '2 Category',
  },
  {
    id: 9,
    timeAccessed: '2024-05-11',
    name: 'Item9',
    title: '1 Category',
  },
]

class LandingPage extends Component {
  state = {
    searchInput: '',
    browserList: initialHistoryList,
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  sorterDate = () => {
    const {browserList} = this.state
    const sortedList = browserList
      .sort((a, b) => new Date(a.timeAccessed) - new Date(b.timeAccessed))
      .reverse()
    this.setState({browserList: sortedList})
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

  render() {
    const {searchInput, browserList} = this.state
    const searchResults = browserList.filter(eachDestination =>
      eachDestination.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="navbar">
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="app-logo"
            />
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
                placeholder="Search history"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            </div>
            <button type="button">ADD</button>
            <button type="button" onClick={this.sorterDate}>
              SORT
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
            <p className="empty-history">There is no history to show</p>
          )}
        </div>
      </div>
    )
  }
}

export default LandingPage
