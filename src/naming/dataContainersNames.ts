/** Variables, constans and properties should be named in a way that describes the value
 * the name of a variable/constant/property should be representative of the value it holds
 *
 * here some Examles:
 */

/** for string or numbers should be nouns related to the value */
const age = 25;
const total = 100;
const title = 'The last of us';
const description = 'A game about survival in a post-apocalyptic world';

// for objects can follow the same convention
const game = {
  title: 'The last of us',
  description: 'A game about survival in a post-apocalyptic world',
  rating: 9.5,
};

// for arrays, the names should be plural,
const games = ['The last of us', 'God of war', 'Uncharted'];
const items = ['Halo 5', 'Mario 3D Wold', 'Gato-Roboto'];

// for boolean values, the name should be a question that can be answered with true or false (or yes or no)
const isInStock = true;
const loggedIn = false;
const isDark = true;

/**
 * You can define more details without introducing redundancy
 * but that depends the case, more details is not always better
 *
 * the examples are relative, and you should always check the code context
 */

// bad example
const gameCommercialTitle = 'The last of us';
const isGameInStock = true;
const personAge = 25;

// good example
const isDarkMode = 'The last of us';
const cartItems = 'A game about survival in a post-apocalyptic world';
