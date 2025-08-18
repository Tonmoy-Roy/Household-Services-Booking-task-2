import React, { useEffect, useState } from 'react';
import GadgetCard from '../GadgetCard/GadgetCard';

const Gadgets = () => {
    const [Gadget, setGadgets] = useState([]);
    useEffect(() => {
        fetch('gadgetdata.json')
            .then(res => res.json())
            .then(data => setGadgets(data))
    }, [])
    return (
        <div>
            <p className='text-center text-3xl mt-[15vh] font-bold '>What We Offer</p>
            <div className='grid md:grid-cols-3'>
                {
                    Gadget.map(gadget=><GadgetCard gadget={gadget}></GadgetCard>)
                }
            </div>
        </div>
    );
};

export default Gadgets;