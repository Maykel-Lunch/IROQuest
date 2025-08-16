import { Link } from "@inertiajs/react";
import NavBar from '@/Components/NavBar';


export default function OutboundServices() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8">
        {/* Outbound Student Mobility Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-sm font-bold bg-orange-600 text-white px-3 py-1 rounded-full inline-block mb-4">
            Students
          </div>
          <h3 className="text-2xl font-bold text-[#132C4C] mb-4">
            Outbound Student Mobility (at cost to the university)
          </h3>
          <p className="text-sm text-gray-700 mb-6">
            To establish, provide, and ensure a systematic process in the processing of international travel requests of students seeking financial assistance from the university.
          </p>
          <h4 className="text-lg font-semibold mb-4">Required Documents</h4>
          <p className="text-sm text-gray-700 mb-6">
            Documents you need to prepare for this service
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Document 1 */}
            <div className="flex items-center justify-between border border-gray-300 rounded-lg p-4">
              <div>
                <p className="text-sm font-semibold">Letter request to participate in the international event and for financial assistance, if applicable, addressed to the Dean.</p>
                <span className="text-xs text-red-500 font-bold">Required</span>
              </div>
              <p className="text-sm text-gray-500">To be filled out</p>
            </div>
            {/* Document 2 */}
            <div className="flex items-center justify-between border border-gray-300 rounded-lg p-4">
              <div>
                <p className="text-sm font-semibold">Endorsement letter of College Dean with addressed to the University President through the OSAS Dean, IRO Director, and the VPAA.</p>
                <span className="text-xs text-red-500 font-bold">Required</span>
              </div>
              <p className="text-sm text-gray-500">To be filled out</p>
            </div>
            {/* Document 3 */}
            <div className="flex items-center justify-between border border-gray-300 rounded-lg p-4">
              <div>
                <p className="text-sm font-semibold">Endorsement of OSAS Dean</p>
                <span className="text-xs text-red-500 font-bold">Required</span>
              </div>
              <p className="text-sm text-gray-500">OSAS Dean</p>
            </div>
            {/* Document 4 */}
            <div className="flex items-center justify-between border border-gray-300 rounded-lg p-4">
              <div>
                <p className="text-sm font-semibold">Invitation or Letter of Acceptance</p>
                <span className="text-xs text-red-500 font-bold">Required</span>
              </div>
              <p className="text-sm text-gray-500">Event Organizer</p>
            </div>
            {/* Document 5 */}
            <div className="flex items-center justify-between border border-gray-300 rounded-lg p-4">
              <div>
                <p className="text-sm font-semibold">Certification of Funds Availability</p>
                <span className="text-xs text-red-500 font-bold">Required</span>
              </div>
              <p className="text-sm text-gray-500">College or Unit Budget Officer</p>
            </div>
            {/* Document 6 */}
            <div className="flex items-center justify-between border border-gray-300 rounded-lg p-4">
              <div>
                <p className="text-sm font-semibold">CHED IAS Form No. 15</p>
                <span className="text-xs text-red-500 font-bold">Required</span>
              </div>
              <p className="text-sm text-gray-500">To be filled out</p>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-900 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Start Application
            </button>
          </div>
        </div>

        {/* Outbound Personnel Mobility (At cost to the University) Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-sm font-bold bg-green-600 text-white px-3 py-1 rounded-full inline-block mb-4">
            BU Personnel
          </div>
          <h3 className="text-2xl font-bold text-[#132C4C] mb-4">
            Outbound Personnel Mobility (At cost to the University)
          </h3>
          <p className="text-sm text-gray-700 mb-6">
            To establish, provide, and ensure a systematic process in the processing of international travel requests of employees at cost to the university.
          </p>
          <h4 className="text-lg font-semibold mb-4">Required Documents</h4>
          <p className="text-sm text-gray-700 mb-6">
            Documents you need to prepare for this service
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Document 1 */}
            <div className="flex items-center justify-between border border-gray-300 rounded-lg p-4">
              <div>
                <p className="text-sm font-semibold">
                  Letter Request addressed to University through Immediate Supervisor, IRO Director, Concerned VP
                </p>
                <span className="text-xs text-red-500 font-bold">Required</span>
              </div>
              <p className="text-sm text-gray-500">
                To be filled out (<Link href="/template1" className="text-blue-500 underline">Download Template</Link>)
              </p>
            </div>
            {/* Document 2 */}
            <div className="flex items-center justify-between border border-gray-300 rounded-lg p-4">
              <div>
                <p className="text-sm font-semibold">Invitation or Letter of Acceptance</p>
                <span className="text-xs text-red-500 font-bold">Required</span>
              </div>
              <p className="text-sm text-gray-500">Event Organizer</p>
            </div>
            {/* Document 3 */}
            <div className="flex items-center justify-between border border-gray-300 rounded-lg p-4">
              <div>
                <p className="text-sm font-semibold">Certification of Funds Availability</p>
                <span className="text-xs text-red-500 font-bold">Required</span>
              </div>
              <p className="text-sm text-gray-500">College or Unit Budget Officer</p>
            </div>
            {/* Document 4 */}
            <div className="flex items-center justify-between border border-gray-300 rounded-lg p-4">
              <div>
                <p className="text-sm font-semibold">CHED IAS Form No. 15</p>
                <span className="text-xs text-red-500 font-bold">Required</span>
              </div>
              <p className="text-sm text-gray-500">
                To be filled out (<Link href="/template2" className="text-blue-500 underline">Download Template</Link>)
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-900 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Start Application
            </button>
          </div>
        </div>

        {/* Outbound Personnel Mobility (At no cost to the University) Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-sm font-bold bg-green-600 text-white px-3 py-1 rounded-full inline-block mb-4">
            BU Personnel
          </div>
          <h3 className="text-2xl font-bold text-[#132C4C] mb-4">
            Outbound Personnel Mobility (At no cost to the University)
          </h3>
          <p className="text-sm text-gray-700 mb-6">
            To establish, provide, and ensure a systematic process in the processing of international travel requests of employees at no cost to the university.
          </p>
          <h4 className="text-lg font-semibold mb-4">Required Documents</h4>
          <p className="text-sm text-gray-700 mb-6">
            Documents you need to prepare for this service
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Document 1 */}
            <div className="flex items-center justify-between border border-gray-300 rounded-lg p-4">
              <div>
                <p className="text-sm font-semibold">
                  Letter Request addressed to University through Immediate Supervisor, IRO Director, Concerned VP
                </p>
                <span className="text-xs text-red-500 font-bold">Required</span>
              </div>
              <p className="text-sm text-gray-500">
                To be filled out (<Link href="/template1" className="text-blue-500 underline">Download Template</Link>)
              </p>
            </div>
            {/* Document 2 */}
            <div className="flex items-center justify-between border border-gray-300 rounded-lg p-4">
              <div>
                <p className="text-sm font-semibold">Leave Form with recommending approval of Dean or Immediate Supervisor and approved by the University President</p>
                <span className="text-xs text-red-500 font-bold">Required</span>
              </div>
              <p className="text-sm text-gray-500">Form from HR/AO</p>
            </div>
            {/* Document 3 */}
            <div className="flex items-center justify-between border border-gray-300 rounded-lg p-4">
              <div>
                <p className="text-sm font-semibold">Certification of Funds Availability</p>
                <span className="text-xs text-red-500 font-bold">Required</span>
              </div>
              <p className="text-sm text-gray-500">HR</p>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-900 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Start Application
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}