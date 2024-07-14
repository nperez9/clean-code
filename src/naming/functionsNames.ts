/** Functions and methos should have a name that describes the operation that this ones are doing
 * Same as variables, functions name should not be redundant
 */

// Good examples
function getUser(id: number): any {}
Response.toString();

// More descriptive name that improves readbility
function getUserById(id: number): any {}
// even better if you have functions that can do similar operations
function getUserByEmail(email: string): any {}

// Bad examples
// in this example is redundadnt that toString is going to convert the data to string
const response = {
  convertDataToString: () => {},
};

/**
 * Same as variables, when the function returns a boolean, is ok to use is, has, should, etc
 * otherwise, use actions that can be responded with a yes or no (true or false)
 */
[2, 3, 4].includes(1);

function hasPermission(user): boolean {
  return false;
}

function isValidInput(input): boolean {
  return true;
}
