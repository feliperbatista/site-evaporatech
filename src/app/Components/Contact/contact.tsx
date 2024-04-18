'use client';
export default function Contact() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }
  return (
    <section
      id='contact'
      className='flex h-screen flex-col items-center justify-center bg-[#280c58]'
    >
      <h2 className='mb-10 font-noto text-4xl font-bold text-white'>
        Entre em contato
      </h2>
      <div>
        <form
          onSubmit={handleSubmit}
          className='m-auto flex-col rounded-3xl bg-blue-950 px-16 py-10 shadow-2xl'
        >
          <label
            htmlFor='name'
            className='mb-6 flex flex-col font-noto text-white'
          >
            <input
              name='nome'
              type='name'
              required
              placeholder='Nome'
              className='border-b-2 border-blue-600 bg-transparent placeholder:text-white'
            ></input>
          </label>
          <label
            htmlFor='lastname'
            className='mb-6 flex flex-col font-noto text-white'
          >
            <input
              name='sobrenome'
              type='lastname'
              placeholder='Sobrenome'
              className='border-b-2 border-blue-600 bg-transparent placeholder:text-white'
            ></input>
          </label>
          <label
            htmlFor='email'
            className='mb-6 flex flex-col font-noto text-white'
          >
            <input
              name='email'
              type='email'
              required
              placeholder='Email'
              className='border-b-2 border-blue-600 bg-transparent placeholder:text-white'
            ></input>
          </label>
          <label className='flex flex-col text-white'>
            Digite sua mensagem:
            <textarea
              name='postContent'
              rows={5}
              cols={40}
              required
              className='mt-4 border-b-2 border-blue-600 bg-transparent text-white'
            />
          </label>
          <div className='flex justify-center'>
            <input
              type='submit'
              value='Enviar'
              className=' mt-12 h-10 w-1/2 rounded-full bg-white font-bold text-blue-600 shadow-xl hover:bg-blue-600 hover:text-white'
            />
          </div>
        </form>
      </div>
    </section>
  );
}
