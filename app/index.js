import { Store } from 'cx/data';
import { Url, History, Widget, startHotAppLoop, enableCultureSensitiveFormatting } from 'cx/ui';
import { Timing, Debug } from 'cx/util';

import './data/mock-api-service-worker';

enableCultureSensitiveFormatting();

//store
const store = new Store({
   data: {},
});

//Remove in the latter stage of the project
window.store = store;

//routing
//Url.setBaseFromScript("app*.js");
History.connect(store, 'url');

//debug
Widget.resetCounter();
Timing.enable('app-loop');
Debug.enable('app-data');

//app loop
import Routes from './routes';

startHotAppLoop(module, document.getElementById('app'), store, Routes);
