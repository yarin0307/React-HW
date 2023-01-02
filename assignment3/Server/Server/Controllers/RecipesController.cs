using Microsoft.AspNetCore.Mvc;
using Server.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipesController : ControllerBase
    {
        // GET: api/<recepiesController>
        [HttpGet]
        public IEnumerable<Recipe> Get()
        {
            Recipe r = new Recipe();
            return r.Read();
        }

        // GET api/<recepiesController>/5
        [HttpGet("{id}")]
        public List<Ingredient> GetRecipeIngredients(int id)
        {
            Recipe recipe = new Recipe();
            return recipe.ReadRecipeIngredients(id);
        }

        // POST api/<recepiesController>
        [HttpPost]
        public int Post([FromBody] Recipe recepie)
        {
            return recepie.Insert();
        }
        [HttpPost("/recipeid/{recipeid}/ingredientid/{ingredientid}")]
        public int Post(int recipeid, int ingredientid)
        {
            Recipe r = new Recipe();
            return r.InsertIngredientOfRecipe(recipeid, ingredientid);
        }
        // PUT api/<recepiesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<recepiesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
