import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


export default function NavMenu() {
  return (
    <div>
      <Navbar bg="light" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              src="https://www.powerreviews.com/wp-content/uploads/2021/03/GROCERY-SURVEY.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link style={{marginRight:"10px"}} to="/">My Kitchen | </Link>
            <Link style={{marginRight:"10px"}} to="/addIngredient">Add Ingredient | </Link>
            <Link style={{marginRight:"10px"}} to="/addRecipe">Add Recipe</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

