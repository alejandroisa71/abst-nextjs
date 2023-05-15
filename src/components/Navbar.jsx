'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useClubes } from '@/context/ClubContext';
import { IoMdAdd } from 'react-icons/io';

export const Navbar = () => {
  const router = useRouter();
  const { clubes } = useClubes();
  return (
    <header className="flex items-center bg-gray-800 px-28 py-3 justify-between">
      <Link href="/">
        <h2 className="font-bold text-3xl text-white">
          ABST App{' '}
          <span className="text-slate-300 text-sm ml-5">
            {clubes.length} clubes
          </span>
        </h2>
      </Link>
      <div>
        <button
          className="bg-green-500 hover:bg-green-400 px-5 py-2 text-gray-50 font-bold rounded-sm inline-flex items-center"
          onClick={() => router.push('/new')}
        >
          Add Club <IoMdAdd className="ml-2" />
        </button>
      </div>
    </header>
  );
};
