import { useState } from "react";

export const NewsletterSection = () => {
  const [emailValue, setemailValue] = useState("");

  const handleInputChange = (e) => {
    setemailValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setemailValue("");
  };
  console.log(emailValue)

  return (
    <div className="bg-gray-100 pt-20 font-sans leading-normal tracking-normal">
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">We're launching soon</h1>
            <p className="text-gray-600 mb-12">
              Enter your email to be the first to know when we launch something
              new.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex items-center">
                <input
                  id="email"
                  type="email"
                  className="bg-white mr-3 py-2 px-4 w-full rounded-md focus:outline"
                  placeholder="Enter your email"
                  onSubmit={handleFormSubmit}
                  onChange={handleInputChange}
                  value={emailValue}

                />
                <button
                  type="submit"
                  className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">What to expect</h2>
            <p className="text-gray-600 mb-12">
              We're preparing something for you.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4 mt-12">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="rounded-md bg-white shadow-md p-8">
                <div className="text-4xl font-bold text-red-500 mb-4">01</div>
                <h3 className="text-2xl font-bold mb-4">News</h3>
                <p className="text-gray-600 mb-4">
                  Stay tuned for the latest developments about us.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="rounded-md bg-white shadow-md p-8">
                <div className="text-4xl font-bold text-red-500 mb-4">02</div>
                <h3 className="text-2xl font-bold mb-4">Promos</h3>
                <p className="text-gray-600 mb-4">
                  Unlock incredible savings with our limited-time promos.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="rounded-md bg-white shadow-md p-8">
                <div className="text-4xl font-bold text-red-500 mb-4">03</div>
                <h3 className="text-2xl font-bold mb-4">Perks</h3>
                <p className="text-gray-600 mb-4">
                  Discover the little extras that make your stay extraordinary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};