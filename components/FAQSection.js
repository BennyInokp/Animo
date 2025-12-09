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
      question: "How does the 'Earn-and-Walk' feature work?",
      answer:
        "Our groundbreaking technology uses your smartphone's built-in sensors to track your steps. As you walk, you accumulate points within the Animo app which can then be converted into real income or used within our ecosystem. It's a simple, powerful way to monetize your daily activity.",
    },
    {
      question: "What kind of skill acquisition programs does Animo offer?",
      answer:
        "We offer a curated selection of premium skill acquisition programs focused on high-demand areas such as digital marketing, financial literacy, e-commerce, and modern tech skills. Our goal is to provide practical knowledge that translates directly into earning opportunities.",
    },
    {
      question: "What is the Multi-Earnings System?",
      answer:
        "The Multi-Earnings System is a core part of Animo, offering various ways to generate income beyond the walk-and-earn feature. We provide all the tools, training, and support you need to succeed, regardless of your prior experience.",
    },

   {
    question: " Is Animo legit or Not?",

     answer:
      "ANIMO is legit, the CEO has a good track record of wealth creation, partnering with other giant organizations to bring you Animo."
   },

   {
    question: "Is Animo available worldwide?",
    answer:
      "Yes, Animo is a globally connected ecosystem. Our platform is designed to be accessible to individuals from all over the world, empowering a diverse community to walk their path to prosperity together."

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
