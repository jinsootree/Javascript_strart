function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  const numbers = ["자존심은 어리석은 자의 것이다.", "후회를 최대한 이용하라.", "깊이 후회한다는 것은 새로운 삶은 산다는 것이다."];

  shuffle(numbers);


    document.write(numbers[0])
  

