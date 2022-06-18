import { useRef, useEffect } from 'react';

export const Timer = () => {
  const timerRef = useRef(null);

  // таймер срабатывает по клику
  const startTimer = () => {
    timerRef.current = setTimeout(() => {
      console.log('start current timeout');
    }, 500);
  }

  useEffect(() => {
    return () => clearTimeout(timerRef.current); // очистка таймера
  }, []);

  return <button onClick={startTimer}>Start timer</button>;
}
