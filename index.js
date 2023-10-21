// To compile typescript file
// In Command Line type tsc filename(with-extension)
// To watch the TS File while runtime change In command line
// tsc --watch filename.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Basic types in TypeScript
var id = 5;
var Name = "Aarsh Shukla";
var Check = true;
var somethingIsThere = "Might be something";
var age;
age = 20;
//  Array
var arr1 = [1, "Demo array", false];
var Number1 = [1, 2, 3, 4, 5];
// Tuple
var person = [1, "John Doe", true];
// Tuple Array
var Person;
Person = [
    ["Alice", 15],
    ["Bob", 17],
    ["Charlie", 19],
];
// Union
var pid = 22;
pid = "22";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var user = {
    id: 1,
    name: "Aarsh",
};
// Type Assertion
var EnrollmentNo;
var StudId = EnrollmentNo;
// Other way to Declare Type Assertion
var CustomerID = StudId;
// Functions
function Addition(x, y) {
    return x + y;
}
// Void Function
function LetLogIsFalse(message) {
    console.log("Message is ", message);
}
LetLogIsFalse("Demo of Void Function");
var UserInter = {
    id: 1,
    name: "User Connected",
};
var AddValues = function (x, y) { return x + y; };
var SubValues = function (x, y) { return x - y; };
var MulValues = function (x, y) { return x * y; };
var DivValues = function (x, y) { return x / y; };
// SubClasses
var DemoPerson = /** @class */ (function () {
    function DemoPerson(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    DemoPerson.prototype.register = function () {
        return "\"Hello + ".concat(this.name, " + \"You registration is completed successfully\"");
    };
    return DemoPerson;
}());
var Demo1 = new DemoPerson(1, "John Doe", 20);
var Demo2 = new DemoPerson(2, "Alice Doe", 18);
console.log(Demo1, Demo2);
console.log(Demo1.register());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, age, position) {
        var _this = _super.call(this, id, name, age) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(DemoPerson));
var Emp = new Employee(1, "Kishan", 22, "Manager");
// Generics It is Used to create reusable components
function getArray(items) {
    return new Array().concat();
}
var NewArr = getArray([1, 2, 3, 4]);
var StrArr = getArray(["brad", "JohnDoe", "Shaun"]);
NewArr.push(5);
