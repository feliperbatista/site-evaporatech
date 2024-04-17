import { FaStar, FaUser } from 'react-icons/fa';

export default function ReviewCard({
  text,
  title,
}: {
  text: string;
  title: string;
}) {
  return (
    <article className='group w-60 rounded-xl border-2 bg-white/20 shadow-xl transition hover:scale-105 hover:bg-white/90'>
      <div className='grid grid-flow-row grid-rows-2'>
        <div className='flex flex-col'>
          <div className='mx-auto mt-5 flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 group-hover:bg-gray-400'>
            <FaUser className='h-10 w-10 fill-gray-500 group-hover:fill-gray-200'></FaUser>
          </div>
          <div className='mx-auto flex p-4'>
            <FaStar className='h-7 w-7 fill-yellow-200 group-hover:fill-yellow-300'></FaStar>
            <FaStar className='h-7 w-7 fill-yellow-200 group-hover:fill-yellow-300'></FaStar>
            <FaStar className='h-7 w-7 fill-yellow-200 group-hover:fill-yellow-300'></FaStar>
            <FaStar className='h-7 w-7 fill-yellow-200 group-hover:fill-yellow-300'></FaStar>
            <FaStar className='h-7 w-7 fill-yellow-200 group-hover:fill-yellow-300'></FaStar>
          </div>
        </div>
        <div>
          <h2 className='font-noto px-4 text-lg font-bold text-white group-hover:text-black'>
            {title}
          </h2>
          <p className='font-roboto mt-3 px-5 text-xs text-white group-hover:text-black'>
            {text}
          </p>
        </div>
      </div>
    </article>
  );
}
