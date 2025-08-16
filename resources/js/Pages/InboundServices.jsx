import { Link } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import NavBar from "@/Components/NavBar";
import FooterSection from "@/Components/Home_Page/FooterSection";

export default function InboundServices({ auth, user }) {

   // Use either 'auth.user' or 'user' depending on your controller
  const navUser = auth?.user || user || null;

  return (
    <>
      <NavBar auth={{ user: navUser }} />

      {/* Main Content */}
      <section className="bg-gray-100 py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Introduction Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Left: Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-[#132C4C] mb-4">Inbound Services</h2>
              <p className="text-gray-700 text-base">
                Inbound Services of the International Relations Office (IRO) are dedicated to assisting international students, faculty, researchers, and institutional partners who wish to engage with Bicol University. These services cover program facilitation, academic coordination, cultural orientation, and campus integration to ensure a smooth and enriching experience. By providing guidance and support from application to immersion, the IRO fosters meaningful academic exchange, cultural understanding, and global collaboration within the BU community.
              </p>
            </div>

            {/* Right: YouTube Video */}
            <div className="flex justify-center items-center">
              <div className="w-full">
                <h3 className="text-lg font-bold text-[#132C4C] mb-4 text-center">
                  How to Apply for IRO Inbound Services
                </h3>
                <iframe
                  className="w-full h-64 rounded-lg shadow-md"
                  src="https://www.youtube.com/embed/example_video_id" // Replace "example_video_id" with the actual video ID
                  title="How to Apply for IRO Inbound Services"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Requirements Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Admission Requirements for New Students */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-bold text-[#132C4C] mb-2">
                Admission Requirements for New Students
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                Documents you need to prepare for this service
              </p>
              <div className="grid grid-cols-1 gap-2">
                {/* Document 1 */}
                <div className="flex items-center justify-between border border-gray-300 rounded-lg p-2">
                  <div>
                    <p className="text-sm font-semibold">Original Transcript of Records (OTR)</p>
                    <span className="text-xs text-red-500 font-bold">Required</span>
                  </div>
                </div>
                {/* Document 2 */}
                <div className="flex items-center justify-between border border-gray-300 rounded-lg p-2">
                  <div>
                    <p className="text-sm font-semibold">Personal Data</p>
                    <span className="text-xs text-red-500 font-bold">Required</span>
                  </div>
                </div>
                {/* Document 3 */}
                <div className="flex items-center justify-between border border-gray-300 rounded-lg p-2">
                  <div>
                    <p className="text-sm font-semibold">Affidavit of Support</p>
                    <span className="text-xs text-red-500 font-bold">Required</span>
                  </div>
                </div>
                {/* Document 4 */}
                <div className="flex items-center justify-between border border-gray-300 rounded-lg p-2">
                  <div>
                    <p className="text-sm font-semibold">Alien Certificate of Registration (ACR)</p>
                    <span className="text-xs text-red-500 font-bold">Required</span>
                  </div>
                </div>
                {/* Document 5 */}
                <div className="flex items-center justify-between border border-gray-300 rounded-lg p-2">
                  <div>
                    <p className="text-sm font-semibold">
                      Results of Test on English as a Foreign Language (TOEFL) or IELTS
                    </p>
                    <span className="text-xs text-red-500 font-bold">Required</span>
                  </div>
                </div>
                {/* Document 6 */}
                <div className="flex items-center justify-between border border-gray-300 rounded-lg p-2">
                  <div>
                    <p className="text-sm font-semibold">
                      Approved Study Permit from the Philippine Language Commission on Higher Education (CHED)
                    </p>
                    <span className="text-xs text-red-500 font-bold">Required</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button className="bg-blue-900 text-white font-bold py-1 px-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Start Application
                </button>
              </div>
            </div>

            {/* Admission Requirements for Transfer Students */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-bold text-[#132C4C] mb-2">
                Admission Requirements for Transfer Students
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                Documents you need to prepare for this service
              </p>
              <div className="grid grid-cols-1 gap-2">
                {/* Document 1 */}
                <div className="flex items-center justify-between border border-gray-300 rounded-lg p-2">
                  <div>
                    <p className="text-sm font-semibold">Original Transcript of Records (OTR)</p>
                    <span className="text-xs text-red-500 font-bold">Required</span>
                  </div>
                </div>
                {/* Document 2 */}
                <div className="flex items-center justify-between border border-gray-300 rounded-lg p-2">
                  <div>
                    <p className="text-sm font-semibold">Personal Data</p>
                    <span className="text-xs text-red-500 font-bold">Required</span>
                  </div>
                </div>
                {/* Document 3 */}
                <div className="flex items-center justify-between border border-gray-300 rounded-lg p-2">
                  <div>
                    <p className="text-sm font-semibold">Affidavit of Support</p>
                    <span className="text-xs text-red-500 font-bold">Required</span>
                  </div>
                </div>
                {/* Document 4 */}
                <div className="flex items-center justify-between border border-gray-300 rounded-lg p-2">
                  <div>
                    <p className="text-sm font-semibold">
                      Results of Test on English as a Foreign Language (TOEFL) or IELTS
                    </p>
                    <span className="text-xs text-red-500 font-bold">Required</span>
                  </div>
                </div>
                {/* Document 5 */}
                <div className="flex items-center justify-between border border-gray-300 rounded-lg p-2">
                  <div>
                    <p className="text-sm font-semibold">Alien Certificate of Registration (ACR)</p>
                    <span className="text-xs text-red-500 font-bold">Required</span>
                  </div>
                </div>
                {/* Document 6 */}
                <div className="flex items-center justify-between border border-gray-300 rounded-lg p-2">
                  <div>
                    <p className="text-sm font-semibold">
                      Recommendation from the School Head of the Last School Attended
                    </p>
                    <span className="text-xs text-red-500 font-bold">Required</span>
                  </div>
                </div>
                {/* Document 7 */}
                <div className="flex items-center justify-between border border-gray-300 rounded-lg p-2">
                  <div>
                    <p className="text-sm font-semibold">SAT or any equivalent to BUCET Exam</p>
                    <span className="text-xs text-red-500 font-bold">Required</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button className="bg-blue-900 text-white font-bold py-1 px-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Start Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <FooterSection />
    </>
  );
}