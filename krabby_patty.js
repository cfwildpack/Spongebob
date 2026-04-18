class KrabbyPatty {
    constructor() {
        this.ingredients = ["bun", "patty", "lettuce", "tomato"];
    }

    prepare() {
        console.log("Preparing Krabby Patty...");
        this.ingredients.forEach(i => console.log("Adding " + i));
        console.log("Order ready!");
    }
}

const order = new KrabbyPatty();
order.prepare();
