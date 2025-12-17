
"use client";

import { useState, useEffect } from "react";
import { FiCopy } from "react-icons/fi"; 
import {  FaTelegramPlane } from "react-icons/fa";

export default function Dashboard() {
  const [copyMessage, setCopyMessage] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // Example: 10 minutes

  const paymentDetails = [
    { label: "ACCOUNT NUMBER", value: "0036719441" },
    { label: "BANK NAME", value: "Stanbic IBTC" },
    { label: "BENEFICIARY", value: "ANIMO(Hidom Enterprise)" },
    { label: "TOTAL AMOUNT", value: "₦15,000", valueColor: "#4ADE80" },
  ];

  const paymentDetail = [
    { label: "ACCOUNT NUMBER", value: "0036719441" },
    { label: "BANK NAME", value: "Stanbic IBTC" },
    { label: "BENEFICIARY", value: "ANIMO(Hidom Enterprise)" },
    { label: "TOTAL AMOUNT", value: "₦10,000", valueColor: "#4ADE80" },
  ];

  // Copy function
  const handleCopy = async (text) => {
    await navigator.clipboard.writeText(text);
    setCopyMessage(true);
    setTimeout(() => setCopyMessage(false), 1000);
  };

const openTelegramGroup = () => {
  window.open("https://t.me/aminoofficial", "_blank");
};

  const openTelegram = () => {
    window.open("https://t.me/Aminoofficials?text=Hello%2C%20I%20want%20to%20Register%20on%20Animo", "_blank");
  };

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-gray-900">
      <div className="max-w-3xl mx-auto text-white">
        {/* Copy Message Toast */}
        {copyMessage && (
          <div className="fixed top-20 sm:top-28 left-1/2 -translate-x-1/2 bg-white text-black px-4 sm:px-6 py-2 rounded-lg sm:rounded-xl shadow-lg z-50 font-bold text-sm sm:text-base">
            Copied!
          </div>
        )}

        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">Complete Payment</h2>
        <p className="text-gray-400 text-sm sm:text-base text-center mb-6 sm:mb-8">Secure Transfer Gateway</p>

        {/* First Payment Card - ₦15,000 */}
        <div className="bg-[#030712] p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl mb-6">
          {paymentDetails.map((item, idx) => (
            <div key={idx} className="mb-4 sm:mb-5">
              <p className="text-gray-400 text-xs mb-1">{item.label}</p>

              <div className="flex justify-between items-center gap-2">
                <p
                  className="font-semibold break-all"
                  style={{
                    color: item.valueColor || "#ffffff",
                    fontSize: item.label === "TOTAL AMOUNT" ? "1.25rem" : "0.95rem",
                    fontWeight: item.label === "TOTAL AMOUNT" ? "bold" : "600",
                  }}
                >
                  {item.value}
                </p>

                <button 
                  onClick={() => handleCopy(item.value)} 
                  className="text-green-400 hover:text-green-300 transition flex-shrink-0"
                  aria-label="Copy to clipboard"
                >
                  <FiCopy size={18} className="sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          ))}

          <p className="text-red-500 text-xs sm:text-sm">
            Payment window expires in:{" "}
            <span className="text-white font-bold">{formatTime(timeLeft)}</span>
          </p>
        </div>

        {/* Buttons for First Payment */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">

          <button
            onClick={openTelegram}
            className="flex items-center justify-center gap-2 bg-[#06374f] hover:bg-[#085f7b] transition p-3 sm:p-3.5 rounded-lg font-bold text-sm sm:text-base"
          >
            <FaTelegramPlane size={18} className="sm:w-5 sm:h-5" />
            Please Proceed
          </button>

           <button
            onClick={openTelegramGroup}
            className="flex items-center justify-center gap-2 bg-green-800 hover:bg-green-700 transition p-3 sm:p-3.5 rounded-lg font-bold text-sm sm:text-base"
          >
            <FaTelegramPlane size={18} className="sm:w-5 sm:h-5" />
            Join Animo Group
          </button>
        </div>

        {/* Second Payment Card - ₦10,000 */}
        <div className="bg-[#030712] p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl mb-6">
          {paymentDetail.map((item, idx) => (
            <div key={idx} className="mb-4 sm:mb-5">
              <p className="text-gray-400 text-xs mb-1">{item.label}</p>

              <div className="flex justify-between items-center gap-2">
                <p
                  className="font-semibold break-all"
                  style={{
                    color: item.valueColor || "#ffffff",
                    fontSize: item.label === "TOTAL AMOUNT" ? "1.25rem" : "0.95rem",
                    fontWeight: item.label === "TOTAL AMOUNT" ? "bold" : "600",
                  }}
                >
                  {item.value}
                </p>

                <button 
                  onClick={() => handleCopy(item.value)} 
                  className="text-green-400 hover:text-green-300 transition flex-shrink-0"
                  aria-label="Copy to clipboard"
                >
                  <FiCopy size={18} className="sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          ))}

          <p className="text-red-500 text-xs sm:text-sm">
            Payment window expires in:{" "}
            <span className="text-white font-bold">{formatTime(timeLeft)}</span>
          </p>
        </div>

        {/* Buttons for Second Payment */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">

          <button
            onClick={openTelegram}
            className="flex items-center justify-center gap-2 bg-[#06374f] hover:bg-[#085f7b] transition p-3 sm:p-3.5 rounded-lg font-bold text-sm sm:text-base"
          >
            <FaTelegramPlane size={18} className="sm:w-5 sm:h-5" />
            Please Proceed
          </button>

           <button
            onClick={openTelegramGroup}
            className="flex items-center justify-center gap-2 bg-green-800 hover:bg-green-700 transition p-3 sm:p-3.5 rounded-lg font-bold text-sm sm:text-base"
          >
            <FaTelegramPlane size={18} className="sm:w-5 sm:h-5" />
            Join Animo Group
          </button>
        </div>
      </div>
    </div>
  );
}