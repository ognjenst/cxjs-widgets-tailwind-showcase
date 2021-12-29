import { ContentResolver, FirstVisibleChildLayout } from 'cx/ui';
import { DocumentTitle, PureContainer, RedirectRoute, Route } from 'cx/widgets';
import Welcome from './welcome';
import { CheckerLayout } from '../layout/CheckerLayout';
import { SandboxedRoute } from '../components/SandboxedRoute';
import { PageNotImplemented } from '../components/PageNotImplemented';
import MaskField from './mask-field';
import Froala from "./froala"

export default () => (
   <cx>
      <FirstVisibleChildLayout>
         <RedirectRoute route="~/" redirect="~/welcome" url-bind="url" />

         <CheckerLayout>
            <SandboxedRoute route="~/welcome">
               <Welcome />
            </SandboxedRoute>

            <Route route="~/mask-field" url-bind="url" prefix>
               <MaskField />
            </Route>

            <Route route="~/froala" url-bind="url" prefix>
               <Froala />
            </Route>

            <Route route="~/markdown" url-bind="url" prefix>
               <PageNotImplemented />
            </Route>

            <Route route="~/codemirror" url-bind="url" prefix>
               <PageNotImplemented />
            </Route>
         </CheckerLayout>
      </FirstVisibleChildLayout>

      <ContentResolver
         params={1}
         onResolve={() => import(/* webpackChunkName: "overlays" */ '../overlays').then((x) => x.default)}
      />
      <DocumentTitle append text="CxJs Showcase" separator=" | " />
   </cx>
);
