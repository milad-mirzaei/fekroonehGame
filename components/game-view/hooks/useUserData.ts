import create from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { UndoState, undoMiddleware } from "zundo";


export interface UserDataStore extends Partial<UndoState>{
    userHearts:number|null;
    setUserHearts:(num:number)=>void
}

const useUserData = create<UserDataStore>()(
    devtools(
        undoMiddleware(
          immer((set) => ({
            userHearts:null,
            setUserHearts:(num)=>{set((state)=>{
                state.userHearts=num;
            })}
          }))
        )
    )
);
export default useUserData;