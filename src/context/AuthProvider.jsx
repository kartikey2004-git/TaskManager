import  { createContext, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage.jsx";
import { useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  // localStorage.clear()
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage()
    const { employees } = getLocalStorage();
    setUserData( employees);
  }, []);

  return (
    <div>
      <AuthContext.Provider value={[userData,setUserData]}>{children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
