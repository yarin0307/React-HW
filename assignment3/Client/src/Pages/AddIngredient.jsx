import React, { useState } from 'react'


export default function AddIngredient() {

  const [txtName, setTxtName] = useState('');
  const [txtImage, setTxtImage] = useState('');
  const [txtCalories, setTxtCalories] = useState('');
  let apiUrl = '';
  const btnAddIngredient = () => {
    const ingredient = {
      Id: 0,
      Name: txtName,
      Image: txtImage,
      Calories: txtCalories
    };
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
       apiUrl = 'https://localhost:7283/api/ingredients';

    }
    else{
      apiUrl = 'https://proj.ruppin.ac.il/cgroup49/test2/tar1/api/ingredients';

    }

    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(response => {
        console.log('res=', response);
        return response.json()
      })
      .then(
        (result) => {
          console.log("fetch POST= ", result);
          alert("ingredient added successfully");
          window.location.reload();
        },
        (error) => {
          console.log("err post=", error);
        });
  }

  const btnClearForm = () => {
    setTxtName("");
    setTxtImage("");
    setTxtCalories("");
  }

  return (
    <div className="container-fluid">
      <div className='row'>
        <h1>Add New Ingredient</h1><br /><br /><br /><br />
      </div>
      <table>
        <tr className='row'>
          <td className='col-6'>Name:</td>
          <td className='col-6'><input type="text" placeholder="enter ingredient name" value={txtName} onChange={(e) => setTxtName(e.target.value)} /></td>
        </tr>
        <tr className='row'>
          <td className='col-6'>Image:</td>
          <td className='col-6'><input type="text" placeholder="Enter image url" value={txtImage} onChange={(e) => setTxtImage(e.target.value)} /></td>
        </tr>
        <tr className='row'>
          <td className='col-6'>Calories:</td>
          <td className='col-6'><input type="text" placeholder="Enter ingredient calories" value={txtCalories} onChange={(e) => setTxtCalories(e.target.value)} /></td>
        </tr>
        <tr className='row'>
          <td className='col-6'><button className='btn btn-primary' onClick={btnAddIngredient}>Add Ingredient</button></td>
          <td className='col-6'><button className='btn btn-danger' onClick={btnClearForm}>Clear Form</button></td>
        </tr>
      </table>
    </div>
  )
}
