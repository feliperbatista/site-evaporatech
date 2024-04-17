import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='border-t-2 border-t-[#362162] bg-[#280c58]'>
      <p className='py-2 text-center text-xs text-white/35'>
        Desenvolvido por
        <Link href='https://feliperodriguesbatista.dev' target='blank'>
          {' '}
          Felipe Rodrigues Batista
        </Link>
      </p>
    </footer>
  );
}
