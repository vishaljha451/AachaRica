import React from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <section className="px-4 py-10 mx-auto max-w-7xl ">
      <div>
        <div className="max-w-3xl mx-auto lg:text-center">
          <h2 className="text-3xl font-bold te:xt-black lg:leading-tight sm:text-4xl lg:text-5xl">
            Frequently Asked{" "}
            <span className="font-serif text-yellow">Questions</span>
          </h2>
        </div>
        <div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto mt-8 md:mt-16 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-black">
              What types of pickles do you offer?
            </h2>
            <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
              We offer a variety of pickles, including traditional mango, lemon,
              mixed vegetable, and specialty flavors. Each pickle is crafted
              using high-quality ingredients and time-tested recipes to ensure
              the best taste and freshness.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-black">
              Are your pickles handmade?
            </h2>
            <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
              Yes, all our pickles are handmade with care. We use traditional
              methods combined with artisanal techniques to create pickles that
              are full of flavor and authenticity.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-black">
              How can I place an order?
            </h2>
            <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
              You can place an order directly on our website. Simply browse our
              selection, add your desired pickles to the cart, and proceed to
              checkout. We offer secure payment options and convenient delivery
              services.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-black">
              Do you offer wholesale or bulk purchasing options?{" "}
            </h2>
            <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
              Yes, we offer wholesale and bulk purchasing options for retailers
              and businesses. Please contact us directly for more information
              and to discuss your requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
