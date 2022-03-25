import { useState , useEffect } from 'react';

const Usefetch = ( ) => {

    const [ticketsData, setTicketsData] = useState([]);

    const fetchTickets = async () => {
        const res = await fetch('http://localhost:5000/tickets');
        const data = await res.json();

        return data;
    }

    useEffect( async () => {

        const getTickets = async () => {
            const ticketsFromServer = await fetchTickets();
            setTicketsData(ticketsFromServer);
        }

        getTickets();
       
    }, []);

    return  ticketsData;
}

export default Usefetch;
