import React, { useEffect, useState } from "react";
import "./App.css";
import { CountrySelect } from "./CountrySelect";
import { Spinner } from "./components/UI/Spinner/Spinner";
import { setToLocalStorage } from "./utils/helpers/localStorage";
import { useDispatch } from "react-redux";
import { statActions } from "./store/statSlice";
import { API_ALL_COUNTRIES } from "./utils/constants/general";

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    try {
      const fetchData = async () => {
        const response = await fetch(API_ALL_COUNTRIES);
        if (response.ok) {
          setIsLoading(false);
        } else {
          throw new Error("Something went wrong");
        }
        const countriesData = await response.json();

        setToLocalStorage("allCounties", countriesData);
        dispatch(statActions.getAllCountries(countriesData));
      };
      fetchData();
    } catch (error) {
      setError(error.message);
    }
  }, [dispatch]);

  return (
    <div className="App">
      {isLoading ? <Spinner /> : <CountrySelect />}
      {error}
    </div>
  );
}

export default App;
