import { Section, TextField } from 'cx/widgets';
import { LabelsLeftLayout } from 'cx/src/ui';
import MaskInputField from '../../components/cx-mask-input-field';

export default (
   <cx>
      <div class="bg-gray-50 overflow-auto">
         <div class=" w-[1000px] mx-auto my-16 text-gray-700 bg-white px-20 py-16 border rounded relative">
            <h1 class="text-5xl font-bold">Mask Input Field</h1>
            <p class="mt-2 text-gray-400 text-lg">Package: react-input-mask</p>

            <p class="mt-12 text-lg text-gray-700">
               When you need to have a mask on your input field, you can use this component. Unfortunately, the regex is
               not yet supported.
            </p>
            <div class="mt-5" layout={LabelsLeftLayout}>
               <MaskInputField
                  label="IP Address"
                  value-bind="data"
                  maskPlaceholder="-"
                  mask="+4\\9 999 999 999"
                  alwaysShowMask
               />
            </div>
         </div>
      </div>
   </cx>
);
