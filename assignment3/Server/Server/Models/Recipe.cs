namespace Server.Models
{
    public class Recipe
    {
        int id;
        string name;
        string image;
        string cookingMethod;
        double time;

        public int Id { get => id; set => id = value; }
        public string Name { get => name; set => name = value; }
        public string Image { get => image; set => image = value; }
        public string CookingMethod { get => cookingMethod; set => cookingMethod = value; }
        public double Time { get => time; set => time = value; }

        public int Insert()
        {
            DBservices dbs = new DBservices();
            return dbs.InsertRecipe(this);
        }

        public List<Recipe> Read()
        {
            DBservices dbs = new DBservices();
            return dbs.ReadRecipes();
        }

        public List<Ingredient> ReadRecipeIngredients(int id)
        {
            DBservices dbs = new DBservices();
            return dbs.ReadRecipeIng(id);
        }

        public int InsertIngredientOfRecipe(int recipeid,int ingredientid)
        {
            DBservices dbs = new DBservices();
            return dbs.InsertIngOfRecipe(recipeid, ingredientid);
        }
    }
}
