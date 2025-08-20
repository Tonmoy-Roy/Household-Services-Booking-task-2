import img1 from "../../assets/fb.png"
import img2 from "../../assets/youtube.png"
import img3 from "../../assets/twitter.png"

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-20 md:h-[35vh]">
            <div className="px-4 text-center">
                <div className="flex justify-center flex-wrap gap-4 mb-4">
                    <a href=""><img className="" src={img1} alt="Logo 1" /></a>
                    <a href=""><img src={img2} alt="Logo 2" /></a>
                    <a href=""><img src={img3} alt="Logo 3" /></a>
                </div>
                <p className="text-sm">© 2025 XyneroTech. All rights reserved.</p>
            </div>
        </footer>

    );
};

export default Footer;