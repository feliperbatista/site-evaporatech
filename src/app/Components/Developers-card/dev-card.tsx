import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import '../../Styles/appear.css';

export default function DevCard({
  title,
  src,
  alt,
  date,
  linkedin,
}: {
  title: string;
  src: string;
  alt: string;
  date: string;
  linkedin: string;
}) {
  return (
    <div className='appear-2 flex flex-col items-center justify-center rounded-3xl bg-blue-950 p-10 text-white shadow-2xl transition-all hover:scale-110 hover:bg-cyan-800'>
      <h2 className='font-noto text-2xl'>{title}</h2>
      <Image
        src={src}
        alt={alt}
        width={150}
        height={150}
        className='my-6 rounded-full'
      ></Image>
      <h3>Engenheiro Químico</h3>
      <p className='mt-2 text-sm'>{date}</p>
      <p className='mt-2 text-sm'>Maringá/PR</p>
      <Link href={linkedin} target='blank'>
        <FaLinkedin className='mt-4 h-10 w-10 hover:fill-cyan-200'></FaLinkedin>
      </Link>
    </div>
  );
}
