import ListGroup from "./components/ListGroup";
function App() {
  let items = ["London", "France", "Germany", "New York", "India"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="cities"
        onSlectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
