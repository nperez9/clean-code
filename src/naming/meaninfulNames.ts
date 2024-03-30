// You can easy to understand the code by reading the variable names
class User {
  save() {}
}

// The name also implies the data type in this case (even with typescript, is cool to have a hint)
const isLoggedIn = true;

const user = new User();
// You dont really know what this fucntion exactly does, but you know that it saves
// the user in some place ex: database, session, etc
user.save();

if (isLoggedIn) {
  console.info('User is logged in');
}
