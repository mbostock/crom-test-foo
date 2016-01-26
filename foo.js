var crom = require("crom"),
    format = crom.require("d3-format");

console.log((format.format(",d")(1234) === "1,234" ? "✓" : "✗") + " d3-format");
console.log((format === crom.require("d3-format@0.5") ? "✓" : "✗") + " d3-format@0.5");
console.log((format === crom.require("d3/d3-format") ? "✓" : "✗") + " d3/d3-format");
console.log((format === crom.require("https://github.com/d3/d3-format") ? "✓" : "✗") + " https://github.com/d3/d3-format");
