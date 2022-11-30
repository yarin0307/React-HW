class Ingredient {

    constructor(id, name, image, calories) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.calories = calories;
    }

    render() {
        let str = "";
        str += "<p>Ingredient details:</p>";
        str += `<img src="${this.image}" />`
        str += "<p> Name:" + this.name + "</p>";
        str += "<p> Calories:" + this.calories + "</p>";
        
        return str;
    }
}