import './index.css'

const LandingPageItems = props => {
  const {destinationDetails, deleteTransaction} = props
  const {name, timeAccessed, title, id} = destinationDetails
  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="destination-item">
      <div className="browser-start">
        <p className="browser-time">{timeAccessed}</p>
        <div className="browser-middle">
          <p className="browser-title">{title}</p>
          <p className="name">{name}</p>
        </div>
      </div>
      <div className="browser-end">
        <button
          className="delete-button"
          type="button"
          onClick={onDeleteTransaction}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="browser-delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default LandingPageItems
