import TicketItem from '../components/TicketItem';

const TicketList = ({tickets, updateTicket, deleteTicket}) => {
  return (
    <div className='ticket__list grid grid-cols-3 md:grid grid-cols-2 gap-5'>
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
