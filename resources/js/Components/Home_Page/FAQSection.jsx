import React, { useState } from 'react';

const faqData = [
  {
    question: "What is the International Relations Office?",
    answer: "The International Relations Office (IRO) at Bicol University is responsible for promoting and facilitating internationalization efforts. This includes managing partnerships with foreign universities, student and faculty exchange programs, and providing support to international students and visitors."
  },
  {
    question: "What is Inbound and Outbound Services?",
    answer: "Inbound services refer to programs and support for international students coming to Bicol University, while outbound services focus on facilitating opportunities for BU students and staff to study or work abroad."
  },
  {
    question: "How does a university establish a partnership with BU?",
    answer: "Universities interested in establishing partnerships with Bicol University can contact the International Relations Office to discuss collaboration opportunities, sign agreements, and develop joint programs."
  },
  {
    question: "How does IRO support international students on campus?",
    answer: "The IRO provides a range of support services for international students, including assistance with visa processing, accommodation guidance, orientation programs, cultural adjustment support, and general welfare. They serve as a primary point of contact for international students throughout their stay."
  },
  {
    question: "How can I apply for a student exchange program?",
    answer: "Application procedures usually involve submitting an application form, academic transcripts, letters of recommendation, a statement of purpose, and proof of language proficiency. It's recommended to consult the IRO directly or visit their official webpage for detailed, up-to-date instructions and deadlines."
  },
  {
    question: "Do I need to speak another language to join an international program?",
    answer: "While many international programs are conducted in English, some may require proficiency in the language of the host country (e.g., Japanese, German, etc.). The specific language requirements depend on the program and the partner institution. It's best to check the individual program's prerequisites."
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-8" id="faqs">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semi-bold text-[#132C4C]">
            Get your questions answered
          </h2>
          <p className="text-lg text-orange-400 mt-2">
            Find answers to the most commonly asked questions below.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-lg font-semibold text-[#132C4C] mb-2">
                {item.question}
              </h3>
              {activeIndex === index && (
                <p className="text-sm text-gray-700 mt-2">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}