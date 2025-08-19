import img1 from "../../assets/fb.png"
import img2 from "../../assets/youtube.png"
import img3 from "../../assets/twitter.png"

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-white py-6">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex justify-center space-y-4 space-x-6 mb-4">
                        <a href=""><img className="mt-4" src={img1} alt="" /></a>
                        <a href=""><img src={img2} alt="" /></a>
                        <a href=""><img src={img3} alt="" /></a>
                    </div>
                    <p class="text-sm">Copyright © 2025 - All right reserved by Roy</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;