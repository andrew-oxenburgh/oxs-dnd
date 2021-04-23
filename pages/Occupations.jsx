import { ListGroup } from 'react-bootstrap';
import * as R from 'ramda';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Occupations({ occupations }) {
  const items = R.map((obj) => (
    <ListGroup.Item action href={obj.name}>
      {obj.name}
    </ListGroup.Item>
  ), occupations.results);

  return (
    <ListGroup defaultActiveKey="#link1">
      {items}
    </ListGroup>
  );
}
