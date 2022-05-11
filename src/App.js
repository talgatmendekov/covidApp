import React, { useEffect, useState } from "react";
import "./App.css";
import { CovidList } from "./CovidList";
import { Spinner } from "./components/UI/Spinner/Spinner";
import { setToLocalStorage } from "./utils/helpers/localStorage";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    try {
      const fetchData = async () => {
        const response = await fetch("https://api.covid19api.com/countries");
        if (response.ok) {
          setIsLoading(false);
        } else {
          throw new Error("Something went wrong");
        }
        const countriesData = await response.json();

       
        setToLocalStorage('allCounties', countriesData)
      };
      fetchData();
    } catch (error) {
      setError(error.message);
    }
  }, [])

  return (
    <div className="App">
      {isLoading ? <Spinner /> : <CovidList/>}
      {error}
      Test
    </div>
  );
}

export default App;
