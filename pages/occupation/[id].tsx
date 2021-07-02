import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'
import * as R from 'ramda'
import PropTypes from 'prop-types'
// eslint-disable-next-line import/extensions
import StartingEquipment from '../StartingEquipment'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Occupation({ occupation }) {
   const savingThrows: string = R.join(', ', R.map((obj) => obj.name, occupation.saving_throws))

   return (
      <Card>
         <Card.Title>{occupation.name}</Card.Title>
         <Card.Text>
            hit die:
            {occupation.hit_die}
         </Card.Text>
         <Card.Text>
            saving throws:
            {savingThrows}
         </Card.Text>
         <StartingEquipment equipment={occupation.starting_equipment} />
      </Card>
   )
}

Occupation.propTypes = {
   occupation: PropTypes.shape({
      hit_die: PropTypes.string,
      name: PropTypes.string,
      starting_equipment: PropTypes.string,
      saving_throws: PropTypes.number,
   }).isRequired,
}

export default Occupation
