import React, { useRef } from 'react'
import Inputs from './Inputs'
import Modal from './Modal';

const NewProject = ({onAdd,oncancel}) => {
    const title=useRef();
    const desc=useRef();
    const date=useRef();

    const modal=useRef();
    const handleSave= ()=>{
        const enteredTitle = title.current.value;
        const enteredDesc = desc.current.value;
        const enteredDate = date.current.value;

        //validation
        if(enteredTitle.trim()==='' || enteredDesc.trim()==='' || enteredDate.trim()===''){
            modal.current.open();
            return;
        }


        const projData= {
            title:enteredTitle,
            description: enteredDesc,
            date: enteredDate
        }

        onAdd(projData);
    }
  return (
    <>
    <Modal ref={modal} buttonCaption={"okay"}>
        <h2  className="text-xl font-bold text-stone-500 my-4">
        oops... something is missing
            </h2></Modal>
    <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li>
            <button className="text-stone-800 hover:text-stone-950" onClick={oncancel}>cancel</button>
            </li>
            <li>
            <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>save</button>
            </li>
        </menu>
        <div>
            <Inputs label="title" ref={title}/>
            <Inputs label={"description"} ref={desc}textarea/>
            <Inputs type="date" label={"due date"} ref={date}/>
        </div>
    </div>
    </>
  )
}

export default NewProject