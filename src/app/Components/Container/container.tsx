import '../../Styles/background.css';

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className='background'>{children}</div>;
}
