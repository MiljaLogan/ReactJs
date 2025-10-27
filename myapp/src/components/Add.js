const myName = "Milja";
const multiply = (a, b) => a * b;
const specialClass = "simple-class";
export const Add = () => {
  return (
    <>
      <h1>{myName}</h1>
      <p>2*2={2 * 2}</p>
      <p>My Friends List {["Alex ", "John ", "Thomas"]}</p>
      <p>2*2 = {multiply(2, 2)}</p>
      <p className={specialClass}>This is a Special Class</p>
    </>
  );
};
