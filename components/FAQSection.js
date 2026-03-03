"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Contact Suport",
      answer:
        "Click the button below to message our activation team on WhatsApp for any assistance you need. We're here to help you with any questions or issues you may have.",
    },
    {
      question: "Verification Details",
      answer:
        "Provide your account information and follow required steps stated by support representative for verification.",
    },
    {
      question: "Make Payment",
      answer:
        "Make your payment and receive 100% cash back as activation bonus.",
    },

   {
    question: " Start Streaming",

     answer:
      "Receive activation confirmation and begin earing."
   },

  
  ];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-700 rounded-xl p-4 bg-[#0f0f0f]"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center"
          >
            <span className="text-[#B8E68C] text-xl font-semibold">
              {faq.question}
            </span>

            <ChevronDown
              className={`transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              } text-white`}
            />
          </button>

          {openIndex === index && (
            <p className="mb-12 text-gray-300 leading-relaxed">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
