console.log("# Модуль 5. Заняття 10. Прототипи та класи");

// Кахут

// class Animal {
//   #privateProp = 'Secure';
//   #printPrivateMessage() {
//     console.log('private message')
//   }

//   static printMessage() {
//     console.log('static method')
//   }

//   constructor(name) {
//     // this = {} // imlicitly

//     this.name = name
//     //....

//     // return this // implicitly
//   }

//   printHello() {
//     console.log(this.name + ' hello')
//   }
// }

// const rabbit = new Animal('Bunny');
// rabbit.printMessage()

// Animal.printMessage()

// ## Example 1 - Блогер

// Напиши клас `Blogger` для створення об'єкта блогера з наступними властивостями:

// - `email` - пошта, рядок
// - `age` - вік, число
// - `numberOfPosts` - кількість постів, число
// - `topics` - масив тем на яких спеціалізується блогер

// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод `getInfo()`, який, повертає рядок:
// `User ${пошта} is ${вік} years old and has ${кількість постів} posts`.

// Додай метод `updatePostCount(value)`, який у параметрі `value` приймає
// кількість постів, які потрібно додати користувачеві.

// 1. створюємо клас з конструктором і обʼєктом параметрів
class Blogger {
  constructor({ email, age, numberOfPosts, topics } = {}) {
    this.email = email;
    this.age = age;
    this.numberOfPosts = numberOfPosts;
    this.topics = topics;
  }

  staticgetInfo() {
    return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
  }

  updatePostCount(value) {
    this.numberOfPosts += value;
  }
}

const blogger = new Blogger({
  email: "mango@mail.com",
  age: 24,
  numberOfPosts: 20,
  topics: ["tech", "cooking"],
});

// console.log(blogger)

// console.log(blogger.getInfo());
// blogger.updatePostCount(10);
// console.log(blogger.getInfo());

// ```js
// const mango = new User({
//   name: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

const poly = new Blogger({
  email: "poly@mail.com",
  age: 19,
  numberOfPosts: 17,
  topics: ["sports", "gaming", "health"],
});
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts
// ```

// ## Example 2 - Сховище

// Напиши клас `Storage` який створює об'єкти для керування складом товарів.
// При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме
// його властивість `items`.

// Додай методи класу:

// - `getItems()` - повертає масив товарів.
// - `addItem(item)` - отримує новий товар і додає його до поточних.
// - `removeItem(item)` - отримує товар і, якщо він є, видаляє його з поточних.

class Storage {
  constructor(goods) {
    this._items = goods;
  }

  getItems() {
    return this._items;
  }

  addItem(item) {
    this._items.push(item);
  }

  removeItem(item) {
    const index = this._items.indexOf(item);

    if (index > -1) {
      this._items.splice(index, 1);
    }
  }
}

// // ```js
// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);
// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// // console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.getItems()); // [ '🍎', '🍇', '🍑', '🍌' ]
// // ```

// const courses = new Storage(['html', 'css', 'js', 'node']);
// console.table(courses.getItems())

// ## Example 3 - User

// Напиши клас `User` який створює об'єкт із властивостями `login` та `email`.
// Оголоси приватні властивості `#login` та `#email`, доступ до яких зроби через
// гетер та сетер `login` та `email`.

const permission = true;

// class User {
//   #login;
//   #email;

//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     if (permission) {
//       return this.#login;
//     }

//     return "нєєєє)";
//   }

//   set login(value) {
//     if (value.length < 5) {
//       this.#login = value;
//     }
//   }
// }

// ```js
// const mango = new User({
//   login: "Mango",
//   email: "mango@dog.woof",
// });

// console.log(mango.login); // Mango
// mango.login = 'dodo';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie
// ```

// ## Example 4 - Нотатки

// EXAMPLE items = [
//   {
//     text: 'asdsadsa',
//     priority: 'LOW'
//   },
//   {
//     text: 'asdsadsa',
//     priority: 'LOW'
//   }
// ]

// Напиши клас `Notes` який керує колекцією нотаток у властивості `items`.
// Замітка це об'єкт із властивостями `text` та `priority`. Додай класу статичну
// властивість `Priority`, у якому зберігатиметься об'єкт із пріоритетами.

class Notes {
  static defaultText = "ororororoor oro ro or o";
  static Priority = {
    LOW: "low",
    NORMAL: "normal",
    HIGH: "high",
  };

  constructor() {
    this.items = [];
  }

  addNote(note) {
    this.items.push(note);
  }

  removeNote(text) {
    const index = this.items.findIndex((el) => el.text === text);
    this.items.splice(index, 1);
  }
}

// ```js
// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// ```

// Додай методи `addNote(note)`, `removeNote(text)` та
// `updatePriority(text, newPriority)`.

// ```js
const myNotes = new Notes();
// console.log(myNotes);

myNotes.addNote({
  text: Notes.defaultText,
  priority: Notes.Priority.LOW,
});

// console.log(myNotes.items);

myNotes.addNote({
  text: "Моя друга замітка",
  priority: Notes.Priority.NORMAL,
});
// console.log(myNotes.items);

// myNotes.removeNote("Моя друга замітка");
// console.log(myNotes.items);

// myNotes.updateNote('Моя друга замітка', Notes.Priority.HIGH);
// console.log(myNotes.items);
// ```

// ## Example 5 - Toggle

// Напишіть клас `Toggle` який приймає об'єкт налаштувань `{isOpen: boolean}` і
// оголошує одну властивість `on` - стан вкл/викл (true/false). За замовчуванням
// значення властивості `on` повинно бути `false`.

class Toggle {
  constructor({ isOpen = false } = {}) {
    this.on = isOpen;
  }

  toggle() {
    this.on = !this.on;
  }
}

// ```js
// const firstToggle = new Toggle({ isOpen: true });
// console.group("firstToggle");
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd("firstToggle");

// const secondToggle = new Toggle();
// console.group("secondToggle");
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd("secondToggle");

// Как создать пустой объект

// Если в Object.create использовать null в качестве единственного аргумента, то создастся совершенно чистый объект.

// Object.create является отличной утилитой для создания прототипов. Объекты, созданные с помощью Object.create, имеют proto и наследуют свойства объекта, которыми можно манипулировать. Что если мы хотим создать объект который не был подвержен манипуляциям извне? Мы можем сделать это с Object.create(null):

// Можно создать объект, который кажется пустым с помощью {}, но этот объект всё ещё имеет proto, hasOwnProperty и другие методы объекта. Однако, есть способ создать чистый объект:

// const dict = Object.create(null);

class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }
  getValue() {
    return this.value;
  }
  padEnd(str) {
    return (this.value = this.value + str);
  }
  padStart(str) {
    return (this.value = str + this.value);
  }
  padBoth(str) {
    return (this.value = str + this.value + str);
  }
}

// Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
// console.log(typeof(builder.getValue()));

//4/12
// class User {
//   // Необов'язкове оголошення публічних властивостей
//   name;
//   // Обов'язкове оголошення приватних властивостей
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// mango.changeEmail("mango@supermail.com");
// console.log(mango)
// console.log(mango.getEmail()); // mango@supermail.com
// console.log(mango.#email); // Виникне помилка, це приватна властивість

// class Car {
//Інкапсуляція — це концепція, що дозволяє приховати те, як влаштований клас. Користувач класу повинен отримувати доступ тільки до публічного інтерфейсу - набору публічних властивостей і методів класу. Решта методів і властивостей (не публічних) повинні бути недоступні.
//В класах інкапсуляція реалізується приватними властивостями, доступ до яких можна отримати тільки всередині класу.

//Припустимо, що пошта користувача повинна бути недоступною для прямої зміни зовні, тобто - приватною. Додаючи до імені властивості символ #, ми робимо її приватною. Оголошення приватної властивості до ініціалізації в конструкторі - обов'язкове.
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }

// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));
// const audi = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// console.log(audi);

class UserA {
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  // Геттер email
  // Гетери та сетери — це коротший синтаксис оголошення методів для взаємодії з властивостями. Геттер і сетер імітують звичайну публічну властивість класу, але дозволяють змінювати інші властивості зручнішим способом. Геттер виконується при спробі отримати значення властивості, а сетер - при спробі його змінити.

  // Гетери та сетери доречно використовувати для простих операцій читання і зміни значення властивостей, особливо приватних, як їх публічний інтерфейс. Для роботи з властивістю, яка зберігає масив або об'єкт, вони не підійдуть.
  get email() {
    return this.#email;
  }

  // Сеттер email
  set email(newEmail) {
    this.#email = newEmail;
  }
}
const mang = new UserA({ name: "Mango", email: "mango@mail.com" });
// console.log(mang.email); // mango@mail.com
mang.email = "mango@supermail.com";
// console.log(mang.email); // mango@supermail.com
// console.log(mang.get);

class Car {
  #price;
  //Крім публічних і приватних властивостей майбутнього екземпляра, в класі можна оголосити його власні властивості, доступні тільки класові, але не його екземплярам - статичні властивості (static). Вони корисні для зберігання інформації, що стосується класу.
  static MAX_PRICE = 50000;
  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice <= Car.MAX_PRICE) {
      this.#price = newPrice;
    }
    return;
  }
}

const audi = new Car({ price: 35000 });
// console.log(audi);
// console.log(audi.price); // 35000

audi.price = 49000;
// console.log(audi.price); // 49000

audi.price = 51000;
// console.log(audi.price); // 49000

//5/12
// class UserB {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return UserB.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     UserB.#takenEmails.push(email);
//     console.log(UserB.#takenEmails);
//   }

// }

// const mango1 = new UserB({ email: "mango@mail.com" });
// console.log(mango1);

// console.log(UserB.isEmailTaken("poly@mail.com"));
// console.log(UserB.isEmailTaken("mango@mail.com"));

// 5/20
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Change code below this line

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel, blacklistedEmails = [] }) {
    super(email);
    this.accessLevel = accessLevel;
    this.blacklistedEmails = blacklistedEmails;
  }
  blacklist(email) {
    this.blacklistedEmails.push(email);
  }
  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }
  // Change code above this line
}

const mangor = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

// console.log(mangor.email); // "mango@mail.com"
// console.log(mangor.accessLevel); // "superuser"

// mangor.blacklist("poly@mail.com");
// console.log(mangor.blacklistedEmails); // ["poly@mail.com"]
// console.log(mangor.isBlacklisted("mango@mail.com")); // false
// console.log(mangor.isBlacklisted("poly@mail.com")); // true

// set-колекцыия уникальных элементов (нет повторяющихся)
const arryNumber = [...new Set([3, 1, 2, 3, 4])];
console.log(new Set([3, 1, 2, 3, 4]));
console.log(arryNumber.length, arryNumber[2]);
