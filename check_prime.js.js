//Print Prime Numbers from 1 to given limit
for (let i = 1; i <= 25; i++) {
  let factors = 0;
  //for (let j = 1; j <= i; j++) {
    if (i % j == 0) {
      factors++;
    }
  }
  if (i == 1) { console.log(i, "is a prime number"); }
  else if (factors == 2) {
    console.log(i, "is a prime number");
  }
  else { console.log(i, "is not a prime number") }
}
