/**
 * Now we gonna see some cases on how good comments can help us to understand the code, or add
 * useful additional information, but, in general, code should be self-explanatory and we should try to avoid comments
 * as much as possible. 
 * This is not a definitive list, but it can help you to understand when to use comments and when not, in some 
 * of the cases you may find it not necessary and that's okey, very often, it depends more on the team 
 * that we are working reather than stict rules.
 * 
 * 1- legal information
 * 2- Explination that can't be reached by the code itself
 * 3- Warning comments
 * 4- TODO comments
 * 5- Documentation comments
 */


/**
 * 1. Legal information
 * This is a legal comment that should be at the top of the file, it can be useful to
 * understand the context of the file, or to know if we can use it in our project. Also, it does not
 * bother at all, because it is at the top of the file, and it clearly that don't provide anithing to how 
 * the code should be working
 */

// (c) Nicolas Perez / Software Engineer
// This file is part of the Clean Code Handbook project
// It is licensed under the MIT License
// Created in 2025

let sqlDbDriver: any;
let mongoDbDriver: any;

class DatabaseAdapter {
  private dbEngine: any;

  loadDatabaseDriver(engine: string) {
    if (engine === 'sql') {
      this.dbEngine = sqlDbDriver;
    } else {
      this.dbEngine = mongoDbDriver;
    }
  }

  connect() {
    this.dbEngine.tryConnect();
  }

  insertData(data: any) {
    this.dbEngine.insert(data);
  }

  findOne(id: string) {
    // Todo: Needs to be implemented
  }
}

/**
 * 2. Explanation that can't be reached by the code itself
 * This is a comment that explains the propuse of a block of code or add more deatil
 * of how it works. In some cases, the code is not enough to understand the
 * propuse of the code, or the logic behind it.
 * 
 * Ex:
 */

// accepts [text]@[text].[text], i.e. it simply requires an "@" and a dot
const emailRegex = /\S+@\S+\.\S+/;

// In this case, the regex itself may not be clear enough to understand what it does,
// so we add a comment to explain it. This is useful for people who are not familiar
// with regular expressions or for those who want to understand the logic behind it.

/**
 * 3. Warning comments
 * This is a comment that warns about a potential issue or a limitation of the code.
 * It can be useful to avoid mistakes or to inform the user about a specific behavior.
 * 
 * Ex:
 */

// Only works in browser environment
localStorage.setItem('user', 'test@test.com');

// In this case, we add this line to warn about we should not run this script in Node.js for example, 
// only in the browser.

/**
 * 4. TODO comments
 * This is a comment that indicates that there is something to be done in the future.
 * This can be useful in cases when we are working on a diferrent feature and we see something unfinished
 * or a reminder to do something later.
 * It's important not to abuse of this practice, because it can lead to a lot of unfinishided code,
 * but it can be useful to keep track of things. 
 * 
 * Ex:
 */

const findUser = (id: string) => {
  // TODO: Implement user search logic
};

/**
 * 5. Documentation comments
 * This is a comment that explains the purpose of a function, class or a variable and it showed by the IDE in development time.
 * this is ideal when we are working on a library or a very generic functions that can be used by a buch of people.
 * 
 * In this example, we are going to use JSDoc, witch is the one for JS and TS, but almost every language has its own.
 * Ex:
 */

/**
 * Validates the user input.
 * @param input - The input to validate.
 * @returns true if the input is valid, false otherwise.
 */
function validateUserInput(input: string): boolean {
  return input.length > 0;
}

// try to call it from the IDE, and you will se the documentation in the tooltip
// you can find more information in https://jsdoc.app/