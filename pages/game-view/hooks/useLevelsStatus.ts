import create from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { UndoState, undoMiddleware } from "zundo";
import { Level } from "../../game-builder/hooks/useLevels";
import useUserData from "./useUserData";


export type LevelStatus = {
    status:'notReady' | 'ready' | 'success' | 'fail';
    type:string,
    win:boolean|null,
    levelTime:number,
    levelScore:number,
}



export interface LevelsStatus extends Partial<UndoState>{
    levels:Level[];
    levelsStatus:LevelStatus[];
    time:number;
    setWin:(isWin:boolean)=>void;
    setTime:(time:number)=>void;
    setInitialLevels:(levels:Level[])=>void;
    setInitialLevelsStatus:(levelsStatus:LevelStatus[])=>void;
    setSelectedLevel:(selectedLevelIndex:number)=>void;
    setDialogBoxIsOpen:(phraseIndex:number)=>void;

}



const useLevelsStatus = create<LevelsStatus>()(
    devtools(
        undoMiddleware(
          immer((set) => ({
            levels:[],
                levelsStatus:[],
                time:3000,
                setWin:(isWin)=>{set((state)=>
                    {
                        const currentLevelIndex=state.levels.findIndex(
                            (level:Level) => level.isSelected == true
                          );
                        state.levelsStatus[currentLevelIndex].win=isWin;
                        state.levelsStatus[currentLevelIndex].win == false?state.levelsStatus[currentLevelIndex].status='fail':state.levelsStatus[currentLevelIndex].status='success';
                        
                    }
                ),false,'game-view/set-win'},
                setTime:(time)=>{set((state)=>{state.time=time}),false,'game-view/set-time'},
                setInitialLevels:(levels)=>{set((state)=>{state.levels=levels}),false,'game-view/set-levels'},
                setInitialLevelsStatus:(levelsStatus)=>{set((state)=>{state.levelsStatus=levelsStatus}),false,'game-view/set-levels-status'},
                setSelectedLevel:(index)=>{set((state)=>{
                    state.levels.forEach((lev:Level)=>{lev.isSelected=false});
                    state.levels[index].isSelected=true;
                }),false,'game-view/set-selected-level'},
                setDialogBoxIsOpen:(index)=>{set((state)=>{
                    const currentLevelIndex=state.levels.findIndex(
                        (level:Level) => level.isSelected == true
                      );
                      const dialog =state.levels[currentLevelIndex].dialogBox.phrase[index].dialog; 
                     if( dialog?.isOpen == true) {
                      dialog!.isOpen=false}else{
                      state.levels[currentLevelIndex].dialogBox.phrase.forEach((ph)=>{
                        if(ph.dialog !== null) { ph.dialog.isOpen=false} ;
                      })
                      dialog!.isOpen=true;}
                },false,'game-view/set-dialogbox-isopen')}

          }))
          )
          )
)


// const useLevelsStatus = create<LevelsStatus>((set)=>({
//     levels:[],
//     levelsStatus:[],
//     time:3000,
//     setWin:(levelIndex,iswin)=>{set((state)=>({levelsStatus:[...state.levelsStatus].}))},
//     setTime:(time)=>{set(()=>({time:time}))},
//     setInitialLevels:(levels)=>{set(()=>({levels:levels}))},
//     setInitialLevelsStatus:(levelsStatus)=>{set(()=>({levelsStatus:levelsStatus}))}
// }))

export default useLevelsStatus;