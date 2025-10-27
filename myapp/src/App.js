import { CiShoppingCart } from "react-icons/ci";
import { BsFillCartCheckFill } from "react-icons/bs";
//import "./index.css";ci CiShoppingCart
//import TypesExample from "./components/Buttonstyle";
import Button from "./components/Eventhandler";
import Copy from "./components/Copyhandler";
import Move from "./components/Movehandler";

function App() {
  return (
    <>
      {/* <Password banana={true} />
      <Color />*/}
      <BsFillCartCheckFill />
      <CiShoppingCart />
      <Button />
      <Copy />
      <Move />
    </>
  );
}

export default App;
