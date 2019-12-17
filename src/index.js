const messages = [
  "This is where it all begins...",
  "Commit committed",
  "Version control is awful",
  "COMMIT ALL THE FILES!",
  "The same thing we do every night, Pinky - try to take over the world!",
  "Lock S-foils in attack position",
  "This commit is a lie",
  "I'll explain when you're older!",
  "Here be Dragons",
  "Reinventing the wheel. Again.",
  "This is not the commit message you are looking for",
  "Batman! (this commit has no parents)",
  "What was I thinking at this moment?",
  "Yep, this is my first commit commit, not kidding",
  "Trust me, I'm an engineer",
  "I was only trying to exit vim"
];

const funnyCommit = () => {
  const index = Math.floor(Math.random() * messages.length);
  const message = messages[index];
  console.log(`\x1b[34m${message}\x1b[89m`);
}

module.exports = {
  funnyCommit
};