import { Section, TextField } from 'cx/widgets';
import MaskInputField from 'cx-mask-input-field';

export default (
   <cx>
      <div class="bg-gray-50 overflow-auto">
         <div class=" w-[1000px] mx-auto my-16 text-gray-700 bg-white px-20 py-16 border rounded relative">
            <h1 class="text-5xl font-bold">CxJS + Tailwind CSS </h1>
            <p class="mt-2 text-gray-400 text-lg">Use CxJS, Tailwind CSS, and Heroicons for success!</p>

            <p class="mt-12 text-lg text-gray-700">
               CxJS and Tailwind CSS mix really well together. CxJS brings JavaScript based application elements such as
               widgets, charts, state management, and routing, while Tailwind CSS offers a way to rapidly combine these
               elements into higher-order visual structures - toolbars, sections, layouts, pages, etc.
            </p>
            <Section>
               <MaskInputField value-bind="data" mask="99.99.99.99" maskPlaceholder="_" />
            </Section>
         </div>
      </div>
   </cx>
);
