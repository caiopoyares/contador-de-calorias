import axios from "axios";

const isLogin = async () => {
  const token = localStorage.getItem("token");
  console.log("The token is ", token);
  if (!token) return false;

  // WIP - Check on the server if the token is a valid one.
  console.log("here");
  try {
    const isAuthenticated = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/validate`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );

    return isAuthenticated.data;
  } catch (err) {
    console.log("Error", err);
  }
};

export { isLogin };
