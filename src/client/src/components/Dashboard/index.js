import React, { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    console.log("USER INFO:" + document.cookie);
  }, []);

  return (
    <div>
      <h1>I am the dashboard</h1>
    </div>
  );
};

export default Dashboard;
