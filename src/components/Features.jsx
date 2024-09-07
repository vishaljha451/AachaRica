import React from "react";
import { DollarSign, Zap, Moon, Filter } from "lucide-react";

const Features = () => {
  return (
    <div className="px-4 py-5 mx-auto my-10 max-w-7xl sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          AachaRica helps you find
          <span className="font-serif text-yellow"> Delectable </span>
          Pickle
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-600">
          Experience the vibrant essence of tradition in every jar of our
          handcrafted pickles. Sealed with care, each bite delivers a bold,
          authentic flavor that elevates your meals, turning ordinary dishes
          into extraordinary culinary adventures. Taste the love in every jar.
        </p>
      </div>
      <div className="grid grid-cols-1 p-4 mt-12 mb-6 text-center shadow-xl gap-y-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 rounded-2xl bg-gray">
        <div>
          <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full ">
            <DollarSign className="text-gray-700 h-9 w-9" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">
            Secured Payments
          </h3>
          <p className="mt-4 text-sm text-gray-600 te">
            Shop with confidence – enjoy secure payments for a worry-free online
            experience.
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full ">
            <Zap className="text-gray-700 h-9 w-9" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">
            Fast & Easy to Search
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            Effortless indulgence: Fast and easy food searching at your
            fingertips.
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full ">
            <Moon className="text-gray-700 h-9 w-9" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">
            Night Delivery
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            Craving something tangy at midnight? Get pickles delivered to your
            door, even after dark. Satisfy those late-night cravings with a jar
            of flavor, anytime!
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full ">
            <Filter className="text-gray-700 h-9 w-9" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">
            Filter your Aachar
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            Filter your perfect pickle! Choose your flavor, spice level, and
            enjoy your ideal jar of tangy goodness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
