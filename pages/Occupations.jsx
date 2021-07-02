import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types'

// eslint-disable-next-line no-unused-vars
function Occupations({ occupations }) {
   return (<p>Occupations</p>)
}

Occupations.propTypes = {
   // eslint-disable-next-line react/forbid-prop-types
   occupations: PropTypes.array(PropTypes.any).isRequired,
}

Occupations.defaultTypes = {
   // eslint-disable-next-line react/forbid-prop-types
   occupations: [],
}

export default Occupations
