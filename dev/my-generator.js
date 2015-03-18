var FruitGenerator = function*(){
    yield "Apple";
    yield "Orange";
    yield "Grapes";
    yield "Mango";
};

var VegetableGenerator = function*(){
    yield "Potato";
    yield "Carrot";
    yield "tomato";
    yield "beetroot";
};

var FoodGenerator = function*(){
    yield "rice";
    yield* FruitGenerator();
    yield "Wheat";
    yield* VegetableGenerator();
}

var aFoodGenerator = FoodGenerator(),
    nextFood = aFoodGenerator.next(),
    messageElement = document.getElementById("message");

//next object  has value and done property
console.log(JSON.stringify(nextFood));

while(!nextFood.done){
    var liElement = document.createElement('li');
    liElement.innerText = nextFood.value;
    messageElement.appendChild(liElement);
    nextFood = aFoodGenerator.next();
}

