import { useEffect, useState } from 'react';
import axios from 'axios';

export const RoomResults = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get(
          'https://baylerview-api.onrender.com/api/testimonials'
        );
        const data = await response.data;
        const testimonialsArray = Object.values(data);

        setTestimonials(testimonialsArray[1]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchRooms();
  }, []);

  console.log(testimonials);

  const testimonialCards = testimonials.map((testimonial) => (
    <div className="container mx-auto py-2" key={testimonial._id}>
      <div className="flex flex-col md:flex-row md:-mx-3">
        <div className="flex-1 bg-white">
          <div className="p-10 rounded-lg border border-solid border-gray-200 shadow-xl">
            <p>{testimonial._id}</p>
            <p>{testimonial.name}</p>
            <p>{testimonial.email}</p>
            <p>{testimonial.position}</p>
            <p>{testimonial.message}</p>
            <p>{testimonial.ratings}</p>
            <p>{testimonial.testimonial_status}</p>
            <p>{testimonial.date}</p>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
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
        {testimonialCards}
      </div>
    </section>
  );
};
