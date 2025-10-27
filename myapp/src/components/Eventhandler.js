const Button = () => {
  const handleClick = (a, b) => {
    console.log(a + b);
    //alert("You clicked Mehhh");
  };
  return <button onClick={() => handleClick(2, 2)}>Click</button>;
};

export default Button;
