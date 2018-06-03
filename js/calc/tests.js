const index = require('./index');
var failures = 0

function assertEqual(testName, a, b) {
    if (a!=b && (a-b)/b > 0.0001){
        console.log("Test " + testName + " failed. Expected equal, got " + a + " and " + b);
        failures += 1
    }
}

assertEqual("Integer addition", index.operate("+", 3, 4), 7)
assertEqual("Float addition", index.operate("+", 1.1, 1.2), 2.3)
assertEqual("Integer subtraction", index.operate("-", 5, 3), 2)
assertEqual("Float subtraction", index.operate("-", 4.5, 0.3), 4.2)
assertEqual("Integer division", index.operate("/", 20, 4), 5)
assertEqual("Float division", index.operate("/", 5, 2), 2.5)
assertEqual("Integer multiplication", index.operate("*", 2, 4), 8)
assertEqual("Float multiplication", index.operate("*", 0.1, 0.2), 0.02)

if (failures != 0){
    console.log(failures + " test(s) failed!");
} else {
    console.log("All tests passed");
}
