using Microsoft.AspNetCore.Mvc;
using Server.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ingredientsController : ControllerBase
    {
        // GET: api/<ingredientsController>
        [HttpGet]
        public IEnumerable<Ingredient> Get()
        {
            Ingredient ingredient = new Ingredient();
            return ingredient.Read();
        }

        // GET api/<ingredientsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ingredientsController>
        [HttpPost]
        public int Post([FromBody] Ingredient ingredient)
        {
            return ingredient.Insert();
        }

        // PUT api/<ingredientsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ingredientsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
