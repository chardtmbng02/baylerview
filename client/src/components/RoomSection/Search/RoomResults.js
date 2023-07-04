import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const RoomResults = () => {
  const [rooms, setRooms] = useState([]);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [persons, setPersons] = useState('');

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get(
          'https://baylerview-api.onrender.com/api/rooms'
        );
        const data = await response.data;
        const roomsArray = Object.values(data);

        setRooms(roomsArray[1]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchRooms();
  }, []);

  const handleCheckAvailability = async () => {
    try {
      const response = await axios.post(
        'https://baylerview-api.onrender.com/api/rooms/available',
        { checkIn, checkOut, persons }
      );
      const data = await response.data;
      setRooms(data.data);
      localStorage.setItem("checkin", checkIn);
      localStorage.setItem("checkout", checkOut);
      localStorage.setItem("capacity", persons);
  
    } catch (error) {
      console.error('Error checking availability:', error);
    }
  };

  const roomCards = rooms.map((room) => (
    <div className="container mx-auto py-2" key={room._id}>
      <div className="flex flex-col md:flex-row md:-mx-3">
        <div className="flex-1 bg-white">
          <div className="p-10 rounded-lg border border-solid border-gray-200 shadow-xl">
            <p>{room.roomNumber}</p>
            <p>{room.name}</p>
            <p>{room.description}</p>
            <p>{room.amenities}</p>
            <p>{room.capacity}</p>
            <p>{room.stars}</p>
            <p>{room.rate}</p>
            <p>{room.image_url}</p>
            <p>{room.room_type}</p>
            <Link to="/check-reservation/reserve">
              <button>Reserve</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <section className="bg-yellow-100">
        <div className="mx-10 flex flex-col items-center md:flex-row md:justify-center bg-yellow-100">
          <div className="mb-4 md:mr-4 w-full md:w-auto">
            <label
              htmlFor="check-in"
              className="block text-gray-700 font-medium"
            >
              Check-in
            </label>
            <input
              type="date"
              id="check-in"
              className="bg-white w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div className="mb-4 md:mr-4 w-full md:w-auto">
            <label
              htmlFor="check-out"
              className="block text-gray-700 font-medium"
            >
              Check-out
            </label>
            <input
              type="date"
              id="check-out"
              className="bg-white w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
          <div className="mb-4 md:mr-4 w-full md:w-auto">
            <label htmlFor="adults" className="block text-gray-700 font-medium">
              Persons
            </label>
            <input
              type="number"
              id="capacity"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={persons}
              onChange={(e) => setPersons(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="m-3 py-3 px-8 text-sm bg-red-600 hover:bg-red-500 rounded text-white"
            onClick={handleCheckAvailability}
          >
            Check Availability
          </button>
        </div>
      </section>
      <section id="testimonials">
        <div className="max-w-screen-xl mx-auto my-12 px-6">
          <div className="flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink text-3xl poppins mx-4 text-gray-500">
              Available Rooms
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <h5 className="poppins text-gray-500 pb-4 text-center">
            Rooms available for reservation
          </h5>
          {roomCards}
        </div>
      </section>
    </>
  );
};
