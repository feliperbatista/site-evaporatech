import { Input } from '@nextui-org/input';

export default function Contact() {
  return (
    <section id='contact' className='h-screen'>
      <form className='m-auto flex h-1/2 w-1/2 flex-col bg-blue-200'>
        <Input
          type='name'
          label='Nome'
          required
          className='bg-blue-300'
        ></Input>
        <Input type='email' label='Email' required></Input>
        <Input type='text' label='Mensagem' required></Input>
      </form>
    </section>
  );
}
