import React, { useEffect, useState } from "react";
import axios from "axios";
import AvatarSelector from "../components/AvatarSelector";

const LandingForm = () => {
  const [formError, setFormError] = useState("");
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [step, setStep] = useState(1);

  const [userData, setUserData] = useState({
    username: "",
    country: "",
    state: "",
    city: "",
    area: "",
    avatarId: null,
  });

  const onChangeFunction = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidUsername = (name) => {
    const regex = /^[a-zA-Z0-9_]{3,20}$/;
    return regex.test(name);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://countriesnow.space/api/v0.1/countries/positions"
        );
        const countryList = response.data.data.map((country) => country.name);
        setCountries(countryList);
      } catch (error) {
        console.log("failed to fetch countries", error);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    if (!userData.country) return;
    const fetchStates = async () => {
      try {
        const res = await axios.post(
          "https://countriesnow.space/api/v0.1/countries/states",
          { country: userData.country }
        );
        const stateList = res.data.data.states.map((state) => state.name);
        setStates(stateList);
      } catch (error) {
        console.log("failed to load the states", error);
      }
    };
    fetchStates();
  }, [userData.country]);

  useEffect(() => {
    if (!userData.state) return;
    const fetchCity = async () => {
      try {
        const res = await axios.post(
          "https://countriesnow.space/api/v0.1/countries/state/cities",
          {
            country: userData.country,
            state: userData.state,
          }
        );
        setCities(res.data.data);
      } catch (error) {
        console.log("failed to load the cities", error);
      }
    };
    fetchCity();
  }, [userData.state]);

  const nextStep1 = (e) => {
    e.preventDefault();
    if (!isValidUsername(userData.username)) {
      setFormError(
        "Username should be 3-20 characters long, can include letters, numbers and underscore only"
      );
      return;
    }
    setFormError("");
    setStep(2);
  };

  const avatarSelect = (id) => {
    setUserData((prev) => ({ ...prev, avatarId: id }));
  };

  const nextStep2 = (e) => {
    e.preventDefault();
    if (!userData.avatarId) {
      alert("Please Select an avatar");
      return;
    }
    setStep(3);
  };

  if (step === 1) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <form
          onSubmit={nextStep1}
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
        >
          <h1 className="text-2xl font-bold mb-4 text-center">
            Create your profile
          </h1>

          {formError && (
            <p className="text-red-500 text-sm mb-4">{formError}</p>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">
              Username<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={onChangeFunction}
              className="w-full px-3 py-2 border border-gray-300 rounded cursor-pointer"
              placeholder="Enter a unique username"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">
              Select your Country<span className="text-red-500">*</span>
            </label>
            <select
              name="country"
              value={userData.country}
              onChange={onChangeFunction}
              className="w-full px-3 py-2 border border-gray-300 rounded cursor-pointer"
              required
            >
              <option value=""></option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">
              Select state<span className="text-red-500">*</span>
            </label>
            <select
              name="state"
              value={userData.state}
              onChange={onChangeFunction}
              className="w-full px-3 py-2 border border-gray-300 rounded cursor-pointer"
              required
            >
              <option value=""></option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">
              Select City<span className="text-red-500">*</span>
            </label>
            <select
              name="city"
              value={userData.city}
              onChange={onChangeFunction}
              className="w-full px-3 py-2 border border-gray-300 rounded cursor-pointer"
              required
            >
              <option value=""></option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className=" text-gray-700 block">Enter area</label>
            <label className="mb-2 text-red-500 text-xs block">
              Optional but recommended for more specific matching
            </label>
            <input
              type="text"
              name="area"
              value={userData.area}
              onChange={onChangeFunction}
              placeholder="enter only name of area"
              className="border border-gray-300 mb-4 block w-full rounded text-gray-700 px-3 py-2 cursor-pointer"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded cursor-pointer"
          >
            Next
          </button>
        </form>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <form
          onSubmit={nextStep2}
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
        >
          <label>Select Profile Picture</label>
          <AvatarSelector onSelect={avatarSelect} />
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded cursor-pointer"
          >
            Next
          </button>
        </form>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <div className="text-black-500 text-2xl text-center mb-5">
            Continue with
          </div>
          <div className="flex justify-center items-center flex-col gap-4 w-full max-w-lg">
            <button className="bg-green-500 rounded-lg px-22 py-2 cursor-pointer">
              Spotify
            </button>
            <button className="bg-black text-white rounded-lg px-17 py-2">
              Apple Music (coming soon)
            </button>
            <button className="bg-red-500 text-white rounded-lg px-17 py-2">
              Youtube Music (coming soon)
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default LandingForm;
