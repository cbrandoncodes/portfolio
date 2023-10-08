import { useState, useEffect } from "react";

export default function useLocalStorage<ValueType>(
  key: string,
  defaultValue: ValueType | (() => ValueType)
): [ValueType, (newValue: ValueType) => void] {
  const [value, setValue] = useState<ValueType>(() => {
    if (typeof localStorage !== "undefined") {
      const storedValue = localStorage?.getItem(key);
      return storedValue === null ? defaultValue : JSON.parse(storedValue);
    }

    return typeof defaultValue === "function"
      ? (defaultValue as any)()
      : defaultValue;
  });

  useEffect(() => {
    const listener = (e: StorageEvent) => {
      if (e.storageArea === localStorage && e.key === key) {
        setValue(e.newValue ? JSON.parse(e.newValue) : e.newValue);
      }
    };
    window.addEventListener("storage", listener);

    return () => {
      window.removeEventListener("storage", listener);
    };
  }, [key, defaultValue]);

  const setValueInLocalStorage = (newValue: ValueType) => {
    setValue((currentValue: any) => {
      const result =
        typeof newValue === "function" ? newValue(currentValue) : newValue;
      localStorage.setItem(key, JSON.stringify(result));
      return result;
    });
  };

  return [value, setValueInLocalStorage];
}
