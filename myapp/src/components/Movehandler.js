const Move = () => {
  const moveHandler = () => {
    console.log("You hoverd me");
    alert("You hoverd me");
  };
  return (
    <>
      <p onMouseMove={moveHandler}>
        Ea commodo laborum deserunt magna ut tempor culpa nulla tempor.
        Voluptate excepteur sint irure laboris velit laboris velit dolore minim.
        Anim aute fugiat et velit cupidatat veniam laborum do ipsum. Consectetur
        voluptate aute magna excepteur sint irure nisi. Sunt minim aute
        excepteur esse duis.
      </p>
    </>
  );
};

export default Move;
