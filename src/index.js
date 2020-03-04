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
  "I drink and I know things. I code and I commit things.",
  "Lonliness and cheesburgers are a dangerous mix",
  "I don't know Rick... this commit looks fake to me",
  "NEEEEEEEEEEEEEEEEEEEEEEERRRRDDDDDD!!!",
  "Good job! Did you test that?",
  "Stupid sexy Flanders!",
  "I'm ugly and I'm proud",
  "Come on, this is not the place to commit a crime!",
  "You don't win friends with salad, you don't win friends with salad ...",
  "Why so sad? Everything is going to be alright, except that git reset --hard",
  "Hey, listen!",
  "WWWWWWWGGGGHHHRRRRW",
  "How many times does Marty say Doc in Back to the Future?",
];

const funnyCommit = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`\x1b[34m${message}\x1b[89m`);
}

module.exports = {
  funnyCommit
};