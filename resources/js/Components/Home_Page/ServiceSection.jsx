import { Link } from "@inertiajs/react";

export default function ServiceSection() {
  return (
    <section
      className="bg-gradient-to-b from-blue-500 via-blue-100 to-[#E0F7FF] text-black font-poppins py-20 px-4 md:px-8"
      id="services"
    >
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center md:text-left">
          Services Offered
        </h2>

        {/* Inbound Mobility Block */}
        <div className="w-full">
          <h3 className="text-3xl font-semibold mb-4">Inbound Mobility</h3>
          <p className="text-lg leading-relaxed break-words whitespace-normal">
            Thinking of joining Bicol University from another country? Whether you're here for a semester, a short-term program,
            or a research visit, this section is for those who are arriving to experience what BU has to offer. You'll find guidance on applications, 
            requirements, and what to expect as you become part of our vibrant academic and cultural community.
          </p>
          <div className="mt-6 flex justify-center md:justify-end">
            <Link
              href={route ? route('inbound.services') : '/inbound-services'}
              className="
                bg-orange-500 hover:bg-orange-600
                text-white font-bold py-3 px-8
                rounded-lg shadow-md hover:shadow-lg
                transition-colors duration-300
              "
            >
              See more
            </Link>
          </div>
        </div>

        {/* Outbound Mobility Block */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-16">
          <div className="md:w-3/4 text-center md:text-left">
            <h3 className="text-3xl font-semibold mb-4">Outbound Mobility</h3>
            <p className="text-lg leading-relaxed">
              Ready to take your learning beyond borders? Whether you're looking for exchange programs, internships, or collaborative research opportunities, 
              this section provides all the information you need to explore the world while representing Bicol University.
            </p>
          </div>
          <div className="md:w-1/4 mt-6 md:mt-0 flex justify-center md:justify-end">
            <Link
              href={route ? route('outbound.services') : '/outbound-services'}
              className="
                bg-orange-500 hover:bg-orange-600
                text-white font-bold py-3 px-8
                rounded-lg shadow-md hover:shadow-lg
                transition-colors duration-300
              "
            >
              See more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}