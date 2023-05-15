import { useClubes } from '@/context/ClubContext';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import {RiDeleteBinLine} from 'react-icons/ri'

const ClubCard = ({ club }) => {
  const { deleteClub } = useClubes();
  const router = useRouter();
  return (
    <div
      className="bg-gray-700 hover:bg-gray-600 cursor-pointer px-20 py-5 m-2 "
      onClick={() => router.push(`/edit/${club.id}`)}
    >
      <div className="flex justify-between">
        <h2>{club.name}</h2>
        <button
          className='bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center rounded-sm'
          onClick={(e) => {
            e.stopPropagation();
            const accpet = window.confirm('are you sure');
            if (accpet) {
              deleteClub(club.id);
              toast.success(`clud ${club.name} deleted successfully`);
            }
          }}
        >
          Delete <RiDeleteBinLine className='ml-2'/> 
        </button>
      </div>
      <p className="text-gray-300">{club.direction}</p>
      <span className="text-gray-400 text-xs">{club.id}</span>
    </div>
  );
};
export default ClubCard;
