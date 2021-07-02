import { Card, Table } from 'react-bootstrap'
import * as R from 'ramda'

export default function StartingEquipment({ equipment }: { equipment: [] }): JSX.Element {
   const startingEquipment = R.map((equip) => (
      <tr>
         <td>
            {equip.quantity}
            {' '}
                &nbsp;
            <a href={equip.equipment.url}>
               {equip.equipment.name}
            </a>
         </td>
      </tr>
   ), equipment)

   return (
      <Card.Text>
         <Table>
            <thead>
               <tr>
                  <th>
                     <tr>starting equipment</tr>
                  </th>
               </tr>
            </thead>
            <tbody>
               {startingEquipment}
            </tbody>
         </Table>
      </Card.Text>
   )
}
