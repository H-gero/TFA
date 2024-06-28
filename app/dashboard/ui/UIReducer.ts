import { UIState } from "./UIProvider";

type UIActionType = 
| { type: 'UI - Open Sidebar'}
| { type: 'UI - Close Sidebar'} 
| { type: 'UI - Start Dragging'}
| { type: 'UI - End Dragging'}

export function UIReducer( state: UIState, action: UIActionType){
    switch (action.type) {
        case 'UI - Open Sidebar':
            return{
                ...state,
                sidemenuOpen: true,
            }
            case 'UI - Close Sidebar':
                return{
                    ...state,
                    sidemenuOpen: false,
                }
            case 'UI - Start Dragging':
                return{
                    ...state,
                    isDragging: true
                }
            case 'UI - End Dragging':
                return{
                    ...state,
                    isDragging: false
                }
        default:
            return state;
    }
}