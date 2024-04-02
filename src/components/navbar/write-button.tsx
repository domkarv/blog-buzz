import { Pencil1Icon } from '@radix-ui/react-icons';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

export default function WriteButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className='flex size-8 items-center justify-center rounded-md bg-background hover:bg-accent'>
            <Pencil1Icon fontSize='100' className='size-5' />
          </div>
        </TooltipTrigger>
        <TooltipContent className='bg-accent text-primary shadow-md'>
          <p>Start blogging</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
