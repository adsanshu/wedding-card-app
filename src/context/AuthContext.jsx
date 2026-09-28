import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const SECRET_PIN = "123456"; // Aapka Passcode

  const unlockDiary = (pin) => {
    if (pin === SECRET_PIN) {
      setIsUnlocked(true);
      return true;
    }
    return false;
  };

  const lockDiary = () => setIsUnlocked(false);

  return (
    <AuthContext.Provider value={{ isUnlocked, unlockDiary, lockDiary }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
