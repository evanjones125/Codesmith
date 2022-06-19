const findWaldo = (obj) => {
    for (const i in obj) {
      if (Object.keys(obj).includes('Waldo')) {return obj.Waldo}
      else {return 'Where\'s Waldo?'};
    }
  }
  
  const DC = {'Bruce': 'Wayne', 'Harley': 'Quinn'}
  const supernatural = {'Sam': 'Winchester', 'Dean': 'Winchester', 'Waldo': 'unknown'}
  console.log(findWaldo(DC)) // should log: 'Where's Waldo?'
  console.log(findWaldo(supernatural)) // should log: 'unknown'