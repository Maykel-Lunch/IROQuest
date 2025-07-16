import { Link } from '@inertiajs/react';
import buLogo from '@/assets/BULogo.png'; 

export default function FooterSection() {
  return (
    <footer className="bg-blue-900 text-gray-200 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Column 1: Logo & Contact Information */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center mb-6">
            <img src={buLogo} alt="Bicol University Logo" className="h-16 w-auto mr-4" />
            <div>
              <h3 className="text-3xl font-extrabold text-white mb-1">BICOL UNIVERSITY</h3>
              <p className="text-orange-400 text-lg font-semibold tracking-wide">
                <span className="text-white">Contact </span>Information
              </p>
            </div>
          </div>
          <p className="mb-2">Email: <a href="mailto:bu-cpro@bicol-u.edu.ph" className="underline hover:text-white">bu-cpro@bicol-u.edu.ph</a></p>
          <p className="mb-2"><a href="mailto:gpc@bicol-u.edu.ph" className="underline hover:text-white">gpc@bicol-u.edu.ph</a></p>
          <p className="mb-2"><a href="/sitemap" className="underline hover:text-white">Sitemap</a></p>
          <p className="mb-4"><a href="/privacy-policy" className="underline hover:text-white">Privacy Policy</a></p>
          <p>&copy; {new Date().getFullYear()} Bicol University.</p>
          <p>All rights reserved.</p>
        </div>

        {/* Column 2: Google Map */}
        <div className="flex justify-center md:justify-start lg:col-span-1">
          {/* Embedding a responsive Google Map */}
          <div className="w-full max-w-md h-64 md:h-72 bg-gray-300 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.494793617307!2d123.73809627506941!3d13.137882287236594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a1e948c3b1a8d5%3A0x6b1c2b5d4e1f7a0!2sBicol%20University!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph" // Replace with actual embed code or a more specific location
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bicol University Location"
            ></iframe>
          </div>
        </div>

        {/* Column 3: Quick Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left lg:col-span-1">
          <h3 className="text-3xl font-extrabold text-white mb-6">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="https://studentportal.bicol-u.edu.ph/" target="_blank" rel="noopener noreferrer" className="hover:underline">BU Student Portal</a></li>
            <li><a href="#" className="hover:underline">Faculty Center</a></li>
            <li><a href="#" className="hover:underline">University Calendar</a></li>
            <li><a href="#" className="hover:underline">BU LMS</a></li>
            <li><a href="#" className="hover:underline">e-Journal</a></li>
            <li><a href="#" className="hover:underline">e-Library</a></li>
            <li><a href="#" className="hover:underline">BDR Resolutions</a></li>
            <li><a href="#" className="hover:underline">BU ICTO Services</a></li>
            <li><a href="#" className="hover:underline">Bids and Awards</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
