import '../../Styles/appear.css';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

export default function Developers() {
  return (
    <section id='developers' className='h-screen bg-[#280c58]'>
      <div className='flex'>
        <div className='flex h-screen w-1/2 justify-center bg-white/10'>
          <div className='appear-2 my-auto flex w-1/2 flex-col items-center justify-center rounded-xl bg-blue-950 py-5 text-white'>
            <h2 className='font-noto text-2xl'>Eduardo Sobrinho Polon</h2>
            <Image
              src='/images/Eduardo.webp'
              alt='Foto de perfil do Eduardo Sobrinho Polon'
              width={150}
              height={150}
              className='my-6 rounded-full'
            ></Image>
            <h3>Engenheiro Químico</h3>
            <p className='mt-2 text-sm'>12 de jun de 2001</p>
            <p className='mt-2 text-sm'>Maringá/PR</p>
            <Link
              href='https://www.linkedin.com/in/eduardo-polon-4538a71b3/'
              target='blank'
            >
              <FaLinkedin className='mt-4 h-10 w-10'></FaLinkedin>
            </Link>
          </div>
        </div>
        <div className='flex h-screen w-1/2 justify-center'>
          <div className='appear-2 my-auto flex w-1/2 flex-col items-center justify-center rounded-xl bg-blue-950 py-5 text-white'>
            <h2 className='font-noto text-2xl'>Felipe Rodrigues Batista</h2>
            <Image
              src='/images/Felipe.webp'
              alt='Foto de perfil do Felipe Rodrigues Batista'
              width={150}
              height={150}
              className='my-6 rounded-full'
            ></Image>
            <h3>Engenheiro Químico</h3>
            <p className='mt-2 text-sm'>26 de mar de 2001</p>
            <p className='mt-2 text-sm'>Maringá/PR</p>
            <Link
              href='https://www.linkedin.com/in/feliperodriguesbatista/'
              target='blank'
            >
              <FaLinkedin className='mt-4 h-10 w-10'></FaLinkedin>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
