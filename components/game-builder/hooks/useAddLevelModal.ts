import {create} from 'zustand'


interface AddLevelModalStore{
    isOpen:boolean;
    index:number|null;
    setIndex:(index:null|number) => void;
    onOpen:(index?:number)=>void;
    onClose:()=>void;
}

const useAddLevelModal = create<AddLevelModalStore>((set)=>({
    isOpen:false,
    index:null,
    setIndex:(index)=>set({index}),
    onOpen:(index)=>set({isOpen:true,index:index}),
    onClose:()=>set({isOpen:false})
}))

export default useAddLevelModal;