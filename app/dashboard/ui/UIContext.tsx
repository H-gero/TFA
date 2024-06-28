import { createContext} from 'react';

export interface ContextProps {
     sidemenuOpen: boolean;
     isDragging: boolean;

     openSideMenu: () => void
     closeSideMenu: () => void
     startDragging: () => void
     endDragging: () => void
}

export const UIContext = createContext({} as ContextProps);