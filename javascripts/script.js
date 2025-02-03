document.addEventListener("DOMContentLoaded", function () {

  // задание1

  let age = prompt("А лет тебе сколько?")
  if (age < 65)
    alert("На пенсию не надо!");
  else 
    alert("Песок подбери и в пенсионный фонд");

  // задание2

  let num1 = prompt("Цыферки сюда тап тап");
  let num2 = prompt("И еще раз цыферки сюда тап тап");
  if(num1 > num2) { 
    alert("А первое то больше");
  }
  else if( num2 > num1) {
    alert("Не ну второе больше");
  }
  else{
    alert("Они равны ты чо совсем?")
  }
 
  // задание3
  let num = prompt("Цыферки сюда тап тап");
  if (num % 2 === 0) {
    alert("А оно чётное")
  }
  else{
    alert("Нечётное оно короче")
  }

});

