function Ingredients(recipe, available) {
    var fractions = [];
    
    const allAvailable = Object.keys(recipe).every(itemRecipe => {
      if (Object.keys(available).includes(itemRecipe)) {
        
        fractions.push(Math.floor(available[itemRecipe] / recipe[itemRecipe]));
        return true; 
      }
      return false; 
    });
 
    if (allAvailable) {
      return Math.min(...fractions); 
    } else {
      return "Cannot make the cake with these ingredients"; 
    }
  }
  
  
  console.log(Ingredients({ flour: 500, sugar: 200, eggs: 1, djath: 3 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }));