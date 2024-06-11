import {Component} from 'react'

import {v4} from 'uuid'

import {format} from 'date-fns'

import './index.css'

class Form extends Component {
  state = {
    titleInput: '',
    category: '',
    dateInput: '',
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
  onAddAppointment = event => {
    event.preventDefault()
    const {titleInput, dateInput} = this.state
    // const formattedDate = dateInput
    //   ? format(new Date(dateInput), 'dd MMMM yyyy, EEEE')
    //   : ''
    const newAppointment = {
      id: v4(),
      title: titleInput,
      date: formattedDate,
      isStarred: false,
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      titleInput: '',
      dateInput: '',
    }))
  }

  render() {
    const {titleInput, dateInput, category} = this.state

    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="appointments-container">
            <div className="add-appointment-container">
              <form className="form" onSubmit={this.onAddAppointment}>
                <h1 className="add-appointment-heading">Add Item</h1>
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
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="appointments-img"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Form
