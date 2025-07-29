/**
 * Horizontal Scrolling
 * 
 * Code should be readable without having to do horizontal scrolling idealy. 
 * Also, a good format imporve a lot the readbility
 * 
 * 
 * 1- Tabs:
 *    use tabs and identation, even if the software doesn't require it necesarily
 *
 * ex:  
 */

function badTabs(arg: number) {
  if (arg < 18) { 
  console.info("It's underage")
  } else {
  console.info("It's mayor")
  if(arg > 21) {
  console.info(" And also can drink!")
  }
  }
}
 
function goodWithTabs(arg: number): void {
  if (arg < 18) { 
    console.info("It's underage")
  } 
  else {
    console.info("It's mayor")

    if(arg > 21) {
      console.info(" And also can drink!")
    }
  }
}

/*
 * 2- Multiple lines:
 *   Use multiple and shortest line posibles to write code, improves redability and predictivlity of the code.
 *   Also, is usefull to rewrite the code to split one liners in multimple lines
 * 
 * ex:
*/

const badLiner = (arg: number): string => {
  return (arg > 18) ? (arg > 60) ? 'is elder' : 'is adult' : 'is a children';
}

const goodLiner = (arg: number): string => {
  let result = 'is a children';
  if (arg > 60) {
    result = 'is elder';
  }
  else if (arg > 18) {
    result = 'is Adult';
  }

  return result;
}

import fs from 'fs';

const createDirectoryOneLiner = () =>  {
  fs.mkdir( path.join(__dirname, 'temp', '2025-7', 'images'), (error) => !error ?console.info('saved!') : console.error('error'))
}


// rewirted, imporved version
const handleStorageOperation = (error) => {
  if (!error) {
    return console.info('saved');
  }
  console.error('error');
}

const createDirectoryMultipleLines = () => {
  const storagePath = path.join(__dirname, 'temp', '2025-7', 'images');
  fs.mkdir(storagePath, handleStorageOperation);
}


/**
 * 3- Avoid Unessesary long names
 * Naming functions and variables can be large, because usally we ad a lot in our code base,
 * but try to keep the most descriptive and shortest posibble
 * 
 * ex:
 */

export const AUTHENTICATION_API_URL_VERSION_ONE_FOR_GOOGLE_SERVICES_IN_STAGING = 'http://api.google/v1/auth';

// it may be a little bit less descriptive, but a lot more readable, and improves when we use it
export const STG_API_AUTH_GOOGLE_V1 = 'http://api.google/v1/auth';


fetch(AUTHENTICATION_API_URL_VERSION_ONE_FOR_GOOGLE_SERVICES_IN_STAGING, { body: { username: 'pepe'}});

fetch(STG_API_AUTH_GOOGLE_V1, { 
  body: {
    username: 'pepe'
  }
});

/**
 * Now that we know this things, usally the better is to configure a tool like prettier 
 * or setup the code editor to make this changes autamtically, that will help to keep 
 * the code structed in the same way in all the proyect without having to do it by yourself
 */