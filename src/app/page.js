'use client';
import ClubCard from '@/components/ClubCard';
import { useClubes } from '@/context/ClubContext';
import {AiFillFileAdd} from 'react-icons/ai'

const Page = () => {
  const { clubes } = useClubes();

  return (
    <div className="flex justify-center">
      <div className="w-7/12">
      {clubes.map((club) => (
        <ClubCard key={club.id} club={club} />
      ))}
    </div>
    </div>
  );
};
export default Page;
