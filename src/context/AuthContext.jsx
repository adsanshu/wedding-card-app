import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isLockModalOpen, setIsLockModalOpen] = useState(false);

  const correctPin = "032027"; // Passcode for March 2027

  const unlockDiary = (pin) => {
    if (pin === correctPin) {
      setIsUnlocked(true);
      setIsLockModalOpen(false);
      return true;
    }
    return false;
  };

  const lockDiary = () => setIsUnlocked(false);

  return (
    <AuthContext.Provider
      value={{
        isUnlocked,
        isLockModalOpen,
        setIsLockModalOpen,
        unlockDiary,
        lockDiary,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

