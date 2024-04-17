import Image from 'next/image';
import '../../Styles/appear.css';

export default function About() {
  return (
    <section id='about' className='flex h-screen bg-[#280c58]'>
      <div className='appear items-middle m-auto mr-0 flex w-3/5 flex-col justify-center rounded-3xl bg-white/10 p-10'>
        <h2 className='font-noto text-4xl font-bold text-white'>
          Evaporatech: evaporação em múltiplos efeitos
        </h2>
        <p className='mt-5 font-noto text-lg text-white'>
          O Evaporatech é um software que simula o processo de evaporação em um
          ou mais efeitos. Criado em 2023, a ideia do software surgiu como tema
          de trabalho de conclusão de curso dos alunos Eduardo Sobrinho Polon e
          Felipe Rodrigues Batista, do curso de Engenharia Química da
          Universidade Estadual de Maringá. Considerando a escassez de
          simuladores que permitem trabalhar com evaporadores, o objetivo era
          desenvolver um programa que pudesse dimensionar sistemas de evaporação
          e servir como ferramenta de aprendizagem na disciplina de Operações
          Unitárias.
        </p>
        <p className='mt-5 font-noto text-lg text-white'>
          Utilizando C# e Winforms, o Evaporatech foi estruturado durante alguns
          meses e, após ser apresentado a uma banca de professores do
          Departamento de Engenharia Química da UEM, o software foi apresentado
          aos graduandos do curso em sala de aula e empregado como material de
          apoio na resolução de desafios relacionados à evaporação.
        </p>
      </div>
      <div className='appear z-0 my-auto ml-10 mr-28'>
        <Image
          src='images/Computador.svg'
          alt=''
          height={400}
          width={400}
        ></Image>
      </div>
    </section>
  );
}
