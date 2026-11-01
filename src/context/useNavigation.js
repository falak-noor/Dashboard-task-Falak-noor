import { useContext } from 'react';
import { NavigationContext } from './navigationContextInstance';

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

export default useNavigation;
