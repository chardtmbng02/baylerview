import { useState } from "react";
import { Link } from "react-router-dom";
export const ConfirmReserved = () => {
  // const [successModal, setsuccessModal] = useState(false);

  const [data, setData] = useState({
    username: "",
    password: "",
    vpassword: "",
    lastname: "",
    firstname: "",
    email: "",
    position: "",
    user_level: "Standard",
    account_status: "Active",
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  function submit(e) {
    console.log(data);
  }

  return (
    <>
      <div className="flex items-center justify-center p-5">
        <div className="mx-auto w-full">
          <form onSubmit={(e) => submit(e)}>
            <h3 className="font-semibold pb-5">Reservation Form</h3>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <span className="mb-3 block text-sm font-medium text-gray-700">
                    Firstname
                  </span>
                  <input
                    onChange={(e) => handle(e)}
                    id="firstname"
                    value={data.firstname}
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-red-600 focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <span className="mb-3 block text-sm font-medium text-gray-700">
                    Lastname
                  </span>
                  <input
                    onChange={(e) => handle(e)}
                    id="lastname"
                    value={data.lastname}
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-red-600 focus:shadow-md"
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
                    onChange={(e) => handle(e)}
                    id="username"
                    value={data.username}
                    placeholder="Username"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-red-600 focus:shadow-md"
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
                    onChange={(e) => handle(e)}
                    id="email"
                    value={data.email}
                    placeholder="Email Address"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-red-600 focus:shadow-md"
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
                    type="text"
                    name="password"
                    onChange={(e) => handle(e)}
                    id="password"
                    value={data.password}
                    placeholder="Password"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-red-600 focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <span className="mb-3 block text-sm font-medium text-gray-700">
                    Verify Password
                  </span>
                  <input
                    type="text"
                    name="vpassword"
                    onChange={(e) => handle(e)}
                    id="verified_password"
                    value={data.verified_password}
                    placeholder="Verify Password"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-red-600 focus:shadow-md"
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
                    onChange={(e) => handle(e)}
                    id="position"
                    value={data.position}
                    placeholder="Your role in your workplace."
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-red-600 focus:shadow-md"
                  />
                </div>
              </div>

              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <span className="mb-3 block text-sm font-medium text-gray-700">
                    User Access Level
                  </span>
                  <div className="relative">
                    <select
                      type="text"
                      name="user_level"
                      onChange={(e) => handle(e)}
                      id="user_level"
                      value={data.user_level}
                      placeholder="Administrator | Standard"
                      className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-red-600"
                    >
                      <option>Standard</option>
                      <option>Administrator</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <span className="mb-3 block text-sm font-medium text-gray-700">
                Account Status
              </span>
              <div className="relative">
                <select
                  type="text"
                  name="account_status"
                  onChange={(e) => handle(e)}
                  id="account_status"
                  value={data.account_status}
                  placeholder="Active | In-Active"
                  className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-red-600"
                >
                  <option>Active</option>
                  <option>Inactive</option>
                  <option>Deleted</option>
                </select>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="hover:shadow-form rounded-md bg-green-600 hover:bg-green-500 hover:text-black py-3 px-8 text-center text-base text-white outline-none"
              >
                Save
              </button>

              <Link to="/admin/accounts">
                <button className="hover:shadow-form rounded-md bg-red-600 hover:bg-red-500 hover:text-black py-3 px-8 text-center text-base text-white outline-none mx-3">
                  Back
                </button>
              </Link>
            </div>
          </form>
          {/* {successModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-300">
              <div className="bg-white w-1/3 py-4 px-8 rounded shadow-md text-center">
                <p className="text-green-500 text-lg font-semibold mb-4">
                  Record Added Successfully!
                </p>
                <p>You will be redirected to the Accounts shortly...</p>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </>
  );
};
