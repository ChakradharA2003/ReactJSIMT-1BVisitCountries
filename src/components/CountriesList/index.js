import './index.css'

const CountriesList = props => {
  const {details, onClickedVisit} = props
  const {id, name, isVisited} = details
  const onClickedVisitCountry = () => {
    onClickedVisit(id)
  }
  const renderStatus = isVisited ? (
    <p className="visit-status">Visited</p>
  ) : (
    <button type="button" className="visit-btn" onClick={onClickedVisitCountry}>
      Visit
    </button>
  )
  return (
    <li className="country-list">
      <p className="country-name">{name}</p>
      {renderStatus}
    </li>
  )
}
export default CountriesList
