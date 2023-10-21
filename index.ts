// To compile typescript file
// In Command Line type tsc filename(with-extension)
// To watch the TS File while runtime change In command line
// tsc --watch filename.ts

// Basic types in TypeScript
let id: number = 5;
let Name: string = "Aarsh Shukla";
let Check: boolean = true;
let somethingIsThere: any = "Might be something";
let age: number;
age = 20;

//  Array
let arr1: any[] = [1, "Demo array", false];
let Number1: number[] = [1, 2, 3, 4, 5];

// Tuple
let person: [number, string, boolean] = [1, "John Doe", true];

// Tuple Array

let Person: [string, number][];

Person = [
  ["Alice", 15],
  ["Bob", 17],
  ["Charlie", 19],
];

// Union
let pid: string | number = 22;
pid = "22";

// Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

// Objects

// const UserInfo: {
//   id: number;
//   name: string;
// } = {
//   id: 1,
//   name: "Aarsh",
// };

type User1 = {
  id: number;
  name: string;
};

const user: User1 = {
  id: 1,
  name: "Aarsh",
};

// Type Assertion
let EnrollmentNo: any;
let StudId = <number>EnrollmentNo;

// Other way to Declare Type Assertion
let CustomerID = StudId as number;

// Functions
function Addition(x: number, y: number): number {
  return x + y;
}

// Void Function
function LetLogIsFalse(message: number | string): void {
  console.log("Message is ", message);
}

LetLogIsFalse("Demo of Void Function");

// Interface
interface UserInterConnect {
  id: number;
  name: string;
  age?: number; // for the field to be optional we can use ? sign ahead of variable declaration
}

const UserInter: UserInterConnect = {
  id: 1,
  name: "User Connected",
};

interface MathFunction {
  (x: number, y: number): number;
}

const AddValues: MathFunction = (x: number, y: number): number => x + y;
const SubValues: MathFunction = (x: number, y: number): number => x - y;
const MulValues: MathFunction = (x: number, y: number): number => x * y;
const DivValues: MathFunction = (x: number, y: number): number => x / y;
// Interface ends here

// Classes and Interface

interface PersonInterConnect {
  id: number;
  name: string;
  register(): string | number;
}

// SubClasses

class DemoPerson implements PersonInterConnect {
  id: number;
  name: string;
  age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  register() {
    return `"Hello + ${this.name} + "You registration is completed successfully"`;
  }
}

const Demo1 = new DemoPerson(1, "John Doe", 20);
const Demo2 = new DemoPerson(2, "Alice Doe", 18);

console.log(Demo1, Demo2);

console.log(Demo1.register());

class Employee extends DemoPerson {
  position: string;
  constructor(id: number, name: string, age: number, position: string) {
    super(id, name, age); // calling the parent class constructor using 'super' keyword
    this.position = position;
  }
}

const Emp = new Employee(1, "Kishan", 22, "Manager");

// Generics It is Used to create reusable components
function getArray<T>(items: T[]): T[] {
  return new Array().concat();
}

let NewArr = getArray<number>([1, 2, 3, 4]);
let StrArr = getArray<string | number>(["brad", "JohnDoe", "Shaun"]);

NewArr.push(5);
