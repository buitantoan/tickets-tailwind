import { useState } from 'react';
import { Link } from 'react-router-dom'
import Button from './Button';
import UpdateTicket from './UpdateTicket';

const TicketItem = ({ticket, updateTicket, deleteTicket }) => {

    const [showUpdateTicketForm, setShowUpdateTicketForm] = useState(false);

    const date = ticket.created;

    return (
        <div className='ticket___item p-5 text-left bg-white rounded-md ring-1 ring-slate-200 shadow-sm'>
            <div className='ticket___item-header'>
                <div className='ticket___item-id text-2xl font-medium'>Id: {ticket.id}</div>
            </div>
            <div className='ticket__item-content'>
                <div className='ticket__item-title font-medium hover:text-blue'>
                    <Link to={`/tickets/${ticket.id}`}>
                        Title: {ticket.title}
                    </Link>
                </div>
                <div className='ticket__item-description'>Description: {ticket.des}</div>
                <div className='ticket___item-status'>Status: {ticket.status}</div>
                <div className='ticket__item-date'>Date: {date}</div>
            </div>
            <div className='ticket__item-bottom pt-5'>
                <div className='ticket__item-action flex space-x-3 '>
                    <Button btnClass='text-md px-4 py-2 font-medium rounded-md bg-black text-white hover:text-active' text='Update' onClick={() => setShowUpdateTicketForm(!showUpdateTicketForm)} ></Button>
                    <Button btnClass='text-md px-4 py-2 font-medium rounded-md bg-black text-white hover:text-active' text='Delete' onClick={() => deleteTicket(ticket.id)} ></Button>
                </div>
            </div>
            {showUpdateTicketForm && (
                <UpdateTicket 
                    checkShowForm={showUpdateTicketForm}
                    onShowForm={setShowUpdateTicketForm}
                    ticket={ticket}
                    updateTicket={updateTicket}
                />
            )}
        </div>
    );
}

export default TicketItem;
