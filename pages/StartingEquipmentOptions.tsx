// @ts-check
import { Card, Table } from 'react-bootstrap'
import * as R from 'ramda'

export default function StartingEquipmentOptions({ options }: { options: [] }): JSX.Element {
   const startingEquipmentOptions = R.map((option) => {
      const choices = R.map((obj) => {
         let name = ''
         let url = ''
         let quantity = -1
         if (R.has('equipment')(obj)) {
            name = obj.equipment.name
            url = obj.equipment.url
            quantity = obj.quantity
         }
         if (R.has('equipment_option')(obj)) {
            name = obj.equipment_option.from.equipment_category.name
            url = obj.equipment_option.from.equipment_category.url
         }
         return (
            <>
               <a href={url}>
                  {quantity > 0 ? quantity : ''}
                  {' '}
                  {name}
               </a>
               {' '}
              OR
               {' '}
            </>
         )
      }, option.from)
      return (
         <tr>
            <td>
               {choices}
            </td>
         </tr>
      )
   }, options)

   return (
      <Card.Text>
         <Table>
            <thead>
               <tr>
                  <th>
                     <td>starting equipment options</td>
                  </th>
               </tr>
            </thead>
            <tbody>
               {startingEquipmentOptions}
            </tbody>
         </Table>
      </Card.Text>
   )
}
