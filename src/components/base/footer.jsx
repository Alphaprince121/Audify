import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#121212] text-gray-300 py-16">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
                {/* Company Section */}
                <div>
                    <h3 className="text-white font-bold mb-4">Company</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white">About</a></li>
                        <li><a href="#" className="hover:text-white">For the Record</a></li>
                    </ul>
                </div>

                   {/* Useful Links Section */}
                   <div>
                    <h3 className="text-white font-bold mb-4">Useful Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white">Support</a></li>
                        <li><a href="#" className="hover:text-white">Free Mobile App</a></li>
                    </ul>
                </div>

                {/* Communities Section */}
                <div>
                    <h3 className="text-white font-bold mb-4">Communities</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white">For Artists</a></li>
                        <li><a href="#" className="hover:text-white">Developers</a></li>
                        <li><a href="#" className="hover:text-white">Advertising</a></li>
                        <li><a href="#" className="hover:text-white">Investors</a></li>
                        <li><a href="#" className="hover:text-white">Vendors</a></li>
                    </ul>
                </div>

             

                {/* Spotify Plans Section */}
                <div>
                    <h3 className="text-white font-bold mb-4">Spotify Plans</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white">Premium Individual</a></li>
                        <li><a href="#" className="hover:text-white">Premium Duo</a></li>
                        <li><a href="#" className="hover:text-white">Premium Family</a></li>
                        <li><a href="#" className="hover:text-white">Premium Student</a></li>
                        <li><a href="#" className="hover:text-white">Spotify Free</a></li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div>
                    <h3 className="text-white font-bold mb-4">Connect With Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-300 hover:text-white">
                            <FaInstagram className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white">
                            <FaTwitter className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white">
                            <FaFacebook className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
