import { LabelsLeftLayout } from 'cx/src/ui';
import { mainTitleStyle } from '../../common/styleClasses';
import { Md } from '../../components/markdown';

export default (
   <cx>
      <div class="bg-gray-50 overflow-auto">
         <div class=" w-[1000px] text-gray-700 bg-white px-20 py-16 relative">
            <h2 className={mainTitleStyle}>Markdown</h2>
            <p class="mt-2 text-gray-400 text-lg">Package: marked</p>

            <p class="mt-12 text-md text-gray-700">...</p>

            <div class="my-5" layout={LabelsLeftLayout}>
               <Md> Naslov Podnaslov [test](https://github.com/)</Md>
            </div>
         </div>
      </div>
   </cx>
);
