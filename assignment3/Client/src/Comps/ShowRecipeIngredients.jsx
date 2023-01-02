import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import IngrediensList from '../Comps/IngrediensList';


function ShowRecipeIngredients(props) {
    const [ingredientsDetails, setIngredientsDetails] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    let apiUrl = "";
    const handleShow = () => {
        setShow(true)
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
            apiUrl = 'https://localhost:7283/api/Recipes/' + props.recipeId;

        }
        else {
            apiUrl = 'https://proj.ruppin.ac.il/cgroup49/test2/tar1/api/Recipes/' + props.recipeId;

        }
        fetch(apiUrl, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8',
            })
        })
            .then(res => {
                return res.json()
            })
            .then(
                (result) => {
                    setIngredientsDetails(result);
                },
                (error) => {
                    console.log("err get=", error);
                });

    };


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Show Details
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.recipeName}</Modal.Title>
                </Modal.Header>
                <Modal.Body><IngrediensList List={ingredientsDetails} type={props.type} /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ShowRecipeIngredients;