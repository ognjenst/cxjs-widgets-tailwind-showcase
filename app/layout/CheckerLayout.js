import CxJSLogo from '../../assets/img/cxjs.svg';
import { computable, History } from 'cx/ui';
import {
   Dropdown,
   HighlightedSearchText,
   Icon,
   Link,
   List,
   PureContainer,
   TextField,
} from 'cx/widgets';
import '../icons/index';
import Controller from './Controller';

const NavItem = ({ text, href, tooltip, onClick, className, icon, badge, expanded }) => (
   <cx>
      <Link
         href={href}
         url-bind="url"
         class="hover:bg-blue-100 hover:bg-opacity-50 flex items-center px-3 py-3 text-gray-800 relative font-semibold whitespace-nowrap text-opacity-70 text-[15px] border-l-[3px] border-transparent cursor-pointer"
         className={className}
         activeClass="bg-blue-100 bg-opacity-50 !border-blue-600 !text-blue-600 !opacity-100"
         tooltip={tooltip}
         onClick={onClick}
         match="subroute"
      >
         <Icon name={icon} class="w-7 h-7 ml-3 mr-3" />
         <div text={text} class="flex-grow" />
         <div text={badge} visible={badge} class="text-xs bg-black bg-opacity-20 rounded-full px-3 py-1" />
         <Icon
            name="drop-down"
            class="w-5 h-5 mr-2 transform transition-all opacity-80"
            visible={!!expanded}
            className={{
               'rotate-180': expanded,
            }}
         />
      </Link>
   </cx>
);

const GroupItem = ({ text, href, tooltip, className, icon, badge, children, expanded }) => (
   <cx>
      <NavItem
         href={href}
         text={text}
         tooltip={tooltip}
         className={className}
         icon={icon}
         badge={badge}
         onClick={(e, { store }) => {
            e.preventDefault();
            store.toggle(expanded.bind);
         }}
         expanded={expanded}
      />
      <PureContainer visible={expanded}>{children}</PureContainer>
   </cx>
);

const ChildItem = ({ text, href, badge }) => (
   <cx>
      <NavItem href={href} text={text} className="!pl-16 opacity-80" badge={badge} />
   </cx>
);

export const CheckerLayout = ({ children, nav }) => (
   <cx>
      <div
         class="h-full grid grid-cols-2 grid-rows-2"
         style="grid-template-columns: 250px 1fr; grid-template-rows: auto 1fr"
         controller={Controller}
      >
         <div class="border-r border-b py-2 pl-6 flex">
            <img src={CxJSLogo} class="h-16"/>
         </div>
         <div class="border-b flex">
            <div class="flex-grow">
               <TextField
                  icon="search"
                  placeholder="Search customers, invoices, ..."
                  class="h-full w-full"
                  inputClass="border-transparent rounded-none"
                  focused={{ bind: 'search.visible', debounce: 300 }}
                  trackFocus
                  inputAttrs={{ autoComplete: 'off' }}
                  value={{ bind: 'search.query', debounce: 300 }}
               />
               <Dropdown
                  visible-expr="{search.visible} && {search.query} && {search.results}"
                  offset={5}
                  placementOrder={'down-right'}
                  arrow
                  class="p-4 w-[600px]"
                  matchWidth={false}
               >
                  <div class="text-gray-500 p-4 italic" visible-expr="!{search.results.length}">
                     Could not find any results matching the search query{' '}
                     <span text-bind="search.query" class="font-bold" />.
                  </div>
                  <List
                     records-bind="search.results"
                     itemPad={false}
                     onItemClick={(e, { store }) => {
                        History.pushState({}, null, store.get('$record.url'));
                        store.delete('search');
                     }}
                     grouping={{
                        key: {
                           type: { bind: '$record.type' },
                        },
                        header: (
                           <cx>
                              <div text-bind="$group.type" class="uppercase text-gray-400 text-xs py-1" />
                           </cx>
                        ),
                     }}
                  >
                     <div class="flex p-2 items-center">
                        <div class="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-500">
                           <Icon
                              name={computable('$record.type', (type) => {
                                 switch (type) {
                                    case 'customer':
                                       return 'users';
                                    default:
                                    case 'invoice':
                                       return 'document-text';
                                 }
                              })}
                              class="w-6 h-6"
                           />
                        </div>
                        <div class="ml-4">
                           <div class="text-base">
                              <HighlightedSearchText text-bind="$record.title" query-bind="search.query" />
                           </div>
                           <div class="text-gray-400">
                              <HighlightedSearchText text-bind="$record.text" query-bind="search.query" />
                           </div>
                        </div>
                     </div>
                  </List>
               </Dropdown>
            </div>
         </div>
         <div class="border-r pt-3">
            <NavItem text="Welcome" icon="home" href="~/welcome" />
            <div class="px-6 py-3 pt-6 text-gray-400 text-sm">Text components</div>
            <NavItem text="Mask Input Field" icon="pencil" href="~/mask-field" />
            <NavItem text="Froala" icon="pencil" href="~/froala" />
            <NavItem text="Markdown" icon="hashtag" href="~/markdown" />
            <NavItem text="Codemirror" icon="code" href="~/codemirror" />
         </div>
         {children}
      </div>
   </cx>
);
