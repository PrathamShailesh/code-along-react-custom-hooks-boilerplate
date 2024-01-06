import { useState, useEffect } from 'react';

const useStorage = (key, initialValue) => {
  const getStoredValue = () => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  };

  const [value, setValue] = useState(getStoredValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};


const store = () => {
  const [inputValue, setInputValue] = useStorage('content', '');

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default YourComponent;
