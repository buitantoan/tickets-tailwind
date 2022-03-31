import {Fragment , useState , useEffect } from 'react';
import TicketList from '../components/TicketList';
import AddTicket from '../components/AddTicket';
import Button from '../components/Button';


const HomePage = () => {
    
    const [showAddTicketForm, setShowAddTicketForm] = useState(false);
    const [tickets, setTickets] = useState([]);
 
    const fetchTickets = async () => {
        const res = await fetch('http://localhost:5000/tickets');
        const data = await res.json();
    
        return data;
    }

    const fetchTicket = async (id) => {
        const res = await fetch(`http://localhost:5000/tickets/${id}`);
        const data = await res.json();
    
        return data;
    }
    
    useEffect( async () => {

        const data = await fetchTickets();
        
        const timer = setTimeout(() => {
            setTickets(data);
        }, 1000);

        return () => clearTimeout(timer);
    
    }, []);
    
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

        if (res.status === 201 ) {
            alert('Saved!');
        }
        setShowAddTicketForm(!showAddTicketForm);

        // const id = Math.floor(Math.random() * 10000) + 1;
        // const newTicket = { id, ...ticket};
        // setTickets( [...tickets, newTicket] );
    }
 

    const deleteTicket = async (id) => {
        const check = window.confirm("Delete the ticket?");
        if(!check){
            return;
        }   

        const res = await fetch(`http://localhost:5000/tickets/${id}`, {
            method: 'DELETE',
        });
        
        setTickets(tickets.filter( (ticket) => ticket.id !== id ));
    }

    const updateTicket = async ({id, title, des, status}) => {

        const ticketData = await fetchTicket(id);

        var getTicketStatus = '';
        if(ticketData){
            if(ticketData.status !== 'completed'){
                getTicketStatus = status;
            } 
            else{
                if( status === 'in-progress' ){
                    alert(' Status "completed" does not change "in-progress" ');
                    return ticketData;
                }
                else{
                    getTicketStatus = status;
                }
                    
            }

        }

        const updTicket = { ...ticketData, title: title, des: des, status: getTicketStatus }


        const res = await fetch(`http://localhost:5000/tickets/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type' : 'application/json',
            },
            body: JSON.stringify(updTicket),
        });

        const data = await res.json();

        setTickets(
            tickets.map( (ticket) => {
                if(ticket.id === id){
                    if(ticket.status !== 'completed') 
                        return { ...ticket, title: data.title, des: data.des, status : data.status }
                    else
                        if( status === 'in-progress' )
                            return ticket;
                        else 
                            return { ...ticket, title: data.title, des: data.des, status : data.status }
                }

                return ticket;
            })
        );
        
        
    }

    return (
        <Fragment>
            <section className='py-20'>
                <div className='container mx-auto px-4'>
                    <h1 className='text-5xl font-semibold mb-5'>Tickets Tracker</h1>
                    <div className='tickets__container'>
                        <div className='tickets__header'>
                            <Button 
                                data-toggle="modal" data-target="#formModal"
                                btnClass={`btn bg-black text-white hover:text-active ${!showAddTicketForm ? 'btn--primary' : 'btn--secondary'}`} 
                                text='Add Ticket'
                                onClick={() => setShowAddTicketForm(!showAddTicketForm)}>
                            </Button>
                        </div>
                        { showAddTicketForm && <AddTicket showForm={() => setShowAddTicketForm(!showAddTicketForm)} addTicket={addTicket} />}
                        <div className='tickets__wrapper pt-10'>
                            {tickets.length > 0 ? (
                                <TicketList 
                                    tickets={tickets} 
                                    updateTicket={updateTicket} 
                                    deleteTicket={deleteTicket}>
                                </TicketList>
                            ) : (
                                <div className='error text-3xl font-medium'>'No Tickets To Show'</div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
        
    );
}

export default HomePage;
