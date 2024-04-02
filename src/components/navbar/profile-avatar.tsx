import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export default function ProfileAvatar() {
  return (
    <Avatar className='size-6 cursor-pointer'>
      <AvatarImage src='https://github.com/domkarv.png' alt='BB' />
      <AvatarFallback className='font-bold'>BB</AvatarFallback>
    </Avatar>
  );
}
