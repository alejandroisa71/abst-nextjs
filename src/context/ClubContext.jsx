'use client';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { createContext, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

const ClubContext = createContext();

export const useClubes = () => {
  const context = useContext(ClubContext);
  if (!context)
    throw new Error('useClubes deberia ser usado dentro de ClubContext');
  return context;
};

export const ClubProvider = ({ children }) => {
  const [clubes, setClubes] = useLocalStorage('clubes', []);

  const createClub = (name, direction) => {
    setClubes([
      ...clubes,
      {
        name,
        direction,
        id: uuid(),
      },
    ]);
  };

  const deleteClub = (id) => {
    setClubes([...clubes.filter((club) => club.id !== id)]);
  };

  const updateClub = (id, newData) => {
    setClubes([
      ...clubes.map((club) =>
        club.id === id
          ? {
              ...club,
              ...newData,
            }
          : club
      ),
    ]);
  };

  return (
    <ClubContext.Provider
      value={{
        clubes,
        createClub,
        deleteClub,
        updateClub,
      }}
    >
      {children}
    </ClubContext.Provider>
  );
};
