'use client'
import { useReducer } from "react";
import { UIContext } from "./UIContext";
import { UIReducer } from "./UIReducer";

export interface UIState {
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
    isAddingEntry: false,
    isDragging: false
}


export default function UIProvider({ children }: Readonly<{
    children: React.ReactNode;
  }>){

    const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

    const openSideMenu = () => {
        dispatch({type: 'UI - Open Sidebar'})
    }

    const closeSideMenu = () => {
        dispatch({type: 'UI - Close Sidebar'})
    }

    const startDragging = () => {
      dispatch({type: 'UI - Start Dragging'});
    }
    
    const endDragging = () => {
      dispatch({type: 'UI - End Dragging'});
    }
  return (
    <UIContext.Provider value={{...state, openSideMenu, closeSideMenu, startDragging, endDragging}}>
        {children}
    </UIContext.Provider>
  )
}


