import { LabelsLeftLayout } from 'cx/src/ui';
import MaskInputField from 'cx-mask-input-field';
import { Md } from '../../components/markdown';

const pillStyle = 'w-64 py-1 px-2 rounded text-md bg-gray-300 text-gray-700 text-center mb-3';
const textStyle = 'text-md text-gray-700 mb-3';
const mainTitleStyle = 'text-5xl font-bold';
const subTitleStyle = 'mt-12 pb-3 mb-3 text-2xl font-bold border-b-2';

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
