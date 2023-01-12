console.log("Модуль 3 Заняття 6. Деструктуризація та rest/spread");

/** Кахут */
// const user = {
//   username: "Grut"
//   //... 100
// }

// const {username} = user

// function foo({username} = {}) {
//   console.log(username)
// }

// foo()
/** ---------------- */

// ## Example 1 - Деструктуризація

// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
// незалежних аргументів.

// ```js
function calcBMI({ weight, height }) {
  const numericWeight = Number(weight.replace(",", "."));
  const numericHeight = Number(height.replace(",", "."));
  return Number((numericWeight / numericHeight ** 2).toFixed(1));
}

const user = {
  weight: "88,3",
  height: "1.75",
};

// // Було
// console.log(calcBMI('88,3', '1.75'));
// // console.log(calcBMI('68,3', '1.65'));
// // console.log(calcBMI('118,3', '1.95'));

// // Очікується
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   }),
// );
// ```

// ## Example 2 - Деструктуризація

// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
// незалежних аргументів.

// ```js

// const userA = {
//   name: 'John',
//   surname: 'Smith',
//   age: 24
// }

// function printUser({name, surname, age = 'unknow'} = {}) {
//   console.log(`User is ${name} ${surname}, his age is ${age}`)
// }

// function hello(hey = 'No argument') {
//   console.log(hey)
// }

// printUser(userA)
// printUser()

// hello('asdsadsad')
// hello()

// function hello() {
//   console.log('hello')
// }
// hello(1,2,34,55)

// function printContactsInfo({names = '', phones = ''} = {}) {
//   console.log(names, phones)
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// // Було
// // printContactsInfo(
// //   'Jacob,William,Solomon,Artemis',
// //   '89001234567,89001112233,890055566377,890055566300',
// // );

// printContactsInfo()

// // Очікується
// printContactsInfo({
//   // names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });
// ```

// ## Example 3 - Глибока деструктуризація

// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
// незалежних аргументів.

// ```js
// function getBotReport(companyName, repairBots, defenceBots) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

function getBotReport({ companyName, bots: { repair: repairBots, defence: defenceBots } }) {
  return `${companyName} has ${repairBots + defenceBots} bots in stock`;
}

const boatCompany = {
  companyName: "Cyberdyne Systems",
  bots: {
    repair: 150,
    defence: 50,
  },
};

// // Було
// console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Очікується
// console.log(getBotReport(boatCompany)); // "Cyberdyne Systems has 200 bots in stock"
// ```

// ## Example 4 - Деструктуризація

// Напиши функцію, що приймає об'єкт параметрів із властивостями
// `companyName` та `stock` та виводить звіт про кількість товарів на складі будь-якої
// компанії.

// ```js
function getStockReport({ companyName, stock }) {
  let stockAmount = 0;

  console.log(companyName);
  console.log(stock);

  const stockValues = Object.values(stock);
  console.log(stockValues);

  for (const value of stockValues) {
    stockAmount += value;
  }

  return `${companyName} has ${stockAmount} bots`;
}

const company1 = {
  companyName: "Cyberdyne Systems",
  stock: {
    repairBots: 150,
    defenceBots: 50,
    defenceBots2: 50,
    defenceBots1: 50,
  },
};

// const report = getStockReport(company1);
// console.log(report)

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   }),
// ); // "Belacci has 35 item in stock"
// ```

// ## Example 5 - Операція spread

// Доповни функцію `createContact(partialContact)` так, щоб вона повертала новий
// об'єкт контакту з доданими властивостями `id` та `createdAt`, а також `list` зі
// значенням "default" якщо в `partialContact` немає такої властивості.

// ```js
//1
function createContact({ name, email, list = "default" }) {
  return {
    name,
    email,
    list,
    id: generateId(),
    createdAt: Date.now(),
  };
}

//2
function createContact(partialContact) {
  return {
    list: "default",
    ...partialContact,
    id: generateId(),
    createdAt: Date.now(),
  };
}

// const contact1 = {
//   name: 'Mango',
//   email: 'mango@mail.com',
//   list: 'friends',
// }

// const newContact = createContact(contact1);
// console.log(newContact)

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   }),
// );
// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   }),
// );

function generateId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
// ```

// ## Example 6 - Операція rest

// Напиши функцію `transformUsername(user)` так, щоб вона повертала новий об'єкт із властивістю
// `fullName`, замість `firstName` та `lastName`.

// ```js
function transformUsername({ firstName, lastName, friends, ...props }) {
  return {
    ...props,
    fullName: `${firstName} ${lastName}`,
  };
}

const user1 = {
  id: 1,
  firstName: "Jacob",
  lastName: "Mercer",
  email: "j.mercer@mail.com",
  friendCount: 40,
  friends: {
    Anton: "best",
    Ivan: "so so",
  },
};

const newUser = transformUsername(user1);
// console.log(newUser);

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   }),
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   }),
// );
// ```

//Ліво - rest
function multiply(...args) {
  const name = "Artem";
  console.log(args); // массив всех аргументов

  return {};
}

//Право - spread
// const third = {
//   propB: 20,
//   ...first,
//   ...second,
// };

// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// Використовуючи операцію rest, доповни код функції add() таким чином, щоб вона приймала будь - яку кількість аргументів,  рахувала і повертала їх суму.
function add(...args) {
  let sum = 0;
  for (let arg of args) {
    // console.log("element", arg);
    sum += arg;
  }
  return sum;
}

// console.log("sum", add(74, 11, 62, 46, 12, 36));

// Функція addOverNum() рахує суму всіх аргументів. Зміни параметри і тіло функції addOverNum() таким чином, щоб вона рахувала суму тільки тих аргументів, які більші за задане число. Це число повинно бути першим параметром функції.
function addOverNum(number, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > number) {
      total += arg;
    }
  }

  return total;
}

// console.log(addOverNum(15, 32, 6, 13, 19, 8));

// Функція findMatches() приймає довільну кількість аргументів. Першим аргументом завжди буде масив чисел, а решта аргументів будуть просто числами. Доповни код функції таким чином, щоб вона повертала новий масив matches, в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу. Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив [1, 2], тому що тільки вони є в масиві першого аргументу.

function findMatches(array, ...args) {
  // console.log(array);
  const matches = []; // Don't change this line
  for (let arg of args) {
    // console.log("element", arg);

    if (array.includes(arg)) {
      matches.push(arg);
    }
  }

  return matches;
}
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));

// Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги з oldName на newName у властивості books. Використовуй indexOf() для того, щоб знайти потрібний елемент масиву, і splice() для того, щоб замінити цей елемент.
const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line
    const index = this.books.indexOf(oldName);
    console.log(index);
    this.books.splice(index, 1, newName);
    return this.books;
    // Change code above this line
  },
};

// bookShelf.updateBook("Haze", "Dungeon chronicles");
// console.log(bookShelf.books);

// bookShelf.updateBook("The last kingdom", "Dune");
// console.log(bookShelf.books);

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],

  getPotions() {
    // просто повертає значення масиву об'єктів
    return this.potions;
  },

  addPotion(newPotion) {
    // деструктуризація змінної з об'єкту newPotion, яку будемо порівнювати
    const { name } = newPotion;
    console.log(name);
    // перебираємо масив об'єктів atTheOldToad
    for (const potion of this.potions) {
      console.log(potion.name);
      // на кожній ітерації порівнюємо name із вхідного об'єкта з potion.name (name - кожного з об'єктів масива)
      if (name === potion.name) {
        // якщо є співпадання повертаємо рядок та виходимо з функції
        return `Error! Potion ${name} is already in your inventory!`;
      }
    }
    // якщо співпадіння не має додаємо новий об'єкт у масив та виходимо з функції
    return this.potions.push(newPotion);
  },

  removePotion(potionName) {
    // перевіряємо вхідний параметр
    console.log("переданий аргумент (рядок):", potionName);
    // перебираємо масив об'єктів atTheOldToad
    for (const potion of this.potions) {
      // створюємо змінну індекса об'єкта у масиві atTheOldToad
      const potionIndex = this.potions.indexOf(potion);
      // перевіряємо, що отримаємо name та індекс кожного об'єкта
      console.log(potion.name);
      console.log(this.potions.indexOf(potion));
      // на кожній ітерації порівнюємо potionName із вхідного параметра з potion.name (name - кожного з об'єктів масива)
      if (potionName === potion.name) {
        // якщо є співпадання видаляємо об'єкт з масиву через його індекс
        this.potions.splice(potionIndex, 1);
      }
    }
    // якщо співпадання не має повертаємо рядок та виходимо з функції
    return `Potion ${potionName} is not in inventory!`;
  },

  updatePotionName(oldName, newName) {
    // перевіряємо вхідний параметр
    console.log("передані аргументи:", oldName, newName);
    // перебираємо масив об'єктів atTheOldToad
    for (const potion of this.potions) {
      // перевіряємо, що отримаємо значення name з кожного об'єкта масиву
      console.log(potion.name);
      // на кожній ітерації порівнюємо oldName із вхідного параметра з potion.name (name - кожного з об'єктів масива)
      if (oldName === potion.name) {
        // якщо є співпадання робимо заміну імені на нове та виходимо з функції
        console.log("знайшли співпадіння", potion.name);
        return (potion.name = newName);
      }
    }
    // якщо співпадання не має повертаємо рядок та виходимо з функції
    return `Potion ${oldName} is not in inventory!`;
  },
};

console.log(atTheOldToad.getPotions());

// запускати кожен метод окремо для перевірки

// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));

// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.getPotions());

// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));
// console.log(atTheOldToad.getPotions());
