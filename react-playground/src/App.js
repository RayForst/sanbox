import React, { useEffect, useState } from "react";
import { AuthContext } from "./context";
import AppRouter from "./router/AppRouter";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setLoading(false);
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
        <AppRouter />
      </AuthContext.Provider>
    </div>
  );
}
