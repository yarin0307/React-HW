namespace Server.Models
{
    public class Ingredient
    {
        int id;
        string name;
        string image;
        double calories;

        public int Id { get => id; set => id = value; }
        public string Name { get => name; set => name = value; }
        public string Image { get => image; set => image = value; }
        public double Calories { get => calories; set => calories = value; }

        public int Insert()
        {
            DBservices dbs = new DBservices();
            return dbs.InsertIngredient(this);
        }
        public List<Ingredient> Read()
        {
            DBservices dbs = new DBservices();
            return dbs.ReadIngredients();
        }
    }
}
