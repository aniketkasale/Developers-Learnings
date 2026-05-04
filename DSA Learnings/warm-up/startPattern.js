function printStar(count) {
  for (let i = 0; i < count; i++) {
    let str = "";
    for (let j = 0; j < count; j++) {
      str = str + "*";
    }
    console.log(str);
  }
}

printStar(4);

console.log("\n");

function printStar2(count) {
  for (let i = 0; i < count; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str = str + "*";
    }
    console.log(str);
  }
}

printStar2(4);

console.log("\n");

function printStar3(count) {
  for (let i = 0; i <= count; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str = str + j;
    }
    console.log(str);
  }
}

printStar3(4);

console.log("\n");

function printStar4(count) {
  for (let i = 0; i <= count; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str = str + i;
    }
    console.log(str);
  }
}

printStar4(4);

console.log("\n");

function printStar5(count) {
  for (let i = 0; i <= count; i++) {
    let str = "";
    for (let j = 1; j <= count - i; j++) {
      str = str + j;
    }
    console.log(str);
  }
}

printStar5(4);
console.log("\n");

function printStar6(count) {
  for (let i = 0; i < count; i++) {
    let str = "";
    for (let j = 0; j < count; j++) {
      if (j < count - (i + 1)) {
        str = str + " ";
      } else {
        str = str + "*";
      }
    }
    console.log(str);
  }
}

printStar6(4);

console.log("\n");

// '1'
// '10'
// '101'
// '1010'
function printStar7(count) {
  for (let i = 0; i < count; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      if (j % 2 == 0) {
        str += "1";
      } else str += "0";
    }
    console.log(str);
  }
}

printStar7(4);
console.log("\n");

// '1'
// '01'
// '010'
// '1010'
function printStar8(count) {
  let toggle =1
  for (let i = 0; i < count; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str+=toggle
      if(toggle==1){
        toggle =0
      }else toggle =1
    }
    console.log(str);
  }
}

printStar8(4);
