const UserProp = ({ img, name, hobbies, realData, children }) => {
  return (
    <section>
      <img src={img} />
      <h1>{name}</h1>
      <h3>Hobbies:{hobbies}</h3>
      <h3>Name :{realData.name}</h3>
      <h3>Location :{realData.location}</h3>
      <h3>{children}</h3>
    </section>
  );
};

export default UserProp;
