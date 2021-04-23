import {ListGroup} from "react-bootstrap";
import * as R from 'ramda'
import classes from '../test/data/api/classes' // index, name, url
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Occupations() {
    let items = R.map((obj) => {
        return (
            <ListGroup.Item action href={obj.name}>
                {obj.name}
            </ListGroup.Item>
        )
    }, classes.results)

    return (
        <ListGroup defaultActiveKey="#link1">
            {items}
        </ListGroup>
    )
}
