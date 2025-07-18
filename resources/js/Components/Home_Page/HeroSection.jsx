import { Link } from "@inertiajs/react";
import buTorch from '@/assets/BU_Torch_of_Wisdom.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


export default function HeroSection() {
    return (
        <section className="relative bg-cover bg-center min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center p-4 shadow-lg" id="home">
            <img src={buTorch} alt="BU Torch" className="absolute inset-0 w-full h-full object-cover opacity-70" />

            <div className="absolute inset-0 bg-white mix-blend-multiply opacity-66"></div>

            
            <div className="absolute top-4 right-4 flex gap-2 text-sm text-black bg-white/30 backdrop-blur-md rounded-lg p-4 shadow-lg">
                
                <div className="self-stretch flex items-center">
                    <FontAwesomeIcon icon={faLocationDot} className="text-blue-700 text-lg" />
                </div>

                <div className="leading-snug">
                    Rizal Street, Legazpi City,<br />
                    Albay, Legazpi, Philippines
                </div>
            </div>

            <div className="relative z-10 text-white">
                <h1 className="font-raleway text-3xl sm:text-4xl md:text-5xl font-extrabold lg:text-6xl leading-tight mb-6 drop-shadow-2xl text-center text-black">
                    <p className="font-normal text-5xl">Welcome to the Official Website of the <br /></p>
                    <span>
                        <span style={{ color: '#0F4C81' }}>BICOL</span>{' '}
                        <span style={{ color: '#FE7800' }}>UNIVERSITY</span>
                    </span>
                    <br />
                    <span style={{ color: '#000000' }}>International Relations Office</span>

                </h1>


                {/* Container for the call-to-action buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    {/* Apply Now Button */}
                    <button
                        className="bg-orange-600 hover:bg-orange-700 text-gray-100 font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                        onClick={() => console.log('Apply Now clicked!')} // Placeholder for actual navigation
                    >
                        Apply Now
                    </button>

                    {/* Track Your Application Button */}
                    <button
                        className="bg-orange-400 hover:bg-orange-500 text-gray-100 border border-orange-400 font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                        onClick={() => console.log('Track Your Application clicked!')}
                        >
                        Track Your Application
                    </button>

                </div>

            </div>
        </section>
    );
}