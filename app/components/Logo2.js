import { Icon, Link } from 'cx/widgets';
import '../icons/index';

export const Logo2 = ({ className }) => (
   <cx>
      <Link href="~/" class="flex items-center" className={className}>
         <div class="p-2 rounded-full bg-red-600 text-white">
            <Icon name="view-grid-add" class="w-6 h-6 block" />
         </div>
         <div class="ml-3 text-lg font-bold text-red-600">CxJs Showcase</div>
      </Link>
   </cx>
);
