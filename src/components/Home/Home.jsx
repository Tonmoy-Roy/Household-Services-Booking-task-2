import bannerimg from "../../assets/banner.jpg"
import Gadgets from "../Reusable/DummyData";
import DummyData from "../Reusable/DummyData";
import FormInput from "../Reusable/FormInput ";
import ServiceCard from "../Reusable/ServiceCard";
const Home = () => {
    return (
        <div>
            <div className="hero rounded-2xl md:h-[60vh] items-start">
                <div className="hero-content">
                    <div className="w-full pt-10">
                        <h1 className="text-5xl font-bold md:w-[900px] mx-auto text-center">
                            Transform Your Home with Expert Care and Trusted Professional Services
                        </h1>
                        <div className='w-full'>
                            <p className="py-6 md:w-[700px] mx-auto text-center">
                                From plumbing to landscaping, connect with top-rated professionals for all your household needs—fast, reliable, and hassle-free.
                            </p>
                        </div>
                        <button className="btn btn-primary rounded-full mt-4 mx-auto block">Get Started</button>
                    </div>
                </div>
            </div>
            <div className='mx-auto flex md:justify-center md:items-center mb-[15vh]'>
                <img className='md:h-[60vh] md:w-[50vw] rounded-2xl' src={bannerimg} />
            </div>
            <Gadgets></Gadgets>
        </div>
    );
};

export default Home;