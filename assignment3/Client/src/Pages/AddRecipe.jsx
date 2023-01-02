import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import IngrediensList from '../Comps/IngrediensList';
import { KitchenContext } from '../Comps/KitchenApp';



export default function AddRecipe() {
  const [txtName, setTxtName] = useState('');
  const [txtCookingMethod, setTxtCookingMethod] = useState('');
  const [txtCookingTime, setTxtCookingTime] = useState('');
  const [txtImage, setTxtImage] = useState('');
  const { ingredientsArray, setIngredientsArray, ingForDishArray, setIngForDishArray } = useContext(KitchenContext)
  const navigate = useNavigate();
  let apiUrl = "";
  let api = "";

  async function btnAddRecipe() {
    const recipe = {
      Id: 0,
      Name: txtName,
      Image: txtImage,
      CookingMethod: txtCookingMethod,
      Time: txtCookingTime
    };
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      apiUrl = 'https://localhost:7283/api/Recipes';

    }
    else {
      apiUrl = 'https://proj.ruppin.ac.il/cgroup49/test2/tar1/api/Recipes';

    }
    await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(recipe),
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
          if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
            api = 'https://localhost:7283/recipeid/' + result;

          }
          else {
            api = 'https://proj.ruppin.ac.il/cgroup49/test2/tar1/recipeid/' + result;

          }
          ingForDishArray.map((ing) => {
            if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
              api = 'https://localhost:7283/recipeid/' + result + '/ingredientid/' + ing;

            }
            else {
              api = 'https://proj.ruppin.ac.il/cgroup49/test2/tar1/recipeid/' + result + '/ingredientid/' + ing;

            }
            console.log(ingForDishArray);
            return fetch(api, {
              method: 'POST',
              body: '',
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
                },
                (error) => {
                  console.log("err post=", error);

                },
              )
          })
          setIngForDishArray([]);
          alert("recipe added successfully");
          window.location.reload();

        },
        (error) => {
          console.log("err post=", error);
        });



  }
  const btnClearForm = () => {
    setTxtName("");
    setTxtImage("");
    setTxtCookingMethod("");
    setTxtCookingTime("");

  }



  return (
    <div className="container-fluid">
      <div className='row'>
        <h1>Add New Recipe</h1><br /><br /><br /><br />
      </div>
      <table>
        <tr className='row'>
          <td className='col-6'>Name:</td>
          <td className='col-6'><input type="text" placeholder="enter recipe name" value={txtName} onChange={(e) => setTxtName(e.target.value)} /></td>
        </tr>
        <tr className='row'>
          <td className='col-6'>Cooking Method:</td>
          <td className='col-6'><input type="text" placeholder="Enter cooking method" value={txtCookingMethod} onChange={(e) => setTxtCookingMethod(e.target.value)} /></td>
        </tr>
        <tr className='row'>
          <td className='col-6'>Cooking Time:</td>
          <td className='col-6'><input type="text" placeholder="Enter cooking time" value={txtCookingTime} onChange={(e) => setTxtCookingTime(e.target.value)} /></td>
        </tr>
        <tr className='row'>
          <td className='col-6'>Image:</td>
          <td className='col-6'><input type="text" placeholder="Enter image url" value={txtImage} onChange={(e) => setTxtImage(e.target.value)} /></td>
        </tr>
        <tr className='row'>
          <td className='col-6'><button className='btn btn-primary' onClick={btnAddRecipe}>Add Recipe</button></td>
          <td className='col-6'><button className='btn btn-danger' onClick={btnClearForm}>Clear Form</button></td>
        </tr>
      </table>
      <IngrediensList List={ingredientsArray} />
    </div>
  )
}
