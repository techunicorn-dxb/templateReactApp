import "./App.css";
import { toast } from "react-hot-toast";
import { TeamsToast } from "./components/Toasts/TeamsToast";
import CardExample from "./components/cardExample/cardExample";
import React, { useEffect, useMemo, useContext, useState } from "react";
import { AuthContext } from "./contexts/authContext";
import { Button } from "@fluentui/react-northstar";
import { getRandomUser } from "./apis/demoApi";

function App() {
  const [authToken, setAuthToken] = useState();
  const AuthValue = useMemo(
    () => ({ authToken, setAuthToken }),
    [authToken, setAuthToken]
  );
  React.useEffect(() => {
    console.log("App.js is running");
    toast.error("Error message");
  }, []);

  return (
    <AuthContext.Provider value={AuthValue}>
      <div className="App">
        <Button
          content="hey"
          onClick={async () => {
            const user = await getRandomUser();
            console.log(user);
          }}
        />
        <CardExample />
        <TeamsToast />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
