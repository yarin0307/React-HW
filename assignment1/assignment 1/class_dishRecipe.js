class DishRecipe {

    constructor(name, ingredients, time, cookingMethod, image) {
        this.name = name;
        this.arringredients = ingredients;
        this.time = time;
        this.cookingMethod = cookingMethod;
        this.image = image;
        this.calories = this.getTotalCalories();
    }

    render() {
        let str = "<div>";
        str += "<h3>Dish Recipe details:</h3>";
        str += "<img src=" + this.image + "/>";
        str += "<p>Dish name:" + this.name + "</p>";
        str += "<p>Cooking method:" + this.cookingMethod + "</p>";
        str += "<p>Total cooking time:" + this.time + "</p>";
        str += "<p>Total calories:" + this.calories + "</p>";
        str += "</div>";
        return str;
    }

    getTotalCalories() {
        let total = 0;
        for (var i = 0; i < this.arringredients.length; i++) {
            total += this.arringredients[i].calories;
        }
        return total;
    }

    getIngredients() {
        let str = "";
        for (var i = 0; i < this.arringredients.length; i++) {
            str += this.arringredients[i].calories.render();
        }
        return str;
    }
}