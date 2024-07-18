/** Functions and methos should have a name that describes the operation that this ones are doing
 * Same as variables, functions name should not be redundant
 * getters and setters can avoid this rule
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

/**
 * Getters and setters are an exception to this rule
 * and can be named as data container. Example
 */
class Database {
  private client: any;

  // Its okey to use nouns
  get connectedClient() {
    if (!this.client) {
      throw new Error('Database not connected!');
    }
    return this.client;
  }

  connect() {
    // Establishing connection ...
    this.client = {};
  }
}

const db = new Database();
db.connectedClient.query();
