import { Link } from '@inertiajs/react';
import iroLogo from '@/assets/IROLogo.png';
// import mainNewsImage from '../path/to/your/main-news-image.jpg'; // The large image on the left
// import kochiUniversityImage from '../path/to/your/kochi-university.jpg'; // Image for Kochi University news
// import bicolUniversityVisitors from '../path/to/your/bu-visitors.jpg'; // Image for BU visitors news
// import expandingInternationalRelations from '../path/to/your/expanding-international-relations.jpg'; // Image for expanding relations news

export default function NewsSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-8" id="news">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
            {/* Top row: Latest News + horizontal line */}
            <div className="flex items-center mb-2">
                <h2 className="text-4xl font-bold text-gray-800 mr-4">Latest News</h2>
                <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
            </div>

            {/* Bottom row: Read All News */}
            <div className="text-left">
                <a href="/news" className="text-2xl text-red-600 hover:underline">Read All News</a>
            </div>
        </div>


        {/* News Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Main News Article (Left Side) */}
          <div className="flex flex-col">
            <img
              src={iroLogo}
              alt="Bicol University welcomes Prof. Ilse Aerts"
              className="w-full h-auto object-cover rounded-lg shadow-md mb-4"
            />
            <p className="text-gray-500 text-sm mb-2">April 29, 2025</p>
            <h3 className="text-xl font-semibold text-gray-800 leading-snug">
              Bicol University Polangui welcomed Prof. Ilse Aerts from VIVES UAS, Belgium as part of the Faculty Exchange Program.
            </h3>
          </div>

          {/* Right Side News List */}
          <div className="flex flex-col space-y-8">
            {/* News Item 1 */}
            <div className="flex items-center space-x-4">
              <img
                src={iroLogo}
                alt="Presentation on Kochi University, Japan"
                className="w-28 h-20 object-cover rounded-md flex-shrink-0"
              />
              <div>
                <p className="text-gray-500 text-sm mb-1">March 5, 2025</p>
                <h4 className="text-base font-semibold text-gray-800 leading-tight">
                  Presentation on Kochi University, Japan
                </h4>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="flex items-center space-x-4">
              <img
                src={iroLogo}
                alt="Visitors to BU"
                className="w-28 h-20 object-cover rounded-md flex-shrink-0"
              />
              <div>
                <p className="text-gray-500 text-sm mb-1">February 8, 2023</p>
                <h4 className="text-base font-semibold text-gray-800 leading-tight">
                  Wome to BU, Prof. Evert Cottyn, Elly Verstraete, and Lies Verstraete!
                </h4>
              </div>
            </div>

            {/* News Item 3 */}
            <div className="flex items-center space-x-4">
              <img
                src={iroLogo}
                alt="Expanding International Relations"
                className="w-28 h-20 object-cover rounded-md flex-shrink-0"
              />
              <div>
                <p className="text-gray-500 text-sm mb-1">October 10, 2022</p>
                <h4 className="text-base font-semibold text-gray-800 leading-tight">
                  Expanding International Relations: Strengthening Kristian Indonesias new BU partner on International Cooperation!
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
