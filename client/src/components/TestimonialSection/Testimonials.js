import React from 'react'

export const Testimonials = () => {
  return (
    <section id="testimonials">
    <div className="max-w-screen-xl mx-auto my-12 px-6">
        <div className="flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink text-3xl poppins mx-4 text-gray-500">
                Testimonials
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <h5 className="poppins text-gray-500 pb-4 text-center">
            What our Customer's Feel About Us
        </h5>

        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row md:-mx-3">
                <div className="flex-1 px-3 bg-white">
                    <div className="p-12 rounded-lg border border-solid border-gray-200 mb-8 shadow-xl">
                        <p className="text-xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing

                        </p>
                        <p className="mt-6">Eu lobortis elementum nibh tellus molestie nunc non blandit massa.
                            Sit amet consectetur adipiscing elit duis.
                        </p>
                        <div className="flex items-center mt-8"><img className="w-12 h-12 mr-4 rounded-full" src="https://placeimg.com/150/150/people" alt="Jane Doe" />
                            <div>
                                <p>Jane Doe
                                </p>
                                <p className="text-sm text-gray-600">Director of Research and Data
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 px-3">
                    <div className="p-12 rounded-lg border border-solid border-gray-200 mb-8 shadow-xl">
                        <p className="text-xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing

                        </p>
                        <p className="mt-6">Eu lobortis elementum nibh tellus molestie nunc non blandit massa.
                            Sit amet consectetur adipiscing elit duis.
                        </p>
                        <div className="flex items-center mt-8"><img className="w-12 h-12 mr-4 rounded-full" src="https://placeimg.com/150/150/people" alt="John Doe" />
                            <div>
                                <p>John Doe
                                </p>
                                <p className="text-sm text-gray-600">Director of Research and Data
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 px-3">
                    <div className="p-12 rounded-lg border border-solid border-gray-200 mb-8 shadow-xl">
                        <p className="text-xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing

                        </p>
                        <p className="mt-6">Eu lobortis elementum nibh tellus molestie nunc non blandit massa.
                            Sit amet consectetur adipiscing elit duis.
                        </p>
                        <div className="flex items-center mt-8"><img className="w-12 h-12 mr-4 rounded-full" src="https://placeimg.com/150/150/people" alt="Jane Smith" />
                            <div>
                                <p>Jane Smith
                                </p>
                                <p className="text-sm text-gray-600">Director of Research and Data
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>

  )
}
