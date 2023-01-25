// JavaScript містить масив рядків.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const foodIngredients = document.querySelector("#ingredients");
const ingredientsArray = [];

ingredients.forEach((ingredient) => {
  const items = document.createElement("li");
  items.classList.add('item');
  items.textContent = ingredient;
  ingredientsArray.push(items);
});

foodIngredients.append(...ingredientsArray);
console.log(foodIngredients);

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().

// Додасть назву інгредієнта як його текстовий вміст.

// Додасть елементу клас item.

// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

