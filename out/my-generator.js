System.registerModule("../dev/my-generator.js", [], function() {
  "use strict";
  var __moduleName = "../dev/my-generator.js";
  var FruitGenerator = $traceurRuntime.initGeneratorFunction(function $__0() {
    return $traceurRuntime.createGeneratorInstance(function($ctx) {
      while (true)
        switch ($ctx.state) {
          case 0:
            $ctx.state = 2;
            return "Apple";
          case 2:
            $ctx.maybeThrow();
            $ctx.state = 4;
            break;
          case 4:
            $ctx.state = 6;
            return "Orange";
          case 6:
            $ctx.maybeThrow();
            $ctx.state = 8;
            break;
          case 8:
            $ctx.state = 10;
            return "Grapes";
          case 10:
            $ctx.maybeThrow();
            $ctx.state = 12;
            break;
          case 12:
            $ctx.state = 14;
            return "Mango";
          case 14:
            $ctx.maybeThrow();
            $ctx.state = -2;
            break;
          default:
            return $ctx.end();
        }
    }, $__0, this);
  });
  var VegetableGenerator = $traceurRuntime.initGeneratorFunction(function $__1() {
    return $traceurRuntime.createGeneratorInstance(function($ctx) {
      while (true)
        switch ($ctx.state) {
          case 0:
            $ctx.state = 2;
            return "Potato";
          case 2:
            $ctx.maybeThrow();
            $ctx.state = 4;
            break;
          case 4:
            $ctx.state = 6;
            return "Carrot";
          case 6:
            $ctx.maybeThrow();
            $ctx.state = 8;
            break;
          case 8:
            $ctx.state = 10;
            return "tomato";
          case 10:
            $ctx.maybeThrow();
            $ctx.state = 12;
            break;
          case 12:
            $ctx.state = 14;
            return "beetroot";
          case 14:
            $ctx.maybeThrow();
            $ctx.state = -2;
            break;
          default:
            return $ctx.end();
        }
    }, $__1, this);
  });
  var FoodGenerator = $traceurRuntime.initGeneratorFunction(function $__2() {
    var $__3,
        $__4,
        $__5,
        $__6;
    return $traceurRuntime.createGeneratorInstance(function($ctx) {
      while (true)
        switch ($ctx.state) {
          case 0:
            $ctx.state = 2;
            return "rice";
          case 2:
            $ctx.maybeThrow();
            $ctx.state = 4;
            break;
          case 4:
            $__3 = $ctx.wrapYieldStar(FruitGenerator()[Symbol.iterator]());
            $ctx.sent = void 0;
            $ctx.action = 'next';
            $ctx.state = 16;
            break;
          case 16:
            $__4 = $__3[$ctx.action]($ctx.sentIgnoreThrow);
            $ctx.state = 13;
            break;
          case 13:
            $ctx.state = ($__4.done) ? 7 : 6;
            break;
          case 7:
            $ctx.sent = $__4.value;
            $ctx.state = 14;
            break;
          case 6:
            $ctx.state = 16;
            return $__4.value;
          case 14:
            $ctx.state = 18;
            return "Wheat";
          case 18:
            $ctx.maybeThrow();
            $ctx.state = 20;
            break;
          case 20:
            $__5 = $ctx.wrapYieldStar(VegetableGenerator()[Symbol.iterator]());
            $ctx.sent = void 0;
            $ctx.action = 'next';
            $ctx.state = 32;
            break;
          case 32:
            $__6 = $__5[$ctx.action]($ctx.sentIgnoreThrow);
            $ctx.state = 29;
            break;
          case 29:
            $ctx.state = ($__6.done) ? 23 : 22;
            break;
          case 23:
            $ctx.sent = $__6.value;
            $ctx.state = -2;
            break;
          case 22:
            $ctx.state = 32;
            return $__6.value;
          default:
            return $ctx.end();
        }
    }, $__2, this);
  });
  var aFoodGenerator = FoodGenerator(),
      nextFood = aFoodGenerator.next(),
      messageElement = document.getElementById("message");
  console.log(JSON.stringify(nextFood));
  while (!nextFood.done) {
    var liElement = document.createElement('li');
    liElement.innerText = nextFood.value;
    messageElement.appendChild(liElement);
    nextFood = aFoodGenerator.next();
  }
  return {};
});
System.get("../dev/my-generator.js" + '');
