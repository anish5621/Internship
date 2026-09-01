import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
}

async function fetchUser(id: number): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `User ${id}` });
    }, 600);
  });
}

export const PureUseEffectGuide: React.FC = () => {
  const [userId, setUserId] = useState<number>(1);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const handleResize = () => {
      console.log('Viewport height:', window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Delayed execution fired');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let isMounted = true;

    const loadAsyncData = async () => {
      setUser(null);
      const data: User = await fetchUser(userId);
      if (isMounted) {
        setUser(data);
      }
    };

    loadAsyncData();

    return () => {
      isMounted = false;
    };
  }, [userId]);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>useEffect Example</h2>

      <div style={{ marginBottom: '20px' }}>
        <h3>Async State</h3>
        <p>User ID: {userId}</p>
        <p>Name: {user ? user.name : 'Loading...'}</p>
        <button onClick={() => setUserId((prev) => prev + 1)}>Next User</button>
      </div>
    </div>
  );
};

export default PureUseEffectGuide;