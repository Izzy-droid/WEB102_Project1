import React from "react";
import './App.css';

//https://www.indoorplantsforbeginners.com/20-indoor-plants-that-are-safe-for-your-cat-to-eat/
const App = () => {
  const plant1= "Basil";
  const plant2= "Rosemary";
  const plant3= "Bamboo";
  const plant4= "Valerian";
  const plant5="Parsley";
  const plant6="Silver Vine";
  const plant7= "Catnip";
  const plant8="Mint";
  const plant9="Thyme";
  const plant10="Lemongrass";
  return (
    <div className="App">
    <h1 className="title">Kitty Gourmets </h1>
    <h2>An array of plants in your garden that your cat can safely eat</h2>

     <div className="card-arrange">
       <div className="card">
        <img src="basil.png" className="plant-img" alt="photo of a basil plant"/>
         <h2>{plant1}</h2>
         <p>A common food ingredient in seasoning</p>
         <a href="https://vetexplainspets.com/do-cats-like-basil/" >
         <button className="plant-button">
          View Info.
          </button></a>
      </div>

      <div className="card">
      <img src="Rosemary.png" className="plant-img" alt="photo of a rosemary plant"/>
         <h2>{plant2}</h2>
         <p>Fun fact: They can keep fleas away</p>
         <a href="https://www.thesprucepets.com/is-rosemary-safe-for-cats-6828205">
         <button className="plant-button">View Info.</button>
         </a>
      </div>

      <div className="card">
      <img src="Bamboo.png" className="plant-img" alt="photo of a bamboo plant"/>
         <h2>*{plant3}</h2>
         <p>*non-toxic except lucky and heavenly bamboo</p>
         <a href="https://www.hepper.com/can-cats-eat-bamboo/">
         <button className="plant-button">View Info.</button>
         </a>
      </div>

      <div className="card">
      <img src="Valerian.png" className="plant-img" alt="photo of a valerian plant"/>
         <h2>{plant4}</h2>
         <p>A common herb that is used to relax nerves</p>
         <a href="https://www.lovecats.org/cat-food/is-it-safe-for-cats-to-eat-valerian-root/#How_Much_Is_Valerian_Safe_For_Cats">
         <button className="plant-button">View Info.</button>
         </a>
      </div>
      <div className="card">
      <img src="Parsley.png" className="plant-img" alt="photo of a valerian plant"/>
         <h2>{plant5}</h2>
         <p>A common seasoning on food</p>
         <a href="https://www.catster.com/nutrition/can-cats-eat-parsley/">
         <button className="plant-button">View Info.</button>
         </a>
      </div>
      <div className="card">
      <img src="Silver Vine.png" className="plant-img" alt="photo of a Silver Vine plant"/>
         <h2>{plant6}</h2>
         <p>A herb that creates a similar effect to catnip</p>
         <a href="https://www.greatpetcare.com/wellness/silver-vine-for-cats/">
         <button className="plant-button">View Info.</button>
         </a>
      </div>
      <div className="card">
      <img src="Catnip.png" className="plant-img" alt="photo of a Catnip plant"/>
         <h2>{plant7}</h2>
         <p>The most notable herb for cats</p>
         <a href="https://cats.com/can-cats-eat-catnip">
         <button className="plant-button">View Info.</button>
         </a>
      </div>
      <div className="card">
      <img src="Mint.png" className="plant-img" alt="photo of a Mint plant"/>
         <h2>{plant8}</h2>
         <p>A common ingredient in food and other items</p>
         <a href="https://www.catster.com/nutrition/can-cats-eat-mint/">
         <button className="plant-button">View Info.</button>
         </a>
      </div>
      <div className="card">
      <img src="Thyme.png" className="plant-img" alt="photo of a Thyme plant"/>
         <h2>{plant9}</h2>
         <p>Used for seasoning and medicinal purposes</p>
         <a href="https://wishbonepet.com/can-cats-eat-thyme/">
         <button className="plant-button">View Info.</button>
         </a>
      </div>
      <div className="card">
      <img src="Lemongrass.png" className="plant-img" alt="photo of a Lemongrass plant"/>
         <h2>{plant10}</h2>
         <p>Fun Fact: It can be used as a mosquito repellent</p>
         <a href="https://vetexplainspets.com/is-lemongrass-toxic-to-cats/">
         <button className="plant-button">View Info.</button>
         </a>
      </div>
    </div>

    </div>
   
  );
}

export default App