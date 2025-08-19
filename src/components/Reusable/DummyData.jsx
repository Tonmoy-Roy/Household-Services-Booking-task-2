import React, { useEffect, useState } from 'react';
import GadgetCard from '../GadgetCard/GadgetCard';

const DummyData = () => {
    const [Gadget, setGadgets] = useState([]);
    useEffect(() => {
        fetch('servicedata.json')
            .then(res => res.json())
            .then(data => setGadgets(data))
    }, [])
    return (
        <div>
            <p className='text-center text-3xl p-10 font-bold '>What We Offer</p>
            <div className='grid md:grid-cols-3'>
                {
                    Gadget.map(gadget=><GadgetCard gadget={gadget}></GadgetCard>)
                }
            </div>
        </div>
    );
};

export default DummyData;