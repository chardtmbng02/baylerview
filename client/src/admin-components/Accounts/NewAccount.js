import axios from "axios";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const NewAccount = () => {
  const Navigate = useNavigate();
  const url = "https://baylerview-api.onrender.com/api/logins/add";

  const [data, setData] = useState({
    username: "",
    password: "",
    lastname: "",
    firstname: "",
    email: "",
    position: "",
    user_level: "Administrator",
    account_status: "Active",
  });

  function submit(e) {
    e.preventDefault();

    // Check if any required fields are empty
    if (
      data.firstname.trim() === "" ||
      data.lastname.trim() === "" ||
      data.username.trim() === "" ||
      data.email.trim() === "" ||
      data.password.trim() === "" ||
      data.verified_password.trim() === "" ||
      data.position.trim() === ""
    ) {
      alert("All Fields are required");
      return;
    }

    axios
      .post(url, {
        username: data.username,
        password: data.verified_password,
        lastname: data.lastname,
        firstname: data.firstname,
        email: data.email,
        position: data.position,
        user_level: data.user_level,
        account_status: data.account_status,
      })
      .then((res) => {
        console.log(res.data);
        alert("Account Created Successfully!");
        Navigate("/admin/accounts");
      });
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    // console.log(newdata);
  }

  return (
    <>
      <div className="flex items-center justify-center p-5">
        <div className="mx-auto w-full">
          <form onSubmit={(e) => submit(e)}>
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
                    onChange={(e) => handle(e)}
                    id="lastname"
                    value={data.lastname}
                    type="text"
                    name="lastname"
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
                    onChange={(e) => handle(e)}
                    id="username"
                    value={data.username}
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
                    onChange={(e) => handle(e)}
                    id="email"
                    value={data.email}
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
                    onChange={(e) => handle(e)}
                    id="verified_password"
                    value={data.verified_password}
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
                    onChange={(e) => handle(e)}
                    id="position"
                    value={data.position}
                    placeholder="Your role in your workplace."
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
                    onChange={(e) => handle(e)}
                    id="user_level"
                    value={data.user_level}
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
                onChange={(e) => handle(e)}
                id="account_status"
                value={data.account_status}
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
              <Link to="/admin/accounts">
                <button className="hover:shadow-form rounded-md bg-red-600 py-3 px-8 text-center text-base font-semibold text-white outline-none mx-3">
                  Back
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
