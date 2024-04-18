import DevCard from '../Developers-card/dev-card';
import '../../Styles/appear.css';

export default function Developers() {
  return (
    <section
      id='developers'
      className='flex h-screen flex-col items-center justify-center bg-[#280c58]'
    >
      <h2 className='appear-2 mb-10 font-noto text-4xl font-bold text-white'>
        Desenvolvedores
      </h2>
      <div className='flex flex-row gap-24'>
        <DevCard
          title='Eduardo Sobrinho Polon'
          src='/images/Eduardo.webp'
          alt='Foto de perfil do Eduardo Sobrinho Polon'
          date='12 de jun de 2001'
          linkedin='https://www.linkedin.com/in/eduardo-polon-4538a71b3/'
        ></DevCard>
        <DevCard
          title='Felipe Rodrigues Batista'
          src='/images/Felipe.webp'
          alt='Foto de perfil do Felipe Rodrigues Batista'
          date='26 de mar de 2001'
          linkedin='http://www.linkedin.com/in/feliperodriguesbatista'
        ></DevCard>
      </div>
    </section>
  );
}
