export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    const name = formElements.name.value;
    const isForGoodWeather = formElements.isForGoodWeather.checked;
    // console.log(isForGoodWeather);
    onAddActivity({ name, isForGoodWeather });
    event.target.reset();
    event.target.name.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add new Activity</h4>
      <label htmlFor="activity">Activity: </label>
      <input type="text" name="name" id="activity"></input>
      <label htmlFor="goodTick">Pastime for Good Waether</label>
      <input type="checkbox" name="isForGoodWeather" id="goodTick"></input>
      <button type="submit">Submit</button>
    </form>
  );
}
