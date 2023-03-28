export function List({ activities, onRemove }) {
  return (
    <>
      <ul className="list">
        <h3>Hey, the weather is nice!</h3>
        {activities.map((activity) => (
          <li key={activity.id}>
            <h3>{activity.name}</h3>
            <button
              className="weather-button"
              type="button"
              onClick={() => onRemove?.(activity)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
