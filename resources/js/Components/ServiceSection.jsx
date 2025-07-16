import { Link } from "@inertiajs/react";    


export default function ServiceSection() {
  return (
    <section
        className="
            bg-gradient-to-b
            from-blue-500
            via-blue-100
            to-[#E0F7FF]
            text-black
            font-poppins
            py-20
            px-4
            md:px-8
        "
    >
      <div className="max-w-6xl mx-auto"> 
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center md:text-left"> 
          Services Offered
        </h2>

        {/* Inbound Mobility Block */}
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between mb-16">
            {/* Text Block - left */}
            <div className="md:w-3/4 text-center md:text-left">
                <h3 className="text-3xl font-semibold mb-4">Inbound Mobility</h3>
                <p className="text-lg leading-relaxed">
                Thinking of joining Bicol University from another country? Whether you're here for a semester,
                a short-term program, or a research visit, this section is for those who are arriving to
                experience what BU has to offer. You'll find guidance on applications, requirements, and what
                to expect as you become part of our vibrant academic and cultural community.
                </p>
            </div>

            {/* Button - right, vertically centered */}
            <div className="md:w-1/4 mt-6 md:mt-0 flex justify-center md:justify-end">
                <button
                className="
                    bg-orange-500 hover:bg-orange-600
                    text-white font-bold py-3 px-8
                    rounded-lg
                    shadow-md hover:shadow-lg
                    transition-colors duration-300
                "
                >
                See more
                </button>
            </div>
        </div>



        {/* Outbound Mobility Block */}
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between mb-16">
            <div className="md:w-3/4 text-center md:text-left">
                <h3 className="text-3xl font-semibold mb-4">Inbound Mobility</h3>
                <p className="text-lg leading-relaxed">
                Ready to take your learning beyond borders? This section is for BU students and staff who are
                interested in exploring opportunities abroad—whether it's studying at a partner university,
                joining an exchange program, or participating in international training. Learn how to apply,
                prepare, and make the most of your global journey.
                </p>
            </div>
            <div className="md:w-1/4 mt-6 md:mt-0 flex justify-center md:justify-end">
                <button
                className="
                    bg-orange-500 hover:bg-orange-600
                    text-white font-bold py-3 px-8
                    rounded-lg
                    shadow-md hover:shadow-lg
                    transition-colors duration-300
                "
                >
                    See more
                </button>
            </div>
        </div>

      </div>
    </section>
  );
}

