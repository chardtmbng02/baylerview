import axios from "axios";

export const NewAccount = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the form data
    const formData = new FormData(e.target);

    // Convert the form data to JSON
    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    try {
      // Make the POST request
      const response = await axios.post(
        "https://baylerview-api.onrender.com/api/logins/add",
        jsonData
      );
      console.log(response.data); // You can do something with the response data if needed
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center p-5">
        <div className="mx-auto w-full">
          
          <form onSubmit={handleSubmit}>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <span className="mb-3 block text-sm font-medium text-gray-700">
                    Firstname
                  </span>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="First Name"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <span className="mb-3 block text-sm font-medium text-gray-700">
                    Lastname
                  </span>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Last Name"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <span className="mb-3 block text-sm font-medium text-gray-700">
                    Username
                  </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <span className="mb-3 block text-sm font-medium text-gray-700">
                    Email Address
                  </span>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <span className="mb-3 block text-sm font-medium text-gray-700">
                    Password
                  </span>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <span className="mb-3 block text-sm font-medium text-gray-700">
                    Verify Password
                  </span>
                  <input
                    type="password"
                    name="vpassword"
                    id="vpassword"
                    placeholder="Verify Password"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <span className="mb-3 block text-sm font-medium text-gray-700">
                    Work Position
                  </span>
                  <input
                    type="text"
                    name="position"
                    id="position"
                    placeholder="Role in your work place"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <span className="mb-3 block text-sm font-medium text-gray-700">
                    User Access Level
                  </span>
                  <input
                    type="text"
                    name="user_level"
                    id="user_level2"
                    placeholder="Administrator | Standard"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="mb-5">
              <span className="mb-3 block text-sm font-medium text-gray-700">
                Account Status
              </span>
              <input
                type="text"
                name="account_status"
                id="account_status2"
                placeholder="Active | Inactive"
                className="w-full appearance-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div>
              <button
                type="submit"
                className="hover:shadow-form rounded-md bg-red-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Save
              </button>
                <button
                  className="hover:shadow-form rounded-md bg-red-600 py-3 px-8 text-center text-base font-semibold text-white outline-none mx-3"
                >
                  Back
                </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
