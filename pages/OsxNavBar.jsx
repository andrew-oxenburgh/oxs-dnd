import {
   Button, Form, FormControl, Nav, Navbar, NavDropdown,
} from 'react-bootstrap'
import * as R from 'ramda'
import root from '../test/data/api/root'

export default function OsxNavBar() {
   const keys = R.keys(root)

   const items = R.reduce((acc, key) => {
      let pageName = key
      if (pageName === 'classes') {
         pageName = 'Occupations'
      }
      acc.push(
         <NavDropdown.Item href={pageName} key={key}>{key}</NavDropdown.Item>,
      )
      return acc
   }, [], keys)

   return (
      <Navbar bg="light" expand="lg">
         <Navbar.Brand href="#home">Andrew Oxenburgh&apos;s DnD tool</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
               <Nav.Link href="#home">Home</Nav.Link>
               <Nav.Link href="#link">Link</Nav.Link>
               <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  {items}
               </NavDropdown>
            </Nav>
            <Form inline>
               <FormControl type="text" placeholder="Search" className="mr-sm-2" />
               <Button variant="outline-success">Search</Button>
            </Form>
         </Navbar.Collapse>
      </Navbar>
   )
}
