using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Data;
using System.Text;
using Server.Models;

/// <summary>
/// DBServices is a class created by me to provides some DataBase Services
/// </summary>
public class DBservices
{
    public SqlDataAdapter da;
    public DataTable dt;

    public DBservices()
    {
        //
        // TODO: Add constructor logic here
        //
    }

    //--------------------------------------------------------------------------------------------------
    // This method creates a connection to the database according to the connectionString name in the web.config 
    //--------------------------------------------------------------------------------------------------
    public SqlConnection connect(String conString)
    {

        // read the connection string from the configuration file
        IConfigurationRoot configuration = new ConfigurationBuilder()
        .AddJsonFile("appsettings.json").Build();
        string cStr = configuration.GetConnectionString("myProjDB");
        SqlConnection con = new SqlConnection(cStr);
        con.Open();
        return con;
    }

    //--------------------------------------------------------------------------------------------------
    // This method inserts a ingredient to the ingredients table 
    //--------------------------------------------------------------------------------------------------
    public int InsertIngredient(Ingredient ingredient)
    {

        SqlConnection con;
        SqlCommand cmd;

        try
        {
            con = connect("myProjDB"); // create the connection
        }
        catch (Exception ex)
        {
            // write to log
            throw (ex);
        }

        cmd = CreateCommandWithStoredProcedure("spInsertIngredient", con, ingredient);             // create the command

        try
        {
            int numEffected = cmd.ExecuteNonQuery(); // execute the command
            return numEffected;
        }
        catch (Exception ex)
        {
            // write to log
            throw (ex);
        }

        finally
        {
            if (con != null)
            {
                // close the db connection
                con.Close();
            }
        }

    }

    //--------------------------------------------------------------------------------------------------
    // This method inserts a recipe to the recipes table 
    //--------------------------------------------------------------------------------------------------
    public int InsertRecipe(Recipe r)
    {

        SqlConnection con;
        SqlCommand cmd;

        try
        {
            con = connect("myProjDB"); // create the connection
        }
        catch (Exception ex)
        {
            // write to log
            throw (ex);
        }

        cmd = CreateCommandWithStoredProcedure("spInsertRecepie", con, r);             // create the command

        try
        {
            int id = Convert.ToInt32(cmd.ExecuteScalar()); // execute the command
            return id;
        }
        catch (Exception ex)
        {
            // write to log
            throw (ex);
        }

        finally
        {
            if (con != null)
            {
                // close the db connection
                con.Close();
            }
        }

    }

    //--------------------------------------------------------------------------------------------------
    // This method inserts a ingredient of recipe to the connection table 
    //--------------------------------------------------------------------------------------------------
    public int InsertIngOfRecipe(int recipeid,int ingredientid)
    {

        SqlConnection con;
        SqlCommand cmd;

        try
        {
            con = connect("myProjDB"); // create the connection
        }
        catch (Exception ex)
        {
            // write to log
            throw (ex);
        }

        cmd = CreateCommandWithStoredProcedure("spInsertIngredientOfRecipe", con, recipeid,ingredientid);             // create the command

        try
        {
            int numEffected = cmd.ExecuteNonQuery(); // execute the command
            return numEffected;
        }
        catch (Exception ex)
        {
            // write to log
            throw (ex);
        }

        finally
        {
            if (con != null)
            {
                // close the db connection
                con.Close();
            }
        }

    }

    ////--------------------------------------------------------------------------------------------------
    //// This method reads all the recipes
    ////--------------------------------------------------------------------------------------------------
    public List<Recipe> ReadRecipes()
    {

        SqlConnection con;
        SqlCommand cmd;

        try
        {
            con = connect("myProjDB"); // create the connection
        }
        catch (Exception ex)
        {
            // write to log
            throw (ex);
        }


        cmd = CreateCommandWithStoredProcedureRead("spSelectRecepie", con);             // create the command


        List<Recipe> list = new List<Recipe>();

        try
        {


            SqlDataReader dataReader = cmd.ExecuteReader(CommandBehavior.CloseConnection);

            while (dataReader.Read())
            {

                Recipe r = new Recipe();
                r.Id = Convert.ToInt32(dataReader["id"]);
                r.Name = dataReader["name"].ToString();
                r.Image = dataReader["image"].ToString();
                r.CookingMethod = dataReader["cookingMethod"].ToString();
                r.Time = Convert.ToDouble(dataReader["time"]);
                list.Add(r);
            }

            return list;
        }
        catch (Exception ex)
        {
            // write to log
            throw (ex);
        }

        finally
        {
            if (con != null)
            {
                // close the db connection
                con.Close();
            }
        }

    }

    ////--------------------------------------------------------------------------------------------------
    //// This method reads all the ingredients
    ////--------------------------------------------------------------------------------------------------
    public List<Ingredient> ReadIngredients()
    {

        SqlConnection con;
        SqlCommand cmd;

        try
        {
            con = connect("myProjDB"); // create the connection
        }
        catch (Exception ex)
        {
            // write to log
            throw (ex);
        }


        cmd = CreateCommandWithStoredProcedureRead("spSelectIngredient", con);             // create the command


        List<Ingredient> list = new List<Ingredient>();

        try
        {


            SqlDataReader dataReader = cmd.ExecuteReader(CommandBehavior.CloseConnection);

            while (dataReader.Read())
            {

                Ingredient ing = new Ingredient();
                ing.Id = Convert.ToInt32(dataReader["id"]);
                ing.Name = dataReader["name"].ToString();
                ing.Image = dataReader["image"].ToString();
                ing.Calories = Convert.ToDouble(dataReader["calories"]);
                list.Add(ing);
            }

            return list;
        }
        catch (Exception ex)
        {
            // write to log
            throw (ex);
        }

        finally
        {
            if (con != null)
            {
                // close the db connection
                con.Close();
            }
        }

    }

    ////--------------------------------------------------------------------------------------------------
    //// This method reads all the ingredients of a specific recipe
    ////--------------------------------------------------------------------------------------------------
    public List<Ingredient> ReadRecipeIng(int id)
    {

        SqlConnection con;
        SqlCommand cmd;

        try
        {
            con = connect("myProjDB"); // create the connection
        }
        catch (Exception ex)
        {
            // write to log
            throw (ex);
        }


        cmd = CreateCommandWithStoredProcedureRead("spSelectIngOfRecipe", con,id);             // create the command


        List<Ingredient> list = new List<Ingredient>();

        try
        {


            SqlDataReader dataReader = cmd.ExecuteReader(CommandBehavior.CloseConnection);

            while (dataReader.Read())
            {

                Ingredient ing = new Ingredient();
                ing.Id = Convert.ToInt32(dataReader["id"]);
                ing.Name = dataReader["name"].ToString();
                ing.Image = dataReader["image"].ToString();
                ing.Calories = Convert.ToDouble(dataReader["calories"]);
                list.Add(ing);
            }

            return list;
        }
        catch (Exception ex)
        {
            // write to log
            throw (ex);
        }

        finally
        {
            if (con != null)
            {
                // close the db connection
                con.Close();
            }
        }

    }


    ////--------------------------------------------------------------------------------------------------
    //// Create the SqlCommand using a stored procedure
    ////--------------------------------------------------------------------------------------------------
    private SqlCommand CreateCommandWithStoredProcedureRead(string spName, SqlConnection con)
    {
        SqlCommand cmd = new SqlCommand(); // create the command object

        cmd.Connection = con;              // assign the connection to the command object

        cmd.CommandText = spName;      // can be Select, Insert, Update, Delete 

        cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

        cmd.CommandType = System.Data.CommandType.StoredProcedure; // the type of the command, can also be stored procedure

        return cmd;
    }

    ////--------------------------------------------------------------------------------------------------
    //// Create the SqlCommand using a stored procedure
    ////--------------------------------------------------------------------------------------------------
    private SqlCommand CreateCommandWithStoredProcedureRead(string spName, SqlConnection con, int id)
    {
        SqlCommand cmd = new SqlCommand(); // create the command object

        cmd.Connection = con;              // assign the connection to the command object

        cmd.CommandText = spName;      // can be Select, Insert, Update, Delete 

        cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

        cmd.CommandType = System.Data.CommandType.StoredProcedure; // the type of the command, can also be stored procedure

        cmd.Parameters.AddWithValue("@recipeId", id);

        return cmd;
    }

    ////---------------------------------------------------------------------------------
    //// Create the SqlCommand using a stored procedure
    ////---------------------------------------------------------------------------------
    private SqlCommand CreateCommandWithStoredProcedure(String spName, SqlConnection con, Ingredient ingredient)
    {

        SqlCommand cmd = new SqlCommand(); // create the command object

        cmd.Connection = con;              // assign the connection to the command object

        cmd.CommandText = spName;      // can be Select, Insert, Update, Delete 

        cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

        cmd.CommandType = System.Data.CommandType.StoredProcedure; // the type of the command, can also be stored procedure

        cmd.Parameters.AddWithValue("@name", ingredient.Name);

        cmd.Parameters.AddWithValue("@image", ingredient.Image);

        cmd.Parameters.AddWithValue("@calories", ingredient.Calories);

        return cmd;
    }

    ////---------------------------------------------------------------------------------
    //// Create the SqlCommand using a stored procedure
    ////---------------------------------------------------------------------------------
    private SqlCommand CreateCommandWithStoredProcedure(String spName, SqlConnection con, int recipeid,int ingredientid)
    {

        SqlCommand cmd = new SqlCommand(); // create the command object

        cmd.Connection = con;              // assign the connection to the command object

        cmd.CommandText = spName;      // can be Select, Insert, Update, Delete 

        cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

        cmd.CommandType = System.Data.CommandType.StoredProcedure; // the type of the command, can also be stored procedure

        cmd.Parameters.AddWithValue("@recipeId", recipeid);

        cmd.Parameters.AddWithValue("@ingredientId", ingredientid);

        return cmd;
    }

    ////--------------------------------------------------------------------------------------------------
    //// Create the SqlCommand using a stored procedure
    ////--------------------------------------------------------------------------------------------------
    private SqlCommand CreateCommandWithStoredProcedure(String spName, SqlConnection con, Recipe r)
    {

        SqlCommand cmd = new SqlCommand(); // create the command object

        cmd.Connection = con;              // assign the connection to the command object

        cmd.CommandText = spName;      // can be Select, Insert, Update, Delete 

        cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

        cmd.CommandType = System.Data.CommandType.StoredProcedure; // the type of the command, can also be stored procedure

        cmd.Parameters.AddWithValue("@name", r.Name);

        cmd.Parameters.AddWithValue("@image", r.Image);

        cmd.Parameters.AddWithValue("@cookingMethod", r.CookingMethod);

        cmd.Parameters.AddWithValue("@time", r.Time);

        return cmd;
    }
}
