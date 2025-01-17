import  { createContext, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage.jsx";
import { useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  console.log(children);
  
  // localStorage.clear()
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage()
    const { employees , admin} = getLocalStorage();
    setUserData( employees , admin);
  }, []);

  return (
    <div>
      <AuthContext.Provider value={[userData,setUserData]}>{children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;


// pro tip for me jo context hota hai usme jo children hum pass krte hai , wo ek Symbol data type hota hai 

// for more details check insights 