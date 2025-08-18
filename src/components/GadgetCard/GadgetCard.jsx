import React from 'react';

const GadgetCard = ({ gadget = {} }) => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img className='h-[35vh]'
                    src={gadget.image_url}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {gadget.service_name}
                </h2>
                <p className='text-left'>{gadget.description}</p>
                <p className='btn btn-outline btn-primary'>Book Now</p>
            </div>
        </div>
    );
};

export default GadgetCard;