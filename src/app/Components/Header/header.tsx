import Link from 'next/link';
import '../../Styles/opacity.css';

export default function Header() {
  return (
    <header className='opacity fixed z-50 flex h-16 w-full border-b-2 border-gray-700'>
      <div className='group ml-10 flex items-center'>
        <h1 className='text-xl font-extrabold text-white group-hover:text-blue-500'>
          <Link href='/'>Evaporatech</Link>
        </h1>
      </div>
      <div className='ml-auto mr-10 flex items-center'>
        <ul className='flex gap-4'>
          <li className='text-white hover:text-blue-400'>
            <Link href='#about'>Sobre</Link>
          </li>
          <li className='text-white hover:text-blue-400'>
            <Link href='#developers'>Desenvolvedores</Link>
          </li>
          <li className='text-white hover:text-blue-400'>
            <Link href='#contact'>Contato</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
