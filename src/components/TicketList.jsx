import TicketItem from '../components/TicketItem';

const TicketList = ({tickets, updateStatus, deleteTicket}) => {
  return (
    <div className='ticket__list'>
        { tickets &&
          tickets.map((ticket, i) => (
              <TicketItem 
                key={i} 
                ticket={ticket} 
                updateStatus={updateStatus} 
                deleteTicket={deleteTicket}>  
              </TicketItem>
          ))
        }
    </div>
  )
}

export default TicketList
