import { LabelsLeftLayout } from 'cx/src/ui';
import { mainTitleStyle } from '../../common/styleClasses';
import {Froala} from '../../components/FroalaField';

export default (
   <cx>
      <div class="bg-gray-50 overflow-auto">
         <div class=" w-[1000px] text-gray-700 bg-white px-20 py-16 relative">
            <h2 className={mainTitleStyle}>Froala WYSIWYG - Rich Text Editor</h2>
            <p class="mt-2 text-gray-400 text-lg">Package: react-froala-wysiwyg</p>

            <p class="mt-12 text-md text-gray-700">Rich Text Editor wrapped in CX.</p>

            <div class="my-5" layout={LabelsLeftLayout}>
               <Froala />
            </div>
         </div>
      </div>
   </cx>
);
