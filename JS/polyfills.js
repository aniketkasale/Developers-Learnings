

// [].filter((item,index,arr)=>{})
Array.prototype.myFilter = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i, this)) {
        temp.push(this[i]);
      }
    }
  
    return temp;
  };
  
  Array.prototype.myMap = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
      temp.push(cb(this[i], i, this));
    }
  
    return temp;
  };
  
  Array.prototype.myReduce = function (cb, initialValue = 0) {
    let acc = initialValue;
    for (let i = 0; i < this.length; i++) {
      acc = cb(acc, this[i], i, this);
    }
    return acc;
  };
  const greaterThan2 = [1, 2, 3, 4].myFilter((item) => item > 2);
  
  console.log(greaterThan2);
  
  const newArray = [1, 2, 4].myMap((item) => item + 1);
  console.log(newArray);
  
  const sum = [1, 2, 4].myReduce((acc, currentVal) => acc + currentVal);
  console.log(sum);
  
  // 