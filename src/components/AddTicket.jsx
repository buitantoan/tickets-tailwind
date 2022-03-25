import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


const AddTicket = ({addTicket}) => {

    const [title, setTitle] = useState('');
    const [des, setDes] = useState('');
    const [time, setTime] = useState('');
    const [status, setStatus] = useState('open');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!title) {
            alert('Please add a Ticket');
            return;
        }

        addTicket( {title, des, status, time} );

        setTitle('');
        setDes('');
        setStatus('open');
        setTime('');
    }

    return (
        <form 
            className='add-ticket max-w-xl mx-auto group rounded-md p-4 bg-white ring-1 ring-slate-200 shadow-sm'
            onSubmit={onSubmit}    
        >
            <div className='form-control'>
                <label>Title</label>
                <input 
                    type='text' 
                    placeholder='Add Title'
                    className='appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm'
                    value={title}
                    onChange={(e) => setTitle(
                        e.target.value
                    )}
                />
            </div>
            <div className='form-control'>
                <label>Description</label>
                <input 
                    type='text' 
                    placeholder='Add Description'
                    className='appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm'
                    value={des}
                    onChange={(e) => setDes(
                        e.target.value
                    )}
                />
            </div>
            <div className='form-control'>
                <label htmlFor="status">Status</label>
                <select 
                    name="status" 
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(
                        e.target.value
                    )}
                >
                    <option value='open'>Open</option>
                    <option value='in-progress'>In-progress</option>
                    <option value='completed'>Completed</option>
                </select>
            </div>
            <div className='form-control'>
                <label>Time</label>
                <input 
                    type='text' 
                    placeholder='Add Time'
                    className='appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm'
                    value={time}
                    onChange={(e) => setTime(
                        e.target.value
                    )}
                />
            </div>
            
            <div className='form-control'>
                <input 
                    className='btn btn--primary mt-4' 
                    type='submit' 
                    value='Save Ticket'
                />
            </div>

        </form>
    );
};


AddTicket.propTypes = {
    addTicket : PropTypes.func,
};


export default AddTicket;
