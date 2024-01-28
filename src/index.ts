function calculateIceCreamCost(): void {
  // Отримання розміру стаканчика морозива від користувача
  const sizeInput: string = prompt("Виберіть розмір морозива (маленький або великий):");
  const size: string = sizeInput.toLowerCase(); // Перетворення на нижній регістр для зручності порівняння

  // Перевірка, чи коректно введено розмір морозива
  if (size !== "маленький" && size !== "великий") {
      console.log("Ви ввели некоректний розмір морозива.");
      return;
  }

  // Вартість стаканчика морозива в залежності від його розміру
  let iceCreamCost: number = 0;
  if (size === "маленький") {
      iceCreamCost += 10;
  } else if (size === "великий") {
      iceCreamCost += 25;
  }

  // Отримання додаткових начинок від користувача
  const toppingsInput: string = prompt("Виберіть додаткові начинки (шоколад, карамель, ягоди), через кому:");
  const toppings: string[] = toppingsInput.split(",").map(item => item.trim().toLowerCase()); // Розділення та перетворення на нижній регістр

  // Перевірка та додавання вартості кожної начинки
  toppings.forEach((topping) => {
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
              console.log(`Некоректна начинка: ${topping}`);
      }
  });

  // Питання про маршмелоу
  const marshmallowInput: string = prompt("Бажаєте маршмелоу? (так або ні):");
  const marshmallow: string = marshmallowInput.toLowerCase();

  // Додавання вартості маршмелоу, якщо користувач погоджується
  if (marshmallow === "так") {
      iceCreamCost += 5;
  }

  // Виведення загальної вартості морозива
  console.log(`Загальна вартість морозива: ${iceCreamCost} грн`);
}

// Виклик функції для розрахунку вартості морозива
calculateIceCreamCost();