import React from "react";

const highlights = [
  "Wander through the enchanting medieval streets of Ghent's Old Town, where centuries-old guild houses line the scenic canals and historic bridges create postcard-perfect views",
  "Marvel at the breathtaking Adoration of the Mystic Lamb masterpiece inside St. Bavo's Cathedral, one of the most celebrated works of Flemish Renaissance art",
  "Step back in time at the imposing Gravensteen Castle, a remarkably preserved medieval fortress offering panoramic views over Ghent's historic skyline",
  "Cruise through Ghent's tranquil canals on a scenic boat tour, revealing hidden courtyards, Gothic architecture, and charming waterfront houses from a unique perspective",
  "Explore the atmospheric Patershol district, a labyrinth of cobbled streets filled with artisan boutiques, local restaurants, and traditional Belgian charm",
  "Savor Belgium's culinary delights as you indulge in authentic Belgian chocolates, waffles, and local craft beers at Ghent's renowned cafés and chocolate shops",
  "Discover Ghent's vibrant cultural scene while visiting inspiring museums like the Museum of Fine Arts (MSK) and the SMAK Museum of Contemporary Art",
  "Experience the magic of Ghent after sunset as the city's iconic landmarks glow beautifully under the award-winning Ghent Night Lighting Plan, transforming the canals and historic buildings into a romantic evening landscape",
];

export const TourHighlights = () => {
  return (
    <div className="space-y-10 py-4">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground font-inria">
        Trip Highlights
      </h2>
      
      <ul className="space-y-6">
        {highlights.map((highlight, idx) => (
          <li key={idx} className="flex gap-4 items-start text-paragraph text-base md:text-lg leading-relaxed opacity-80 font-roboto font-light">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  );
};
