import logo from "./logo.svg";
import { useEffect, useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import Form from "./Form";
// import { useState } from "react";
import { List } from "./List";
import "./App.css";
import "./form.css";
import "./list.css";

const initialActivities = [
  {
    id: 1,
    name: "Jogging",
    isForGoodWeather: true,
  },
  {
    id: 2,
    name: "Reading",
    isForGoodWeather: false,
  },
];
const isGoodWeather = true;

function App() {
  const [weather, setWeather] = useLocalStorageState("weather", {
    defaultValue: [],
  });
  useEffect(() => {
    async function fetchWeather() {
      const apiURL = "https://example-apis.vercel.app/api/weather";
      const response = await fetch(apiURL);
      const JSONdata = await response.json();
      setWeather(JSONdata);
      console.log(JSONdata);
      // console.log(apiURL);
    }

    fetchWeather();
    const updateWeather = setInterval(fetchWeather, 5000);
    return () => clearInterval(updateWeather);
  }, []);

  const [activities, setActvities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  function handleAddActivity(newActivity) {
    setActvities([...activities, { ...newActivity, id: uid() }]);
  }

  function handelRemoveActivity(removeActivity) {
    setActvities(activities.filter((activity) => activity !== removeActivity));
  }

  return (
    <main>
      <h1>{`${weather.condition} ${weather.temperature} °C ${weather.location}`}</h1>
      <List activities={filteredActivities} onRemove={handelRemoveActivity} />
      <Form onAddActivity={handleAddActivity} />
    </main>
  );
}

export default App;
