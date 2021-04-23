import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import * as R from 'ramda';
import StartingEquipment from '../StartingEquipment';

export default function Occupation({ occupation }) {
  const savingThrows: string = R.join(', ', R.map((obj) => obj.name, occupation.saving_throws));

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
  );
}
