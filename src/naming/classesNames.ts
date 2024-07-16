/**
 * Classes naming should be refrences to objects or entities
 *
 * The same as functions and variables, sometimes adding a lot of
 * infortmation to the name can make it harder to read and be redundant
 */

// Examples
class User {}
class Game {}

// avoid redundant subfixes, classes are usually instanciated

// nope, the car is already a class
class UserCar {}
const theUserCar = new UserCar();

// Go to
class Car {}
const userCar = new Car();
