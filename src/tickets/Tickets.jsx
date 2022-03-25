import React from 'react';

const Tickets = () => {

    return (
        <>
            <section className='section'>
                <div className='container mx-auto'>
                    <h1 className='text-3xl'>Ticket</h1>
                    <div className='ticket__detail'>
                        <h3>ID</h3>
                        <h2>Title</h2>
                        <p>Description</p>
                        <div>
                            Status:  (open, in-progress, completed)
                        </div>
                        <span>created timestamp</span>
                    </div>  
                </div>
            </section>
        </>
    );
}

export default Tickets;
