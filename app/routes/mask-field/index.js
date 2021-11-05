import { LabelsLeftLayout } from 'cx/src/ui';
import MaskInputField from 'cx-mask-input-field';

const pillStyle = 'w-64 py-1 px-2 rounded text-md bg-gray-200 text-gray-700 text-center mb-3';
const textStyle = 'text-md text-gray-700 mb-3';
const mainTitleStyle = 'text-5xl font-bold';
const subTitleStyle = 'mt-12 pb-3 mb-3 text-2xl font-bold border-b-2';

export default (
   <cx>
      <div class="bg-gray-50 overflow-auto">
         <div class=" w-[1000px] text-gray-700 bg-white px-20 py-16 relative">
            <h2 className={mainTitleStyle}>Mask Input Field</h2>
            <p class="mt-2 text-gray-400 text-lg">Package: react-input-mask</p>

            <p class="mt-12 text-md text-gray-700">
               When you need to have a mask on your input field, you can use this component. Unfortunately, the regex is
               not yet supported. You need to bind the value to the store!
            </p>

            <div class="my-5" layout={LabelsLeftLayout}>
               <MaskInputField
                  label="Phone number"
                  value-bind="data"
                  maskPlaceholder="-"
                  mask="+4\\9 999 999 999"
                  alwaysShowMask
               />
            </div>

            <h3 className={subTitleStyle}>Install</h3>
            <p className={textStyle}>
               Mask Input Field can be installed with both Yarn and NPM:
            </p>
            <span className={pillStyle} class="block">yarn add cx-mask-input-field</span>
            <span className={pillStyle} class="block">npm install cx-mask-input-field</span>

            <p class="font-bold">You need to change the following loder in webpack.config.js:</p>
            <p class="font-bold">Into:</p>

            <h3 className={subTitleStyle}>Properties</h3>
            <div class="mb-3">
               <span className={pillStyle}>mask</span> :
               <span className={pillStyle}>string</span>
            </div>
            <p className={textStyle}>Mask string. Default format characters are:</p>

            <div class="mb-3">
               <span className={pillStyle}>9</span> :
               <span className={pillStyle}>0-9</span>
            </div>
            <div class="mb-3">
               <span className={pillStyle}>a</span> :
               <span className={pillStyle}>A-Z, a-z</span>
            </div>
            <div class="mb-3">
               <span className={pillStyle}>*</span> :
               <span className={pillStyle}>A-Z, a-z, 0-9</span>
            </div>
            <p className={textStyle}>Any character can be escaped with a backslash. It will appear as a double backslash in JS strings. For example, a German phone mask with unremoveable prefix +49 will look like</p>

            <div class="mb-3">
               <span className={pillStyle}>maskPlaceholder</span> :
               <span className={pillStyle}>string</span>
            </div>

            <p className={textStyle}>Character to cover unfilled parts of the mask. Default character is "_". If set to null or empty string, unfilled parts will be empty as in ordinary input.</p>

            <h3 className={subTitleStyle}>Packages and Libraries</h3>
            <p class="font-bold">react-input-mask</p>
            <p className={textStyle}>
               Component is based on <a class="text-blue-600" target="_blank" href="https://www.npmjs.com/package/react-input-mask">react-input-mask</a> component, which is wrapped in CxJS Widget. This makes it functional out-of-the-box, once you have bind value in the store.
            </p>
         </div>
      </div>
   </cx>
);
