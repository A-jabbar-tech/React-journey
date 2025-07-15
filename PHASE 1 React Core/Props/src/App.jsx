import Props from "./Components/Props";

function App() {
  return (
    <>
      <h1>Props App</h1>

      {/* Passing props as string */}
      <Props name="Abdul Jabbar" />

      {/* Passing props as string again */}
      <Props name="Jasir Ahmed" />

      {/* Passing props as number */}
      <Props name={2} />

      {/* Passing props as boolean */}
      <Props name="Ali" isStudent={true} />

      {/* Passing props as object */}
      <Props name="Ali" user={{ name: "Ali", age: 25 }} />
    </>
  );
}

export default App;
