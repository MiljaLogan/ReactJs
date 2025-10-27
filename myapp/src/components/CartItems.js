const Items = () => {
  const items = ["Airpod", "Power Bnak", "New SSD"];
  return (
    <>
      <h1>Cart </h1>
      {items.length > 0 && <h2>You have {items.length} items in my Cart</h2>}
      <h4>Products</h4>
      <ul>
        {items.map((item) => (
          <li key={Math.random()}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Items;
