import React from 'react'

function Form({onSubmit, onTitle, onDes, onStatus, title, des, status, textSubmit }) {


  return (
    <form 
        className='add-ticket max-w-xl mx-auto group rounded-md mt-4 p-4 pt-10 bg-white ring-1 ring-slate-200 shadow-sm'
        onSubmit={onSubmit}    
    >
        <div className='form-control text-left mb-4'>
            <label>Title</label>
            <input 
                type='text' 
                placeholder='Add Title'
                className='appearance-none w-full text-md leading-6 text-slate-900 placeholder-slate-400 rounded-md mt-3 px-4 py-3 ring-1 shadow-sm'
                value={title}
                onChange={onTitle}
            />
        </div>
        <div className='form-control text-left mb-4'>
            <label>Description</label>
            <input 
                type='text' 
                placeholder='Add Description'
                className='appearance-none w-full text-md leading-6 text-slate-900 placeholder-slate-400 rounded-md mt-3 px-4 py-3 ring-1 shadow-sm'
                value={des}
                onChange={onDes}
            />
        </div>
        <div className='form-control text-left'>
            <label htmlFor="status">Status</label>
            <select 
                className='appearance-none w-full mt-3 px-4 py-3 rounded-md bg-select select'
                name="status" 
                id="status"
                value={status}
                onChange={onStatus}
            >
                <option value='open'>Open</option>
                <option value='in-progress'>In-progress</option>
                <option value='completed'>Completed</option>
            </select>
        </div>
        
        <div className='form-control'>
            <input 
                className='btn mt-4 text-white hover:text-blue-500 cursor-pointer' 
                type='submit' 
                value={textSubmit}
            />
        </div>

    </form>
  )
}

export default Form