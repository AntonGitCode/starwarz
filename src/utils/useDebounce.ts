import { useState, useEffect } from "react";

export default function useDebounce<T>(value: T, delay?: number): T {
    const [debounceValue, setDebounceValue] = useState<T>(value);
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebounceValue(value);
      }, delay || 450);
      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);
    return debounceValue;
  };

