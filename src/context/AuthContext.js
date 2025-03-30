// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create the AuthContext
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isFirstTimer, setIsFirstTimer] = useState();
  useEffect(() => {
    const getFirstTimer = async () => {
      const firstTimer = await AsyncStorage.getItem("isFirstTimeUser");
      setIsFirstTimer(firstTimer);
    };
    getFirstTimer();
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    // Here, you would usually also handle token storage
  };

  const logout = () => {
    setIsAuthenticated(false);
    // Handle token removal
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, isFirstTimer }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
