const os = require("os");
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.homedir());

const path = require("path");
const string = __filename;
console.log(path.sep);
console.log(path.extname(string));
console.log(path.parse(string));