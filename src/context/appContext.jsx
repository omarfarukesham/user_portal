/* eslint-disable react-refresh/only-export-components */
import useDevice from '@/hooks/useDevice';
import appReducer, { initialAppState, setIsMobile } from '@/reducer/appReducer';
import { createContext, useContext, useEffect, useReducer } from 'react';

const appContext = createContext();
appContext.displayName = 'appContext';

/**
 * Custom hook to access the app context values.
 * @returns {{ appState: initialAppState, dispatchAppState: function }} The app context values.
 * @throws {Error} Throws an error if used outside of the AppProvider.
 */
export const useAppContext = () => {
  const context = useContext(appContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

const AppProvider = ({ children }) => {
  const { isMobile } = useDevice();
  const [appState, dispatchAppState] = useReducer(appReducer, initialAppState);

  useEffect(() => {
    dispatchAppState(setIsMobile(isMobile));
  }, [isMobile]);

  const contextValue = {
    appState,
    dispatchAppState,
  };

  return (
    <appContext.Provider value={contextValue}>{children}</appContext.Provider>
  );
};

export default AppProvider;
