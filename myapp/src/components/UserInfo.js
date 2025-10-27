const userInfo = [
  {
    usename: "Milja",
    email: "test@gmail.com",
    location: "Karlsruhe",
  },
  {
    usename: "Logan",
    email: "lo@gmail.com",
    location: "Vallam",
  },
  {
    usename: "Paari",
    email: "pa@gmail.com",
    location: "Vellarikundu",
  },
  {
    usename: "Pegan",
    email: "pegi@gmail.com",
    location: "Wichtner",
  },
];

const UserInfo = () => {
  return (
    <>
      {userInfo.map((user) => (
        <ul key={Math.random()}>
          <li>{user.usename}</li>
          <li>{user.email}</li>
          <li>{user.location}</li>
        </ul>
      ))}
    </>
  );
};
export default UserInfo;
