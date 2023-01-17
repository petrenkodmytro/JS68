console.log("Модуль 4. Заняття 7. Коллбеки. Стрілочні функції. forEach");

/** Приклади з кахуту */

// function foo (fn) {
//   fn()
// }

// function logger(message) {
//   console.log(arguments)
//   return true;
// }
// console.log(logger("z"));

// const logger = message => {
//   console.log(arguments)
//   return message
// }

// const logger = (a, b) => a + b
// const logger = (message, a) => message;
// const logger = (a, b) => {
//   return a + b
// }

// foo(logger)
// logger()

// ## Example 1 - Коллбек функції

// Напишіть наступні функції:

// - `createProduct(obj, callback)` - приймає об'єкт товару без id, а також
//   коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у
//   властивість `id` та викликає коллбек передаючи йому створений об'єкт.
// - `logProduct(product)` - колббек приймаючий об'єкт продукту і логуючий його в
//   консоль
// - `logTotalPrice(product)` - колббек, що приймає об'єкт продукту і логіює загальну
//   вартість товару в консоль

/**
 * 1. Додати до обʼєкта ID
 * 2. Передати обʼєкт в колбек
 */
function createProduct(obj, callback) {
  const object = {
    ...obj,
    id: Date.now(),
  };

  callback(object);
}

function logProduct(product) {
  // console.log(product)
}

function logTotalPrice(product) {
  // console.log(product.price * product.quantity)
}

function doubleQuantity({ quantity }) {
  // console.log(quantity * 2)
}

const product = { name: "Tomato", price: 10, quantity: 43 };
createProduct(product, doubleQuantity);

createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
createProduct({ name: "Tomato", price: 10, quantity: 43 }, logTotalPrice);

// ## Example 2 - Коллбек функції

// Додайте в об'єкт `account` методи `withdraw(amount, onSuccess, onError)` та
// `deposit(amount, onSuccess, onError)`, де перший параметр це сума операції, а
// другий та третій - коллбеки.

// Метод `withdraw` викликає onError якщо amount більше TRANSACTION_LIMIT або
// this.balance, і onSuccess в іншому випадку.

// Метод `deposit` викликає onError якщо amount більше TRANSACTION_LIMIT або менше
// або дорівнює нулю, і onSuccess в іншому випадку.

// ```js
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT || amount > this.balance) {
//       onError({
//         message: "сталась біда. Ліміт перевищено або грошей нема",
//         status: "ERROR"
//       })
//     } else {
//       onSuccess({
//         status: "OK",
//         message: "Операція withdraw успішна"
//       })
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount <= 0 || amount > TRANSACTION_LIMIT) {
//       onError({
//         message: "Deposit не вдався. Бо сума менше або дорівнює нуль. Або ліміт перевищено",
//         status: "ERROR DEPOSIT"
//       })
//     } else {
//       onSuccess({
//         message: 'Все гуд'
//       })
//     }
//   }
// };

// function handleSuccess({message, status = "OK"}) {
//   console.log(`${status}: ${message}`)
// }

// function handleError({message, status}) {
//   console.log(`${status}: ${message}`)
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
// ```

// ## Example 3 - Коллбек функції

// Напишіть функцію `each(array, callback)`, яка першим параметром очікує
// масив, а другим - функцію, яка застосовується до кожного елемента масиву.
// Функція each повинна повернути новий масив, елементами якого будуть результати
// виклику коллбека.

/**
 * 1. створити новий пустий результуючий масив
 * 2. Запустити цикл по масиву.
 * 3. Викликати колбек на кожній ітераціїї циклу. Передавши поточний елемент
 * 4. Додати результат колбеку в результуючий масив
 * 5. Повернути результуючий масив
 */

// function each(array, callback) {
//   const result = [];

//   for(let element of array) {
//     //1
//     // const el = callback(element);
//     // result.push(el)

//     //2
//     result.push(callback(element))
//   }

//   return result
// }

// ```js

// const numbers = [64, 49, 36, 25, 16];

// const newNumbers = each(numbers, function (value) {
//   return value * 2;
// });

// console.log(newNumbers)

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );

// const users = [{
//   name: "artem",
//   age: 30
// }];

// const res = each(users, function (user) {
//   return {
//     ...user,
//     name: user.name.toUpperCase()
//   }
// });

// console.log(res)

// ```

// ## Example 4 - Стрілочні функції

// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// ```js

const fnName = (arg) => {
  return "a";
};

// const createProduct = (partialProduct, callback) => {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// }

// function logProduct(product) {
//   console.log(product);
// }
// =
// const logProduct = product => console.log(product)

// function logTotalPrice(product) {
//   console.log(product.price * product.quantity);
// }
//=
// const logTotalPrice = product => console.log(product.price * product.quantity)

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
// ```

// ## Example 5 - Стрілочні функції

// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// ```js
const TRANSACTION_LIMIT = 1000;

const account = {
  username: "Jacob",
  balance: 400,
  withdraw(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount > this.balance) {
      onError(`Amount can't exceed account balance of ${this.balance} credits`);
    } else {
      this.balance -= amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },
  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
    } else if (amount <= 0) {
      onError(`Amount must be more than 0 credits`);
    } else {
      this.balance += amount;
      onSuccess(`Account balance: ${this.balance}`);
    }
  },
};

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// const handleSuccess = message => console.log(`✅ Success! ${message}`);
// const handleError = message => console.log(`❌ Error! ${message}`);

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
// ```

// ## Example 6 - Інлайн стрілочні функції

// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// ```js
function each(array, callback) {
  const newArr = [];
  for (const el of array) {
    newArr.push(callback(el));
  }
  return newArr;
}

// console.log(
//   each([64, 49, 36, 25, 16], value => value * 2),
// );
// console.log(
//   each([64, 49, 36, 25, 16], value => value - 10),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );

// const res = each(users, user => {
//   return {
//     ...user,
//     name: user.name.toUpperCase()
//   }
// });
//==
// const users = [{
//   name: "artem",
//   age: 30
// }];

// console.log(each(users, user => ({
//     ...user,
//     name: user.name.toUpperCase()
//   })
// ))

// ```

// ## Example 7 - Метод forEach

// Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.

// ```js
function logItems(items) {
  console.log(items);

  //1
  // const fn = (item, index) => {
  //   console.log(`${index + 1} - ${item}`);
  // }
  // items.forEach(fn)

  //2
  items.forEach((el) => console.log(el));

  // for (let i = 0; i < items.length; i += 1) {
  //   console.log(`${i + 1} - ${items[i]}`);
  // }
}

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
// ```

// ## Example 8 - Метод forEach

// Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.

// ```js
function printContactsInfo({ names, phones }) {
  const nameList = names.split(",");
  const phoneList = phones.split(",");

  nameList.forEach((name, i) => {
    // console.log(`${name}: ${phoneList[i]}`);
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  });

  // for (let i = 0; i < nameList.length; i += 1) {
  //   console.log(`${nameList[i]}: ${phoneList[i]}`);
  // }
}

// [{
//   name: "user",
//   age: 123
// }].forEach(({age}) => console.log(age))

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });
// ```

// ## Example 9 - Метод forEach

// Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.

// ```js
function calсulateAverage(...args) {
  let total = 0;

  args.forEach((arg) => (total += arg));

  // for (let i = 0; i < args.length; i++) {
  //   total += args[i];
  // }

  return total / args.length;
}

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
// ```

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line
  // for (let i = 0; i < firstArray.length; i += 1) {
  //   if (secondArray.includes(firstArray[i])) {
  //     commonElements.push(firstArray[i]);
  //   }
  // }
  firstArray.forEach(function (element) {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  return commonElements;
  // Change code above this line
}
// getCommonElements([1, 2, 3], [2, 4]);
// console.log(getCommonElements([1, 2, 3], [2, 4]));

// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне число, додаючи до нього значення параметра value. Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала, наповнювала і повертала новий масив з оновленими значеннями.
function changeEven(numbers, value) {
  const newArray = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      newArray.push(numbers[i] + value);
      console.log(numbers[i]);
    } else {
      newArray.push(numbers[i]);
      console.log(numbers[i]);
    }
  }
  return newArray;
}
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

const numbers = [5, 10, 15, 20, 25];

// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// Метод перебирання forEach
numbers.forEach(function (number, index, array) {
  // console.log(`Індекс ${index}, значення ${number}`);
  // console.log(array);
});

// Метод перебирання map
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const names = students.map((student) => {
//   return student.name;
// });
// console.log(names);

// Метод перебирання flatMap
// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// console.log(allCourses);
// ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

// Метод перебирання filter
// const uniqueCourses = allCourses.filter((course, index, array) => {
//   console.log(array);
//   console.log(array.indexOf(course) === index);
//   return array.indexOf(course) === index
// });

// console.log(uniqueCourses);

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const best = students.filter((student) => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Манго і Ківі

// const worst = students.filter((student) => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Аякс

// В колбек-функції зручно деструктуризувати властивості об'єкта
// const average = students.filter((student) => student.score >= LOW_SCORE && student.score < HIGH_SCORE);
// console.log(average);

// Метод перебирання find
// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// colorPickerOptions.find((option) => option.label === "blue"); // { label: 'blue', color: '#2196F3' }
// colorPickerOptions.find((option) => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
// colorPickerOptions.find((option) => option.label === "white"); // undefined

// Метод перебирання findIndex
// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// colorPickerOptions.findIndex((option) => option.label === "blue"); // 2
// colorPickerOptions.findIndex((option) => option.label === "pink"); // 3
// colorPickerOptions.findIndex((option) => option.label === "white"); // -1

// Метод перебирання reduce
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = (tweets) =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);
// console.log(tags);

// Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// Це стандартна практика, якщо callback-функція досить велика.

// Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// то створюємо її і записуємо їй значення 0.
// В іншому випадку збільшуємо значення на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// Початкове значення акумулятора - це порожній об'єкт {}
// const countTags = (tags) =>
//   tags.reduce((acc, tag) => {
//     if (!acc.hasOwnProperty(tag)) {
//       acc[tag] = 0;
//     }

//     acc[tag] += 1;

//     return acc;
//   }, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// Метод перебирання sort
// const scores = [61, 19];
// console.log([...scores]);
// const ascendingScores = [...scores].sort((a, b) => {
//   console.log(a, b);

//   return a - b;
// });
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
// ];

// const inAscendingScoreOrder = students.sort((firstStudent, secondStudent) => firstStudent.score - secondStudent.score);

// const inDescendingScoreOrder = students.sort((firstStudent, secondStudent) => secondStudent.score - firstStudent.score);

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) => firstStudent.name.localeCompare(secondStudent.name));

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];
// Доповни функцію getUsersWithFriend(users, friendName) таким чином, щоб вона повертала масив користувачів, у яких є один спільний друг з ім'ям в параметрі friendName. Масив друзів користувача зберігається у властивості friends.
// Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter((user) => user.friends.includes(friendName));
// };
// Change code above this line

// const result = getUsersWithFriend(users, "Briana Decker");

// const uniqueCourses = allCourses.filter((course, index, array) => {
//   console.log(array);
//   console.log(array.indexOf(course) === index);
//   return array.indexOf(course) === index
// });

// 25. Доповни функцію getFriends(users) таким чином, щоб вона повертала масив друзів всіх користувачів (властивість friends). У декількох користувачів можуть бути однакові друзі, зроби так, щоб масив, що повертається, не містив повторень.
// const getFriends = (users) => {
//     return users.flatMap((user) => user.friends).filter((friend, index, array) => array.indexOf(friend) === index);

// };
// console.log(getFriends(users));

//  4/47 Доповни функцію getSortedFriends(users) таким чином, щоб вона повертала масив унікальних імен друзів (властивість friends), відсортований за алфавітом.
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];
const getSortedFriends = (users) => {
  return users
    .flatMap((user) => user.friends)
    .sort((prev, next) => prev.localeCompare(next))
    .filter((friend, index, array) => array.indexOf(friend) === index);
};

// console.log(getSortedFriends(users));

// 4/48 Доповни функцію getTotalBalanceByGender(users, gender) таким чином, щоб вона повертала загальний баланс користувачів (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender.
const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter((user) => user.gender === gender)
    .reduce((total, user) => {
      return total + user.balance;
    }, 0);
};

// console.log(getTotalBalanceByGender(users, "male"));
// console.log(getTotalBalanceByGender(users, "female"));
