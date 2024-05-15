import React, {
  createContext,
  useState,
  useContext,
  FunctionComponent,
  ReactNode,
} from "react";

interface LogContextType {
  enableLogs: boolean;
  toggleLogs: () => void;
}

const defaultValue: LogContextType = {
  enableLogs: false,
  toggleLogs: () => {},
};

export const LogContext = createContext<LogContextType>(defaultValue);

interface LogProviderProps {
  children: ReactNode;
}

export const LogProvider: FunctionComponent<LogProviderProps> = ({
  children,
}) => {
  const [enableLogs, setEnableLogs] = useState(false);

  const toggleLogs = () => {
    setEnableLogs(!enableLogs);
  };

  return (
    <LogContext.Provider value={{ enableLogs, toggleLogs }}>
      {children}
    </LogContext.Provider>
  );
};

export const useLogContext = () => useContext(LogContext);
