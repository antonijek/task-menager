import { useState, useEffect } from "react";
import { createContext, useContext } from "react";

const users = [
  {
    id: 1,
    email: "antonijek@yahoo.com",
    password: "12345678",
    name: "Antonije Knezevic",
  },
  {
    id: 2,
    email: "marko@yahoo.com",
    password: "12345678",
    name: "Marko Markovic",
  },
];
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );

  console.log(user);

  const login = (email, password) => {
    console.log(email, password);
    const currentUser = users.find((user) => user.email === email);
    let success = false;

    if (currentUser) {
      console.log("User found");
      if (currentUser.password === password) {
        console.log("Credentials ok");
        setUser(currentUser);
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        success = true;
      } else {
        console.log("credentials false");
        setUser(null);
      }
    } else {
      console.log("User does not exist");
      setUser(null);
    }

    return success;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <UserContext.Provider
      value={{
        login: (email, password) => login(email, password),
        logout: () => logout(),
        user: user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const userData = () => {
  return useContext(UserContext);
};

export default UserProvider;
