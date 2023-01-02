-- *** CREATE THE Ingredients TABLE ***
CREATE TABLE [Ingredients] (
		[id] smallint IDENTITY (1, 1) NOT NULL ,
        [name] nvarchar (30) NOT NULL,
        [image] nvarchar (1000) NOT NULL,
		[calories] float  NOT NULL
	PRIMARY KEY(id)
)


-- *** CREATE THE Recepies TABLE ***
CREATE TABLE [Recepies] (
		[id] smallint IDENTITY (1, 1) NOT NULL ,
        [name] nvarchar (30) NOT NULL,
        [image] nvarchar (1000) NOT NULL,
		[cookingMethod] nvarchar (30)  NOT NULL,
		[time] float NOT NULL
	PRIMARY KEY(id)
)


-- *** CREATE THE CONNECTING TABLE THAT SHOWS WHICH INGREDIENTS A RECIPE HAVE ***
CREATE TABLE [IngredientsInRecipes ] (
	recipeId smallint FOREIGN KEY REFERENCES [Recepies] (id) NOT NULL,
	ingredientId smallint FOREIGN KEY REFERENCES [Ingredients](id) NOT NULL
	primary key(recipeId,ingredientId)
)





