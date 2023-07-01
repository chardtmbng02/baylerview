import Room1 from "../../assets/room-images/room-1.png";

export const SecondRoomSection = () => {

  const rooms = [
    {
      _id: "1",
      image_url: "room-images/room-1.png",
      name: "Standard Room",
      description: "Basic Room and Lowest Price.",
      amenities :"Single Bed, Single Comfort Room, TV • Electric Fan",
      capacity: "1",
      stars:"4",
      rate:"1800",
    },
    {
      _id: "2",
      image_url: "room-images/room-2.png",
      name: "Double Room",
      description: "Upgraded Basic Room and Lowest Price.",
      amenities :"Double Bed, Single Comfort Room, TV • Electric Fan",
      capacity: "2",
      stars:"3",
      rate:"2300",
    },

    {
      _id: "3",
      image_url: "room-images/room-2.png",
      name: "Queen Room",
      description: "Upgraded Basic Room and Lowest Price.",
      amenities :"Queen Bed, Single Comfort Room, TV • Air Conditioned",
      capacity: "4",
      stars:"5",
      rate:"3500",
    },


  ];
  // Loop through the room data and generate the cards dynamically
  const roomCards = rooms.map((room) => (
    <div className="items-center mx-auto flex px-5 py-3" key={room._id}>
      <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={Room1} alt="standard-room" />
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2">{room.name}</div>
          {/* Pull records from database to show stars */}
          <div className="rate flex">
            {Array.from({ length: room.stars }).map((_, index) => (
              <i className="fa fa-star text-yellow-600" key={index}></i>
            ))}
          </div>
          <p className="text-gray-700 text-base pt-3"><span className="font-semibold">Description : </span>{room.description}</p>
          <p className="text-gray-700 text-base"><span className="font-semibold">Amenities : </span>{`${room.amenities}`}</p>
          <p className="text-gray-700 text-base"><span className="font-semibold">Capacity : </span>{`${room.capacity}`}</p>
          <p className="text-gray-700 text-base"><span className="font-semibold">Rate : </span>{`P${room.rate}.00`}</p>
        </div>
        <div className="px-6 pt-2 pb-2 mb-2">
          <button
            type="button"
            className="py-3 px-8 text-sm bg-red-600 hover:bg-red-500 rounded text-white"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <section id="testimonials" className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto pt-10 px-6">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 text-3xl sm:text-5xl">
            Deluxe Bay-Ler's Rooms
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-md leading-7 text-gray-500 font-light">
            Elevate Your Stay: Experience Unmatched Comfort in Our Deluxe Room
            </p>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:-mx-3">{roomCards}</div>
        </div>
      </div>
    </section>
  );
};
