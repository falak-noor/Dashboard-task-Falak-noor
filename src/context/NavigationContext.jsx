import { useState } from 'react';
import { NavigationContext } from './navigationContextInstance';

export const NavigationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [activeWorkspace, setActiveWorkspace] = useState('School Education');
  const [user, setUser] = useState({
    name: 'Falak Noor',
    email: 'falak.noor@org.com',
    role: 'Administrator',
    workspace: 'School Education',
  });

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        activeWorkspace,
        setActiveWorkspace,
        user,
        setUser,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
