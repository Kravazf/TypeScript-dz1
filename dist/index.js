function calculateIceCreamCost() {
    var sizeInput = prompt("Виберіть розмір морозива (маленький або великий):");
    var size = sizeInput.toLowerCase();
    if (size !== "маленький" && size !== "великий") {
        console.log("Ви ввели некоректний розмір морозива.");
        return;
    }
    var iceCreamCost = 0;
    if (size === "маленький") {
        iceCreamCost += 10;
    }
    else if (size === "великий") {
        iceCreamCost += 25;
    }
    var toppingsInput = prompt("Виберіть додаткові начинки (шоколад, карамель, ягоди), через кому:");
    var toppings = toppingsInput.split(",").map(function (item) { return item.trim().toLowerCase(); });
    toppings.forEach(function (topping) {
        switch (topping) {
            case "шоколад":
                iceCreamCost += 5;
                break;
            case "карамель":
                iceCreamCost += 6;
                break;
            case "ягоди":
                iceCreamCost += 10;
                break;
            default:
                console.log("\u041D\u0435\u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0430 \u043D\u0430\u0447\u0438\u043D\u043A\u0430: ".concat(topping));
        }
    });
    var marshmallowInput = prompt("Бажаєте маршмелоу? (так або ні):");
    var marshmallow = marshmallowInput.toLowerCase();
    if (marshmallow === "так") {
        iceCreamCost += 5;
    }
    console.log("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u043C\u043E\u0440\u043E\u0437\u0438\u0432\u0430: ".concat(iceCreamCost, " \u0433\u0440\u043D"));
}
calculateIceCreamCost();
