import './index.css'

const VisitedCountriesList = props => {
  const {details, onClickedRemove} = props
  const {imageUrl, id, name, isVisited} = details
  const removeCountry = () => {
    onClickedRemove(id)
  }
  if (isVisited) {
    return (
      <li className="visited-country-list">
        <img src={imageUrl} alt="thumbnail" className="country-image" />
        <div className="name-update-status-container">
          <p className="country-name">{name}</p>
          <button type="button" className="remove-btn" onClick={removeCountry}>
            Remove
          </button>
        </div>
      </li>
    )
  }
  return null
}
export default VisitedCountriesList
