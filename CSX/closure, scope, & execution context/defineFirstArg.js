const defineFirstArg = (func, arg) => {
    return function(...passed) {
      return func(arg, ...passed);
    }
  }
  
  const subtract = function(big, small) { return big - small; };
  const subFrom20 = defineFirstArg(subtract, 20);
  console.log(subFrom20(5)); // should log: 15