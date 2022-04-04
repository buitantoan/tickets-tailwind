import { Fragment , useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'

const Tickets = () => {

    const { id } = useParams(); 
    const [ticket, setTicket] = useState([]);
    const fetchTicket = async () => {
        const res = await fetch(`http://localhost:5000/tickets/${id}`);
        const data = await res.json();
        
        return data;
    }

    useEffect( async () => {
        const data = await fetchTicket();
        setTicket(data);

    }, []);

    return (
        <Fragment>
            <section className='section py-14'>
                <div className='container mx-auto'>
                    <h1 className='text-5xl font-medium mb-4'>Ticket</h1>
                    {ticket.id ? (
                        <div className='ticket__box'>
                            <div className='ticket__detail'>
                                <h3 className='font-medium mb-1 text-xl'>ID: {ticket.id}</h3>
                                <h2 className='font-medium mb-2 text-2xl'>Title : {ticket.title}</h2>
                                <p className='font-medium mb-1 text-xl'>Description: {ticket.des}</p>
                                <div className='font-medium mb-1 text-xl'>
                                    Status: <strong>{ticket.status}</strong> of (open, in-progress, completed)
                                </div>
                                <div className='font-medium mb-1 text-xl'>created timestamp : {ticket.created}</div>
                            </div>
                            <div className='mt-4 text-xl font-medium text-blue hover:text-primary'>
                                <Link to='/'>Back to home</Link>
                            </div>  
                        </div>
                    ) : (
                        <div className='text-3xl'>Ticket not found!</div>
                    )}

                </div>
            </section>
        </Fragment>
    );
}

export default Tickets;
