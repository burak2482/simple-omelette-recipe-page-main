import './globals.css';

export default function Home() {
  return (
<main className='flex flex-col justify-center items-center min-h-screen w-full md:w-9/12 mx-auto p-5'>
    <div className='relative w-full h-[25vh] md:h-[25vh] overflow-hidden'>
      <img
        src='image-omelette.jpeg' 
        className='object-cover w-full h-full rounded-2xl' 
        alt='omelette' 
        layout='fill'
      />
    </div>

      <div class='p-5'>
      <h1 class='font-customNormal text-3xl font-mediumbold'>Simple Omelette Recipe</h1>
      <h2 class='text-lg font-light mt-2 mb-4'>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</h2>
      <div class='flex flex-col justify-center items-center bg-purple-100 py-5 md:flex-col md:items-start md:px-10'>
        <h1 class='font-customNormal text-customPurple font-bold mb-2'>Preparation time</h1>
        <ul class='list-disc'>
          <li class='mb-1'><span class='font-customNormal font-bold'>Total:</span> Approximately 10 minutes</li>
          <li class='mb-1'><span class='font-customNormal font-bold'>Preparation:</span> 5 minutes</li>
          <li class='mb-1'><span class='font-customNormal font-bold'>Cooking:</span> 5 minutes</li>
        </ul>
      </div>
      <div class='flex flex-col justify-center p-3'>
      <h1 class='font-customNormal text-customPurple font-bold text-xl mb-2 mt-1'>Ingredients</h1>
      <ul class='list-disc'>
       <li class='mb-1'>2-3 large eggs</li>
       <li class='mb-1'>Salt, to taste</li>
       <li class='mb-1'>Pepper, to taste</li>
       <li class='mb-1'>1 tablespoon of butter or oil</li>
       <li class='mb-1'>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
      </ul>
      </div>
      <hr class='mt-5 mb-5'/>
      <section class='flex flex-col justify-center'>
       <h1 class='font-customNormal text-customPurple font-bold text-2xl mb-2'>Instructions</h1>
       <ol class='list-decimal '>
        <li><span class='font-customNormal font-bold'>Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
        <li class='mt-2'><span class='font-customNormal font-bold'>Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter or oil. </li>
        <li class='mt-2'><span class='font-customNormal font-bold'>Cook the omelette:</span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
        <li class='mt-2'><span class='font-customNormal font-bold'>Add fillings (optional):</span> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
        <li class='mt-2'><span class='font-customNormal font-bold'>Fold and serve:</span> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
        <li class='mt-2'><span class='font-customNormal font-bold'>Enjoy:</span> Serve hot, with additional salt and pepper if needed.</li>
       </ol>
      </section>
      <hr class='mt-5 mb-5'/>
      <h1 class='font-customNormal text-customPurple font-bold text-2xl mb-2'>Nutrition</h1>
      <h2 class='text-lg font-light'>The table below shows nutritional values per serving without the additional fillings.</h2>
      <div class='flex justify-between mb-2 px-10 mt-3'>
        <h1>Calories</h1>
        <h2 class='font-customNormal text-customPurple font-bold'>277kcal</h2>
      </div>
      <hr/>
      <div class='flex justify-between mb-2 px-10'>
        <h1>Carbs</h1>
        <h2 class='font-customNormal text-customPurple font-bold'>0g</h2>
      </div>
      <hr/>
      <div class='flex justify-between mb-2 px-10'>
        <h1>Protein</h1>
        <h2 class='font-customNormal text-customPurple font-bold'>20g</h2>
      </div>
      <hr/>
      <div class='flex justify-between mb-2 px-10'>
        <h1>Fat</h1>
        <h2 class='font-customNormal text-customPurple font-bold'>22g</h2>
      </div>
    </div>
    </main>

  );
}
