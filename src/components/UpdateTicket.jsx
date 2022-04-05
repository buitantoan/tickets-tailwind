import { useState } from 'react';
import PropTypes from 'prop-types';
import Form from './Form'

const UpdateTicket = ({checkShowForm, onShowForm, ticket, updateTicket}) => {

    const [title, setTitle] = useState(ticket.title);
    const [des, setDes] = useState(ticket.des);
    const [status, setStatus] = useState(ticket.status);

    const showForm = () => {
        onShowForm(!checkShowForm);
    }

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

        updateTicket( {id: ticket.id, title, des, status} );
        showForm();
    }

    return (
        <div className="modal fade fixed top-0 left-0 bg-gray-600 bg-opacity-50 w-full h-full overflow-x-hidden overflow-y-auto"
            id="formModal">
            <div className="modal-dialog relative max-w-xl mx-auto">
                <button onClick={showForm} className='absolute top-0 right-0 px-4 py-2 bg-black text-white hover:bg-blue-400'>Close</button>
                <Form 
                    onSubmit={onSubmit}
                    onTitle={onTitle}
                    onDes={onDes}
                    onStatus={onStatus}
                    title={title}
                    des={des}
                    status={status}
                    textSubmit='Update Ticket'
                />
            </div>
        </div>
    );
}

UpdateTicket.propTypes = {
    updateTicket : PropTypes.func,
};

export default UpdateTicket;