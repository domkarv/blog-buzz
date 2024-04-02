import ProfileAvatar from './profile-avatar';
import { ToggleTheme } from './theme-toggle';
import WriteButton from './write-button';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='container flex flex-row items-center justify-between px-0 py-4'>
      <Link href='/'>
        <h1 className='text-xl font-bold text-primary'>Blog Buzz</h1>
      </Link>
      <div className='flex flex-row items-center gap-2'>
        <Link href='/write'>
          <WriteButton />
        </Link>
        <Link href='/bbu/username'>
          <ProfileAvatar />
        </Link>
        <ToggleTheme />
      </div>
    </nav>
  );
}
