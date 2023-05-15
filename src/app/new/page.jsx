'use client';
import { useClubes } from '@/context/ClubContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const Page = ({ params }) => {
  const { clubes, createClub, updateClub } = useClubes();
  // const [habilitado, sethabilitado] = useState(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateClub(params.id, data);
      toast.success('Club updated successfully');
    } else {
      createClub(data.name, data.direction);
      toast.success('Club created successfully');
    }

    router.push('/');
  });

  useEffect(() => {
    if (params.id) {
      const clubFound = clubes.find((club) => club.id === params.id);
      if (clubFound) setValue('name', clubFound.name);
      setValue('direction', clubFound.direction);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <form onSubmit={onSubmit} className="bg-gray-700 p-10">
        <h2>New Club</h2>
        <input
          className="bg-gray-800 py-3 px-4 mb-2 block focus:outline-none w-full"
          placeholder=" Nombre del Club"
          {...register('name', { required: true })}
          autoFocus
        />
        {errors.name && (
          <span className="block text-red-400 mb-2">
            this field is required
          </span>
        )}
        <input
          className="bg-gray-800 py-3 px-4 mb-2 block focus:outline-none w-full"
          placeholder="Direccion"
          {...register('direction', { required: true })}
        />
        {errors.direction && (
          <span className="block text-red-400 mb-2">
            this field is required
          </span>
        )}
        <button
          className="bg-green-500 hover:bg-green-400 focus:outline-none px-4 py-2 rounded-sm disabled:opacity-30 "
          // disabled={!habilitado}
        >
          Grabar
        </button>
      </form>
    </div>
  );
};
export default Page;
