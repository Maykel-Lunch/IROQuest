import {Link} from '@inertiajs/react';
import iroLogo from '@/assets/IROLogo.png';

export default function AboutSection() {
  return (
    <section
      className="
        flex            // Enables flexbox
        flex-col        // Stacks items vertically on small screens
        lg:flex-row     // Switches to horizontal on large screens and up
        items-center    // Centers items vertically when stacked
        lg:items-start  // Aligns items to the start (top) when horizontal
        py-20           // Vertical padding (80px)
        px-4            // Horizontal padding (16px)
        md:px-8         // More horizontal padding on medium screens (32px)
        max-w-6xl       // Max width of 1152px
        mx-auto         // Centers the section horizontally
        mt-10           // Add some top margin to ensure space from the achievement box
      "
    >
      <div className="flex-shrink-0 mb-8 lg:mb-0 lg:mr-10 max-w-[250px] w-full"> 
        <img src={iroLogo} alt="International Relations Office Graphic" className="w-full h-auto block" /> 
      </div>
      <div className="flex-grow text-center lg:text-left"> 
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            INTERNATIONAL RELATIONS OFFICE{' '}
            <span className="font-normal italic">(Formerly Global Linkage Office)</span>
        </h2>

        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
          Internationalization at Bicol University is anchored from its vision, mission, and quality policy in order to strategically maximize the transnational experience of its stakeholders towards broadening their horizons and fostering their capabilities; and comprehensively develop potential synergies arising from collaborative partnerships with its global allies.
        </p>
        <button
          className="
            bg-orange-500   // Orange background
            hover:bg-orange-600 // Darker orange on hover
            text-white      // White text
            font-bold       // Bold font
            py-3            // Vertical padding (12px)
            px-6            // Horizontal padding (24px)
            rounded         // Slightly rounded corners
            focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 // Focus styles
          "
        >
          Learn More...
        </button>
      </div>
    </section>
  );
}
