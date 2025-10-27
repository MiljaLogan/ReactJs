const Copy = () => {
  const copyHandler = () => {
    //alert("Stop stealing My Content!!!!");
    console.log("Stop stealing My Content!!!!");
  };
  return (
    <>
      <p onCopy={copyHandler}>
        Esse ea aute esse enim quis aute ea anim adipisicing occaecat do commodo
        do excepteur. Commodo nulla nulla ea non consequat incididunt ex.
        Proident enim laborum amet cillum adipisicing et do consectetur ea magna
        incididunt fugiat deserunt. Aliqua ipsum nisi cupidatat nulla enim ipsum
        esse sint anim minim. Ea anim sunt irure anim est aliqua veniam ut
        veniam. Laborum excepteur et Lorem quis pariatur labore culpa aliquip.
        Ullamco dolore dolor ipsum mollit sint.
      </p>
    </>
  );
};

export default Copy;
