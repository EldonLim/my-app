import { createContext, useState } from 'react';

const WheelDataContext = createContext(null);
const { Provider } = WheelDataContext;

const WheelDataProvider = ({ children }) => {
  const [wheelData, setWheelData] = useState({
    distance: "",
    cuisines: [],
  });

  return (
    <Provider
      value={{
        wheelData,
        setWheelData
      }}>
      {children}
    </Provider>
  );
};

export { WheelDataContext, WheelDataProvider };