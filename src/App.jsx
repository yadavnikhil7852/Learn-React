import "./App.css";
// import Card from "./components/Card"
import Button from "./components/Button";
import Default from "./components/default";
function App() {
  //this is a object
  const obj = {
    naame: "nosql",
    age: 20,
  };
  console.log(obj);
  //this is a array
  const items = ["apple", "banana", "orange"];
  console.log(items);

  //this is a function
  //  function button1click(){
  //   console.log("Button has clicked")
  //  }

  return (
    <>
      {/* <Button title={"click me"} func={button1click} jsx={<h1>Hello jsx</h1>}/> */}
      <Button>click me</Button>
      <Button>click krde</Button>

      <Default />
    </>
  );
}

export default App;
