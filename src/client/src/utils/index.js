import axios from "axios";

const isLogin = async () => {
  const token = localStorage.getItem("token");
  console.log("The token is ", token);
  if (!token) return false;

  // WIP - Check on the server if the token is a valid one.
  const isAuthenticated = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/api/validate`,
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );

  if (!isAuthenticated.data.authenticated) {
    console.log("is authenticated data from api is ", isAuthenticated.data);

    localStorage.removeItem("token");
    return false;
  }

  return true;
};

export { isLogin };
