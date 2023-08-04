function orderSmoothie() {
    const fruit = document.getElementById('fruit').value;
    const liquid = document.getElementById('liquid').value;
    const sweetener = document.querySelector('input[name="sweetener"]:checked').value;
    const addOns = [];
    const addOnCheckboxes = document.querySelectorAll('input[name="add-on"]:checked');
    addOnCheckboxes.forEach(checkbox => addOns.push(checkbox.value));

    const ingredientPrices = {
        banana: 1.5,
        strawberry: 2,
        apple: 2.5,
        lemon: 2,
        milk: 1,
        tea: 1.5,
        coconutWater: 2,
        honey: 0.5,
        agave: 0.6,
        proteinPowder: 1.5,
        chiaSeeds: 1
      };

      let totalCost = 0;
       totalCost += ingredientPrices[fruit];
       totalCost += ingredientPrices[liquid];
       totalCost += ingredientPrices[sweetener];
      addOns.forEach(addOn => {
       totalCost += ingredientPrices[addOn];
      });

    const smoothie = new Smoothie(fruit, liquid, sweetener, addOns, totalCost);
    displaySmoothie(smoothie);
      
  }
  
  class Smoothie {
    constructor(fruit, liquid, sweetener, addOns, totalCost) {
      this.fruit = fruit;
      this.liquid = liquid;
      this.sweetener = sweetener;
      this.addOns = addOns;
      this.totalCost = totalCost;
    }
  }

  const ingredientImages = {
    banana: 'https://kristineskitchenblog.com/wp-content/uploads/2021/04/banana-smoothie-1200-square-519.jpg',
    strawberry: 'https://www.acouplecooks.com/wp-content/uploads/2020/04/Strawberry-Smoothie-003.jpg',
    apple: 'https://detoxinista.com/wp-content/uploads/2020/10/apple-smothie.jpg',
    lemon: 'https://www.worldofvegan.com/wp-content/uploads/2023/02/Lemon-smoothie-feature-image.jpg',
  };

  
  function displaySmoothie(smoothie) {
    const smoothieDescription = document.getElementById('smoothieDescription');
    const smoothieImage = ingredientImages[smoothie.fruit];
    smoothieDescription.innerHTML = `
      <h2>Smoothie Description:</h2>
      <div class="smoothie-image" style="background-image: url(${smoothieImage})"></div>
      <p>Fruit: ${smoothie.fruit}</p>
      <p>Liquid: ${smoothie.liquid}</p>
      <p>Sweetener: ${smoothie.sweetener}</p>
      <p>Add-ons: ${smoothie.addOns.join(', ')}</p>
      <p>Total Cost: $${smoothie.totalCost.toFixed(2)}</p>
    `;
    
}