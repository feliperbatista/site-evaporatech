import Link from 'next/link';
import { FaStar, FaUser } from 'react-icons/fa';
import ReviewCard from '../Review-card/review-card';

export default function Intro() {
  return (
    <section className='flex h-screen flex-col items-center justify-center'>
      <button className='group rounded-full bg-white px-8 py-4 shadow transition hover:bg-blue-800'>
        <Link
          href='/'
          className='text-lg font-extrabold text-blue-800 transition group-hover:text-white'
        >
          Download
        </Link>
      </button>
      <div className='mt-20'></div>
      <div className='flex  flex-row gap-7'>
        <ReviewCard
          title='Excelente!'
          text='"O Evaporatech é um software muito fácil de instalar e de já começar
          a usar. Me ajudou muito nos meus estudos sobre evaporação."'
        ></ReviewCard>
        <ReviewCard
          title='Muito bom'
          text='"Intuitivo. Simples. Uma ajuda e tanto!"'
        ></ReviewCard>
        <ReviewCard
          title='Agilidade nota 10'
          text='"Um exercício que eu demoraria pelo menos algumas horas consegui resolver em questão de minutos com o Evaporatech."'
        ></ReviewCard>
      </div>
    </section>
  );
}
