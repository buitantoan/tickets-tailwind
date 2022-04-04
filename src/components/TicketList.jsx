import TicketItem from '../components/TicketItem';

const TicketList = ({tickets, updateTicket, deleteTicket}) => {
  return (
    <div className='ticket__list grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
        { tickets &&
          tickets.map((ticket, i) => (
              <TicketItem 
                key={i} 
                ticket={ticket} 
                updateTicket={updateTicket} 
                deleteTicket={deleteTicket}
              >  
              </TicketItem>
          ))
        }
    </div>
  )
}

export default TicketList
