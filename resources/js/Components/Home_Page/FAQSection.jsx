import React, { useState } from 'react';

// You might want to store your FAQ data in a separate file or directly here
const faqData = [
  {
    question: "What is the International Relations Office?",
    answer: "The International Relations Office (IRO) at Bicol University is responsible for promoting and facilitating internationalization efforts. This includes managing partnerships with foreign universities, student and faculty exchange programs, and providing support to international students and visitors."
  },
  {
    question: "Who can apply for student exchange programs?",
    answer: "Student exchange programs are typically open to currently enrolled students of Bicol University who meet certain academic criteria, language proficiency requirements (if applicable), and other specific program prerequisites. Eligibility may vary per program and partner institution."
  },
  {
    question: "How can I apply for a student exchange program?",
    answer: "Application procedures usually involve submitting an application form, academic transcripts, letters of recommendation, a statement of purpose, and proof of language proficiency. It's recommended to consult the IRO directly or visit their official webpage for detailed, up-to-date instructions and deadlines."
  },
  {
    question: "Can foreign students study at our university through IRO?",
    answer: "Yes, the IRO facilitates programs for inbound foreign students. This includes exchange programs, short-term study visits, and potentially full degree programs through specific agreements. Prospective students should contact the IRO for information on admissions requirements and available programs."
  },
  {
    question: "What partner universities does our school have?",
    answer: "Bicol University has a growing network of partner universities across various countries. A comprehensive list of current partner institutions is usually available on the IRO's official website or by contacting their office directly. Partnerships cover different fields of study and types of collaborations."
  },
  {
    question: "How does IRO support international students on campus?",
    answer: "The IRO provides a range of support services for international students, including assistance with visa processing, accommodation guidance, orientation programs, cultural adjustment support, and general welfare. They serve as a primary point of contact for international students throughout their stay."
  },
  {
    question: "Do I need to speak another language to join an international program?",
    answer: "While many international programs are conducted in English, some may require proficiency in the language of the host country (e.g., Japanese, German, etc.). The specific language requirements depend on the program and the partner institution. It's best to check the individual program's prerequisites."
  },
  {
    question: "How do I contact the IRO?",
    answer: "You can contact the International Relations Office via email at [insert IRO email here], by phone at [insert IRO phone number here], or by visiting their office located at [insert IRO physical address here] during office hours. Check the university's official website for the most current contact details and operating hours."
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null); // State to manage which FAQ item is open

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // If clicked item is already open, close it; otherwise, open it.
  };

  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8" id="faqs">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-12 text-center md:text-left">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="space-y-4"> 
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden"
            >
              {/* Question Header */}
              <button
                className="
                  flex justify-between items-center w-full
                  p-6 text-left font-semibold text-lg text-gray-800
                  hover:bg-gray-50 focus:outline-none
                  transition-colors duration-200
                "
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {/* Answer Content */}
              {openIndex === index && (
                <div
                  className="px-6 pb-6 pt-0 text-gray-700 leading-relaxed animate-fade-in-down"
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

