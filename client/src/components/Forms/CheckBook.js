import { Link } from "react-router-dom";
import "../Forms/CheckBook.css";
export const CheckBook = () => {
  return (
    <section className="p-10 bg-yellow-100">
      <div className="flex flex-wrap items-center justify-center">
      {/* <p className="text-xl text-gray-600 text-center">Book Your Room</p> */}
        <form className="flex flex-wrap items-center justify-center">
          
          <input
            id="date"
            className="wbookform border-2 border-gray-300 rounded m-3 px-3 py-2 w-30"
            type="date"
            placeholder="Check In Date"
          />

          <input
            id="date"
            className="wbookform border-2 border-gray-300 rounded m-3 px-3 py-2 w-30"
            type="date"
            placeholder="Check In Date"
          />

          <input
            className="wbookform border-2 border-gray-300 rounded m-3 px-3 py-2"
            type="number"
            placeholder="Adults"
          />

          <input
            className="text-black wbookform border-2 border-gray-300 rounded m-3 px-3 py-2"
            type="number"
            placeholder="Children"
          />
          <Link to="/reserveroom">
            <button
              type="button"
              className="m-3 py-3 px-8 text-sm bg-red-600 hover:bg-red-500 rounded text-white "
            >
              Check Availability
            </button>
          </Link>
        </form>
      </div>
    </section>
  );
};
