import { useState, useEffect } from 'react';
import { type UserProfile } from './types/user';

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}

function useCounter(initialCount: number = 0, step: number = 1) {
  const [count, setCount] = useState<number>(initialCount);

  const increment = () => setCount((prev) => prev + step);
  const reset = () => setCount(initialCount);

  return { count, increment, reset };
}

export default function App() {
  const [user, setUser] = useLocalStorage<UserProfile>('app_user', {
    name: 'Intern Developer',
    role: 'Developer',
  });

  const { count, increment, reset } = useCounter(0, 5);

  return (
    <div>
      <h2>Custom Hooks Pattern Example</h2>

      <div>
        <h3>1. Generic useLocalStorage Hook</h3>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <button
          onClick={() =>
            setUser({ name: 'Senior Developer', role: 'Admin' })
          }
        >
          Promote to Senior
        </button>
      </div>

      <div>
        <h3>2. useCounter Hook (Step Size: 5)</h3>
        <p><strong>Count:</strong> {count}</p>
        <button onClick={increment}>+5</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
