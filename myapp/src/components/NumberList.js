const numbers = [1, 2, 3, 4, 5];
export const List = () => {
  return (
    <>
      {numbers.map((number) => (
        <ul key={Math.random() * 10}>
          <li>{number}</li>
        </ul>
      ))}
    </>
  );
};
