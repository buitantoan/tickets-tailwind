import { useState } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';


const AddTicket = ({ showForm ,addTicket}) => {

    const date = new Date();

    const [title, setTitle] = useState('');
    const [des, setDes] = useState('');
    const [created, setCreated] = useState(date.toDateString());
    const [status, setStatus] = useState('open');


    const onTitle = (e) =>{
        setTitle(e.target.value);
    }
    const onDes = (e) =>{
        setDes(e.target.value);
    }
    const onStatus = (e) =>{
        setStatus(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (!title) {
            alert('Field not empty');
            return;
        }

        addTicket( {title, des, status, created} )

        setTitle('');
        setDes('');
        setStatus('');

    }

    return (
        <div className="modal fade fixed top-0 left-0 bg-gray-600 bg-opacity-50 w-full h-full overflow-x-hidden overflow-y-auto"
            id="formModal">
            <div className="modal-dialog relative max-w-xl mx-auto">
                <button onClick={showForm} className='absolute top-0 right-0 px-4 py-2 bg-black text-white'>Close</button>
                <Form 
                    onSubmit={onSubmit}
                    onTitle={onTitle}
                    onDes={onDes}
                    onStatus={onStatus}
                    title={title}
                    des={des}
                    status={status}
                    textSubmit='Save Ticket'
                />
            </div>
        </div>
    );
};


AddTicket.propTypes = {
    addTicket : PropTypes.func,
};


export default AddTicket;
