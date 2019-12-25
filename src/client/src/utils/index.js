const isLogin = () => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  //WIP - Check on the server if the token is a valid one.

  console.log(token);
  return true;
};

export { isLogin };
