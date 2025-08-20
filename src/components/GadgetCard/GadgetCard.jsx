
const GadgetCard = ({ gadget = {} }) => {
    return (
        <div className="shadow-md rounded-2xl md:w-[25vw] overflow-hidden group">
            <figure>
                <img
                    src={gadget.image_url}
                    alt="Cyber-Cafe"
                    className="md:h-[35vh] rounded-lg md:w-[30vw] w-full transition-transform duration-700 group-hover:scale-105"
                />
            </figure>

            <div className="card-body">
                <h2 className="card-title font-bold text-2xl mb-3 md:w-[25vw]">{gadget.service_name}</h2>
                <p className='text-left md:h-[16vh] text-lg text-gray-600 md:w-[20vw]'>{gadget.description}</p>
                <p className='btn btn-outline btn-primary text-base'>Book Now</p>
            </div>
        </div>
    );
};

export default GadgetCard;