//check palindrom
let str = "racecar";
//let rev_str = "";
for (let i = str.length - 1; i >= 0; i--) {
  rev_str += str[i];
}
if (str == rev_str) {
  console.log(str, "is a palindrom");
} else { console.log(str, "not a palindrom"); }