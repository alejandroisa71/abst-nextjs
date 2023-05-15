import { useDebugValue, useEffect, useState } from 'react';

export function useLocalStorage(key, initialState) {
  const [state, setState] = useState(initialState);
  useDebugValue(state);

  // useEffect(() => {
  //   const item = localStorage.getItem(key);
  //   const clubes = setState(JSON.parse(item));
  //   if (clubes) {
  //     setState(clubes);
  //   }
  // }, [key]);

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item) setState(parse(item));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   if (state.length > 0) {
  //     localStorage.setItem(key, JSON.stringify(state));
  //   }
  // }, [key, state]);

  useEffect(() => {
    if (state.length > 0) {
      localStorage.setItem(key, JSON.stringify(state));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return [state, setState];
  // useEffect(() => {
  //   const item = localStorage.getItem('clubes');
  //   const clubes = JSON.parse(item);
  //   if (clubes.length > 0) {
  //     setClubes(clubes);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('clubes', JSON.stringify(clubes));
  // }, [clubes]);
}
function parse(obj) {
  try {
    return JSON.parse(obj);
  } catch {
    return obj;
  }
}
