import { useState , useEffect } from 'react';
import TicketList from '../components/TicketList';
import Usefetch from '../hook/useFetch';
import AddTicket from '../components/AddTicket';
import Button from '../components/Button';


const HomePage = () => {
    
    const ticketsList = Usefetch();
    const [showAddTicketForm, setShowAddTicketForm] = useState(false);
    const [tickets, setTickets] = useState([]);
    // console.log(ticketsList);
    useEffect( () => {
        
        const timer = setTimeout(() => {
            setTickets(ticketsList);
        }, 1000);

        return () => clearTimeout(timer);
    }, [])
    
    const addTicket = async (ticket) => {

        const res = await fetch('http://localhost:5000/tickets', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify(ticket),
        });

        const data = await res.json();

        setTickets([...tickets, data]);

        // const id = Math.floor(Math.random() * 10000) + 1;
        // const newTicket = { id, ...ticket};
        // setTickets( [...tickets, newTicket] );
    }
 

    const deleteTicket = (id) => {
        setTickets(tickets.filter( (ticket) => ticket.id !== id ));
    }

    const updateStatus = (id, status) => {
        setTickets(
            tickets.map( (ticket) => {
                if(ticket.id === id){
                    if(ticket.status !== 'completed') 
                        return { ...ticket, status : status }
                    else
                        if( status === 'in-progress' )
                            return ticket;
                        else 
                            return { ...ticket, status : status }
                }

                return ticket;
            })
        );
        
    }

    return (
        <>
            <section>
                <div className='container mx-auto'>
                    <h1 className='text-3xl'>Tickets Tracker</h1>
                    <div className='tickets__container'>
                        <div className='tickets__header'>
                            <h2 className='text-2xl'>Tickets</h2>
                            <Button btnClass={`btn mb-4 ${!showAddTicketForm ? 'btn--primary' : 'btn--secondary'}`} text={(!showAddTicketForm)? 'Add' : 'Close' } onClick={() => setShowAddTicketForm(!showAddTicketForm)}></Button>
                        </div>
                        { showAddTicketForm && <AddTicket addTicket={addTicket} />}
                        <div className='tickets__wrapper'>
                            {tickets.length > 0 ? (
                                <TicketList 
                                    tickets={tickets} 
                                    updateStatus={updateStatus} 
                                    deleteTicket={deleteTicket}>
                                </TicketList>
                            ) : (
                                'No Tickets To Show'
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
        
    );
}

export default HomePage;
