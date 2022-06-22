function hobbyTracker(hobbies) {  
    let cache = {};
    
    return function(hobby, num) {
      if (!hobby) {
        for (let key in cache) {
            cache[key] = 0;
        }
        return 'tracker has been reset!';
      }
        
      if (!cache[hobby] && cache[hobby] !== 0) {
        for (let i in hobbies) {
            cache[hobbies[i]] = 0;
        }
      }

      if (cache[hobby] || cache[hobby] === 0) cache[hobby] += num;
      return cache;
    }
  }
  
  const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
  updateHobbies('yoga', 2);
  updateHobbies('baking', 4);
  updateHobbies('yoga', 1);
  console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
  console.log(updateHobbies()); // --> 'tracker has been reset!'
  console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}