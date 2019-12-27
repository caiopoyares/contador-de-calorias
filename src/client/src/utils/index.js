import jwt_decode from "jwt-decode";

const isLogin = async () => {
  const token = localStorage.getItem("token");
  console.log("The token is ", token);
  if (!token) return false;

  try {
    const decoded = jwt_decode(token);
    console.log("decoded jwt is ", decoded);

    if (decoded.exp < new Date().getTime() / 1000) {
      console.log("expired token");
      return false;
    }
  } catch (err) {
    return false;
  }

  return true;
};

export { isLogin };
