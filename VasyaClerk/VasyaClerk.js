function tickets(peopleInLine) {
  const arrayBills = [];
  let canSell = "YES";
  peopleInLine.forEach(element => {
    if (element === 100) {
      if (arrayBills.includes(50) && arrayBills.includes(25)) {
        arrayBills.push(100);
        arrayBills.splice(arrayBills.indexOf(50), 1);
        arrayBills.splice(arrayBills.indexOf(25), 1);
      } else if (check3xOrMoreBill25(arrayBills)) {
        arrayBills.push(100);
        for (let index = 0; index < 3; index++) {
          arrayBills.splice(arrayBills.indexOf(25), 1);
        }
      } else {
        canSell = "NO";
        return;
      }
    } else if (element === 50) {
      if (arrayBills.includes(25)) {
        arrayBills.push(50);
        arrayBills.splice(arrayBills.indexOf(25), 1);
      } else {
        canSell = "NO";
        return;
      }
    } else arrayBills.push(25);
  });
  return canSell;

  function check3xOrMoreBill25(array) {
    let n25 = 0;
    array.forEach(element => {
      if (element === 25) n25++;
    });
    return n25 >= 3;
  }
}

console.log(tickets([25, 25, 50, 50]), "=", "YES");
console.log(tickets([25, 100]), "=", "NO");


/**
 * Another solutions:
 *
 * function Clerk(name) {
  this.name = name;

  this.money = {
    25 : 0,
    50 : 0,
    100: 0
  };

  this.sell = function(element, index, array) {
    this.money[element]++;

    switch (element) {
      case 25:
        return true;
      case 50:
        this.money[25]--;
        break;
      case 100:
        this.money[50] ? this.money[50]-- : this.money[25] -= 2;
        this.money[25]--;
        break;
    }
    return this.money[25] >= 0;
  };
}

function tickets(peopleInLine){
  var vasya = new Clerk("Vasya");
  return peopleInLine.every(vasya.sell.bind(vasya)) ? "YES" : "NO";
}
 *
 * function tickets(peopleInLine){
  let [c25,c50,c100] = [0,0,0];
  for(let v of peopleInLine) {
    if(v===25) c25++;
    if(v===50) {c50++; c25--;}
    if(v===100) {c25--; c50>0?c50--:c25-=2;}
    if(c25<0||c50<0) return 'NO'
  }
  return 'YES'
}
 */