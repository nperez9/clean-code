/**
 * This file is part of the Clean Code Handbook.
 * It is licensed under the MIT License.
 * Created in 2025
 * 
 * 
 * Vertical Formatting
 * 
 * The code should be redable from top to bottom without many jumps or horizantal scrolling.
 * Obusly, this is hard to react in larger codebases, there always be calls to function, imports, etc
 * but, a good way is to keep the code as vertical as possible, this means:
 * - Avoiding long lines of code
 * - Avoiding horizontal scrolling
 * - Avoiding too many nested blocks of code
 * - Avoiding too many imports and exports in the same file
 * - Avoiding too many comments in the same file
 * - Avoiding too many functions in the same file
 * - Avoiding too many classes in the same file
 * - Avoiding too many variables in the same file
 * - Avoiding too many constants in the same file
 * - Avoiding too many types in the same file
 * - Avoiding too many interfaces in the same file
 * - Avoiding too many enums in the same file
 * - Avoiding too many generics in the same file
 * - Avoiding too many decorators in the same file
 * - Avoiding too many comments in the same file
 * 
 *
 * Other important thing is the leave a blank line between different sections of the same class for example,
 * or if your file has imports, exports, etc.
 * Ex:
 * 
 * Look how ard to read is this class without any spaces: 
 */

const path = require('path');
const fs = require('fs');
class DiskStorage {
  constructor(storageDirectory) {
    this.storagePath = path.join(__dirname, storageDirectory);
    this.setupStorageDirectory();
  }
  setupStorageDirectory() {
    if (!fs.existsSync(this.storagePath)) {
      this.createStorageDirectory();
    } else {
      console.log('Directory exists already.');
    }
  }
  createStorageDirectory() {
    fs.mkdir(this.storagePath, this.handleOperationCompletion);
  }
  insertFileWithData(fileName, data) {
    if (!fs.existsSync(this.storagePath)) {
      console.log("The storage directory hasn't been created yet.");
      return;
    }
    const filePath = path.join(this.storagePath, fileName);
    fs.writeFile(filePath, data, this.handleOperationCompletion);
  }
  handleOperationCompletion(error) {
    if (error) {
      this.handleFileSystemError(error);
    } else {
      console.log('Operation completed.');
    }
  }
  handleFileSystemError(error) {
    if (error) {
      console.log('Something went wrong - the operation did not complete.');
      console.log(error);
    }
  }
}
const logStorage = new DiskStorage('logs');
const userStorage = new DiskStorage('users');
setTimeout(function () {
  logStorage.insertFileWithData('2020-10-1.txt', 'A first demo log entry.');
  logStorage.insertFileWithData('2020-10-2.txt', 'A second demo log entry.');
  userStorage.insertFileWithData('max.txt', 'Maximilian Schwarzmüller');
  userStorage.insertFileWithData('maria.txt', 'Maria Jones');
}, 1500);

// here is the same class but with the spaces

const path = require('path');
const fs = require('fs');

class DiskStorage {
  constructor(storageDirectory) {
    this.storagePath = path.join(__dirname, storageDirectory);
    this.setupStorageDirectory();
  }

  // Code blocks related should be close to each other (example: class actions)
  setupStorageDirectory() {
    if (!fs.existsSync(this.storagePath)) {
      this.createStorageDirectory();
    } else {
      console.log('Directory exists already.');
    }
  }

  createStorageDirectory() {
    fs.mkdir(this.storagePath, this.handleOperationCompletion);
  }

  insertFileWithData(fileName, data) {
    if (!fs.existsSync(this.storagePath)) {
      console.log("The storage directory hasn't been created yet.");
      return;
    }
    const filePath = path.join(this.storagePath, fileName);
    fs.writeFile(filePath, data, this.handleOperationCompletion);
  }
  
  // In this case, all handlers are one after the other
  handleOperationCompletion(error) {
    if (error) {
      this.handleFileSystemError(error);
    } else {
      console.log('Operation completed.');
    }
  }

  handleFileSystemError(error) {
    if (error) {
      console.log('Something went wrong - the operation did not complete.');
      console.log(error);
    }
  }
}

/**
 * Similar concepts should not be separated
 */
const logStorage = new DiskStorage('logs');
const userStorage = new DiskStorage('users');

setTimeout(function () {
  logStorage.insertFileWithData('2020-10-1.txt', 'A first demo log entry.');
  logStorage.insertFileWithData('2020-10-2.txt', 'A second demo log entry.');
  userStorage.insertFileWithData('max.txt', 'Maximilian Schwarzmüller');
  userStorage.insertFileWithData('maria.txt', 'Maria Jones');
}, 1500);


/**
 * In this example, we can imagine that we have a one file with multiple functions
 * this example is ideal for javascript, in lenguages like python, you can't call a function before it's definition
 */

// bad example, this still working, but is less redable
function last() {
  console.log('last');
}

function next() {
  console.log('next');
  last();
}

function start() {
  console.log('start');
  next();
}

start();


// good example 
function start() {
  console.log('start');
  next();
}

function next() {
  console.log('next');
  last();
}

function last() {
  console.log('last');
}

start();
