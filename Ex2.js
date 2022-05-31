let array = Array.from({length: 5}, () => Math.floor(Math.random()*10));
  document.write(array);

let array1 = [34,95,50,13, ...array]
    document.write("<br><br>" + array1);