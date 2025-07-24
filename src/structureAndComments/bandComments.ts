/** 
 * There are 4 types of bad comments that we should be aware of:
 * 1. Redundant comments
 * 2. Dividers / Block markers
 * 3. Misleading comments
 * 4. Commented-out Code
 *
 * These comments are used to separate code blocks, but they are not necessary and can be removed
 * The code should be self-explanatory, and the structure of the code should be clear enough to understand the flow
 */

// 1. Redundant comments example:

const sqlDriver = 'sqlDriver';
const mongoDriver = 'mongoDriver';

// Acts as an adapter, connecting models to multiple databases
class DatabaseManager {
  private dbDriver: any; // The database engine which is used

  loadDatabaseDriver(driver: string): void {
    if (driver === 'sql') {
      // Connect to Sql driver if driver param is set to 'sql'
      this.dbDriver = sqlDriver;
    } else if (driver === 'mongo') {
      // Connect to Mongo driver if driver param is set to 'mongo'
      this.dbDriver = mongoDriver;
    } else {
      // Will throw an error if the driver is not registered
      throw new Error('Invalid database driver');
    }
  }

  connect(): void {
    // Connect to the database driver
    this.dbDriver.connect(); // This will fail if the driver is not loaded
  }
}

/** 
 * having this comments is redundant, the code is self-explanatory, and also adds noise to the code
 * Here is a cleaner version of the same function, also, the name of the props has been changed to be more descriptive
 * Errors should not be treated as a comments, it should be handled by the code itself
 */

class DatabaseManagerFixed {
  private dbEngine: any;

  loadDatabaseEngine(engine: string): void {
    if (engine === 'sql') {
      this.dbEngine = sqlDriver;
    } else if (engine === 'mongo') {
      this.dbEngine = mongoDriver;
    } else {
      throw new Error('Invalid database engine, the given engine is not registered');
    }
  }

  connect(): void {
    if (!this.dbEngine) {
      throw new Error('Database engine not loaded, please load the engine before connecting');
    }

    try {
      this.dbEngine.connect();
    } catch (error) {
      throw new Error('Failed to connect to the database engine');
    }
  }
}


/** 
 * 2. Dividers / Block markers
 * 
 * These types of comments normally are used to separate code blocks in a larger file
 * Maybe in some cases can be useful, like themes sections of a single css files, but usually
 * are a warning of we are putting to much code in a single file
 * 
 * example:
 */

// --------------------
// CONSTANTS 
// --------------------

const MAX_USERS = 100;
const API_URL = 'https://api.example.com';
const TIMEOUT = 5000;


// --------------------
// UTILS
// --------------------

function getApiUrl(endpoint: string): string {
  return `${API_URL}/${endpoint}`;
}

// --------------------
// CLASSES
// --------------------

class Cat {}
class Neko extends Cat {}

/** 
 * In this case, the code can be separated in different files (at least), like:
 * - constants.ts
 * - utils.ts
 * - classes.ts
 * 
 * This way, the code is more organized, and we avoid the need of using dividers
 */

/** 
 * 3. Misleading comments
 * These comments are used to explain the code, but they are not accurate or do not reflect the actual
 * behavior of the code. This can lead to confusion and misunderstandings.
 * 
 * for example
 */ 

const dbInsert = (data: any) => {}

function insertUsers() {
  dbInsert({
    name: 'John Doe',
    age: 30,});
  // This function updates a user into the database
}

// In this case, the comment is misleading, and we dont really know if the comment is bad or the name of the function is innaccurate
// We can fix it in two ways, if the comment is wrong, we can remove it, or if the function name is not accurate, we can change it
// And, if we can't change the name of the function, we can add a comment that explains better why it is named that way

function updateUser() {
  dbInsert({
    name: 'John Doe',
    age: 30,
  });
}

function insertUser() {
  // it actually updates a user, even though the function name is insertUser, we had to keep that way to not break the legacy codebase
  dbInsert({
    name: 'John Doe',
    age: 30,
  });
}


/** 
 * 4. Commented-out Code
 * This is code that has been commented out, usually because it is no longer needed or is being
 * considered for removal. This can lead to confusion and clutter in the codebase.
 * 
 * example:
 */

// function calculateTotalPrice() {
//   return 100 + 200;
// }

function calculateTotalPrice(a: number, b: number) {
  return a + b;
}

/**
 * In this case, we see that the older version of the function is commented out, but we are not using it anymore
 * using this kind of approach will lead into hard to read and maintain code
 *
 * we should rely in tools like git to keep track of the changes in the codebase, and avoid versioning or keep unnecessary code commented out
 */

