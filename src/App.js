import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.location.href = 'https://eurobrew.net' + window.location.pathname;
  }, []);

  return null;
}
