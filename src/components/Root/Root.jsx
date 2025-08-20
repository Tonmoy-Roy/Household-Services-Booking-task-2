import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <div className="w-screen relative left-1/2 -ml-[51vw] -mb-4">
                <Footer />
            </div>
        </div>
    );
};

export default Root;