// ex 1 and ex 2 //
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  knowMe() {
    console.log(`სახელი ${this.name} ასაკი ${this.age}`);
  }
  static IsAdult(age) {
    return age >= 18;
  }
}
let person = new Person("ლევანი", "22");
person.knowMe();

console.log(Person.IsAdult(person.age));

//ex 3 //
class Animal {
  constructor(cat) {
    this.cat = cat;
  }
  speak() {
    return `${this.cat} Meowws`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.cat} says: Woof!`;
  }
}
let animal = new Animal("კატა");
console.log(animal.speak());

let dog = new Dog("ჯეკა");
console.log(dog.speak());

// e x 4 //
class Button {
  constructor(label, color) {
    this.label = label;
    this.color = color;
  }

  render(containerId) {
    let container = document.getElementById(containerId);

    if (!container) {
      container = document.createElement("div");
      container.id = containerId;
      document.body.appendChild(container);
    }

    const button = document.createElement("button");
    button.textContent = this.label;
    button.style.backgroundColor = this.color;
    button.style.color = "white";
    button.style.padding = "10px 20px";
    button.style.margin = "5px";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";

    container.appendChild(button);
  }
}

const button1 = new Button("Click Me", "blue");
const button2 = new Button("Submit", "green");

button1.render("dynamicContainer");
button2.render("dynamicContainer");

// ex 5 //

class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  describe() {
    return `ეს მანქანა არის ${this.brand} მაქსიმალური სიჩქარეა ${this.speed} კილომეტრი საათში`;
  }
}

class Car extends Vehicle {
  constructor(brand, speed, model) {
    super(brand, speed);
    this.model = model;
  }

  describe() {
    return `ეს მანქანა არის ${this.brand} ${this.model}მაქსიმალური სიჩქარეა ${this.speed} კილომეტრი საათში`;
  }
}

const car1 = new Car("Toyota", 180, "Corolla");
const car2 = new Car("BMW", 240, "M3");
const car3 = new Car("Mercedes", 220, "C-Class");

console.log(car1.describe());
console.log(car2.describe());
console.log(car3.describe());

// ex 6 //

class Product {
  static products = [];
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
    Product.products.push(this);
  }

  static filterByCategory(category) {
    return Product.products.filter((product) => product.category === category);
  }
}

new Product("ლეპტოპი", 1200, "electronics");
new Product("ფეხსაცემელი", 80, "fashion");
new Product("სმარტფონი", 800, "electronics");
new Product("წიგნი", 20, "books");
new Product("ყურსასმენი", 150, "electronics");

const electronicsProducts = Product.filterByCategory("electronics");

electronicsProducts.forEach((product) => {
  console.log(`სახელი: ${product.name}, ფასი: ${product.price} ლარი`);
});

//ex 7 //

class Event {
  constructor(name, date) {
    this.name = name;
    this.date = new Date(date);
  }

  isUpcoming() {
    const today = new Date();
    return this.date > today;
  }
}

const event1 = new Event("კონფერენცია", "2024-12-15");
const event2 = new Event("კონცერტი", "2024-11-20");
const event3 = new Event("ხელოვნების გამოფენა", "2024-11-30");

console.log(
  `ღონისძიება: ${event1.name}, მომავალშია: ${
    event1.isUpcoming() ? "კი" : "არა"
  }`
);
console.log(
  `ღონისძიება: ${event2.name}, მომავალშია: ${
    event2.isUpcoming() ? "კი" : "არა"
  }`
);
console.log(
  `ღონისძიება: ${event3.name}, მომავალშია: ${
    event3.isUpcoming() ? "კი" : "არა"
  }`
);
//ex 8 //

class Character {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
}

class Warrior extends Character {
  constructor(name, health) {
    super(name, health);
  }

  attack(target) {
    if (target.health > 0) {
      target.health -= 10;
      console.log(
        `${this.name} შეუტია ${target.name}! ${target.name}'დარჩა  ${target.health}. სიცოცხლე`
      );
    }
  }
}

const warrior1 = new Warrior("ჯუმბერიკომ", 100);
const warrior2 = new Warrior("ვალერას", 100);

warrior1.attack(warrior2);
warrior2.attack(warrior1);
//ex 9 //

class Task {
  constructor(title, completed = false, priority = "საშუალო") {
    this.title = title;
    this.completed = completed;
    this.priority = priority;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }

  static filterByPriority(tasks, priority) {
    return tasks.filter((task) => task.priority === priority);
  }
}

const tasks = [
  new Task("ისწავლე JavaScript", false, "მაღალი"),
  new Task("გარეცხე ტანსაცმელი", true, "დაბალი"),
  new Task("დაწერე ანგარიში", false, "საშუალო"),
  new Task("მოამზადე პრეზენტაცია", false, "მაღალი"),
];

tasks[0].toggleCompleted();
const highPriorityTasks = Task.filterByPriority(tasks, "მაღალი");

highPriorityTasks.forEach((task) =>
  console.log(
    `${task.title} - შესრულებულია: ${task.completed}, პრიორიტეტი: ${task.priority}`
  )
);
// ex 10 //

class Appointment {
  constructor(title, date) {
    this.title = title;
    this.date = new Date(date);
  }

  isToday() {
    const today = new Date();
    return today.toDateString() === this.date.toDateString(); //
  }
}

const appointment1 = new Appointment("დოქტორთან ვიზიტი", "2024-11-25");
const appointment2 = new Appointment("ჯგუფური შეხვედრა", "2024-11-26");

console.log(
  `${appointment1.title} - დღეს: ${appointment1.isToday() ? "კი" : "არა"}`
);
console.log(
  `${appointment2.title} - დღეს: ${appointment2.isToday() ? "კი" : "არა"}`
);
