import React from "react";
import Room1 from "../../assets/room-images/room-1.png";
import Room2 from "../../assets/room-images/room-2.png";
import Room3 from "../../assets/room-images/room-3.png";

export const RoomSection = () => {
  return (
    <section id="testimonials" className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto pt-10 px-6">
  
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 text-3xl sm:text-5xl">
            Bay-Ler's Lowest Rates
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-md leading-7 text-gray-500 font-light">
            Indulge in luxury, unwind in comfort - Your perfect sanctuary awaits.
            </p>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:-mx-3">
            <div className="mx-auto flex-1 px-3 py-3">
              <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={Room1} alt="standard-room" />
                <div className="px-6 py-4">
                  <div className="font-bold text-2xl mb-2">Standard Room</div>
                  <div className="rate flex">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <p className="text-gray-700 text-base">
                    Description : This is the most basic type of room available
                    in a hotel.
                  </p>
                  <p className="text-gray-700 text-base">
                    Ammenities : Single Bed, Single Comfort Room, TV • Electric
                    Fan •
                  </p>
                  <p className="text-gray-700 text-base">
                    Capacity : 1 Person Only
                  </p>
                  <p className="text-gray-700 text-base">
                    Rate: P1,500.00 Per Night
                  </p>
                </div>
                <div className="px-6 pt-2 pb-2 mb-2">
                  <button
                    type="button"
                    className=" py-3 px-8 text-sm bg-red-600 hover:bg-red-500 rounded text-white "
                  >
                   Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="mx-auto flex-1 px-3 py-3">
              <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={Room2} alt="suite-room" />
                <div className="px-6 py-4">
                  <div className="font-bold text-2xl mb-2">Suite Room</div>
                  <div className="rate flex">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <p className="text-gray-700 text-base">
                    Description : This is the most basic type of room available
                    in a hotel.
                  </p>
                  <p className="text-gray-700 text-base">
                    Ammenities : Single Bed, Single Comfort Room, TV • Electric
                    Fan •
                  </p>
                  <p className="text-gray-700 text-base">
                    Capacity : up to 2 Pax
                  </p>
                  <p className="text-gray-700 text-base">
                    Rate: P2,500.00 Per Night
                  </p>
                </div>
                <div className="px-6 pt-2 pb-2 mb-2">
                  <button
                    type="button"
                    className=" py-3 px-8 text-sm bg-red-600 hover:bg-red-500 rounded text-white "
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="mx-auto flex-1 px-3 py-3">
              <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={Room3} alt="deluxe-room" />
                <div className="px-6 py-4">
                  <div className="font-bold text-2xl mb-2">Deluxe Room</div>
                  <div className="rate flex">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <p className="text-gray-700 text-base">
                    Description : This is the most basic type of room available
                    in a hotel.
                  </p>
                  <p className="text-gray-700 text-base">
                    Ammenities : Single Bed, Single Comfort Room, TV • Electric
                    Fan •
                  </p>
                  <p className="text-gray-700 text-base">
                    Capacity : up to 4 Pax
                  </p>
                  <p className="text-gray-700 text-base">
                    Rate: P6,500.00 Per Night
                  </p>
                </div>
                <div className="px-6 pt-2 pb-2 mb-2">
                  <button
                    type="button"
                    className=" py-3 px-8 text-sm bg-red-600 hover:bg-red-500 rounded text-white "
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
