import React from 'react';
import Button from './Button';

const TicketItem = ({ticket, updateStatus, deleteTicket }) => {
    return (
        <div className='ticket___item'>
            <div className='ticket___item-header'>
                <div className='ticket___item-id'>Id: {ticket.id}</div>
                <div className='ticket___item-status'>Status: {ticket.status}</div>
            </div>
            <div className='ticket__item-content'>
                <div className='ticket__item-title'>{ticket.title}</div>
                <div className='ticket__item-description'>{ticket.description}</div>
            </div>
            <div className='ticket__item-bottom'>
                <div className='ticket__item-action flex-auto flex space-x-4'>
                    <Button btnClass='text-xl h-10 px-6 px-3 font-semibold rounded-md bg-black text-white' text='Open' onClick={() => updateStatus(ticket.id, 'open')} ></Button>
                    <Button btnClass='text-xl h-10 px-6 px-3 font-semibold rounded-md bg-black text-white' text='In Progress' onClick={() => updateStatus(ticket.id, 'in-progress')} ></Button>
                    <Button btnClass='text-xl h-10 px-6 px-3 font-semibold rounded-md bg-black text-white' text='completed' onClick={() => updateStatus(ticket.id, 'completed')} ></Button>
                    <Button btnClass='btn text-xl' text='Delete' onClick={() => deleteTicket(ticket.id)} ></Button>
                </div>
            </div>
        </div>
    );
}

export default TicketItem;
