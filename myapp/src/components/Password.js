const ValidPassword = () => <h1>Valid Password </h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

const Password = ({ banana }) => {
  let isvalid = banana ? <ValidPassword /> : <InvalidPassword />;
  //if (banana) {
  //  return <ValidPassword />;
  //}
  //return <InvalidPassword />;
  return isvalid;
};

export default Password;
