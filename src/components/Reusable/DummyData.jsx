import { useEffect, useState } from 'react';
import GadgetCard from '../GadgetCard/GadgetCard';

const DummyData = () => {
    const [Gadget, setGadgets] = useState([]);
    useEffect(() => {
        fetch('servicedata.json')
            .then(res => res.json())
            .then(data => setGadgets(data))
    }, [])
    return (
        <div className='mb-[10vh]'>
            <p className='text-center text-4xl font-bold mb-10 font-libertinus'>Explore Our Services</p>
            <div className='grid md:grid-cols-3 gap-10'>
                {
                    Gadget.map(gadget=><GadgetCard gadget={gadget}></GadgetCard>)
                }
            </div>
        </div>
    );
};

export default DummyData;