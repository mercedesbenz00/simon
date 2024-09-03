import { useEffect, useState, useCallback } from 'react';

// ----------------------------------------------------------------------

export function useLocalStorage(key, initialState) {
  const [state, setState] = useState(() => {
    // Initialize state from localStorage if available, otherwise use initialState
    const restored = getStorage(key);
    return restored !== null ? restored : initialState;
  });

  useEffect(() => {
    const restored = getStorage(key);

    if (restored) {
      setState((prevValue) => ({
        ...prevValue,
        ...restored,
      }));
    }
  }, [key]);

  const updateState = useCallback(
    (updateValue) => {
      setState((prevValue) => {
        const newValue = {
          ...prevValue,
          ...updateValue,
        };

        setStorage(key, newValue);
        return newValue;
      });
    },
    [key]
  );

  const update = useCallback(
    (name, updateValue) => {
      updateState({
        [name]: updateValue,
      });
    },
    [updateState]
  );

  const reset = useCallback(() => {
    removeStorage(key);
    setState(initialState);
  }, [initialState, key]);

  return {
    state,
    update,
    reset,
  };
}

// ----------------------------------------------------------------------

export const getStorage = (key) => {
  let value = null;

  try {
    // const result = window.localStorage.getItem(key);

    if (typeof window !== 'undefined') {
      value = JSON.parse(localStorage.getItem(key));
    }
  } catch (error) {
    console.error(`Error parsing JSON from localStorage for key "${key}":`, error);
  }

  return value;
};

export const setStorage = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting JSON in localStorage for key "${key}":`, error);
  }
};

export const removeStorage = (key) => {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing key "${key}" from localStorage:`, error);
  }
};
