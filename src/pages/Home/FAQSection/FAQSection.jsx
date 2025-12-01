import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const faqs = [
  {
    q: "How does this posture connector work?",
    a: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders."
  },
  {
    q: "Is it suitable for all ages and body types?",
    a: "Yes, it is designed to be adjustable and comfortable for people of all ages and body shapes."
  },
  {
    q: "Does it really help with back pain and posture improvement?",
    a: "Yes, consistent use improves posture and reduces strain on the spine, helping with long-term pain relief."
  },
  {
    q: "Does it have smart features like vibration alerts?",
    a: "Some models include optional vibration reminders that alert you when you slouch."
  },
  {
    q: "How will I be notified when the product is back in stock?",
    a: "You will receive an email or SMS notification once the item becomes available."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="py-16 bg-[#F2F5F5] flex flex-col items-center px-4">
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        Frequently Asked Question (FAQ)
      </h2>
      <p className="text-gray-500 text-center mt-2 max-w-2xl">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro. 
        Achieve proper alignment, reduce pain, and strengthen your body with ease!
      </p>

      <div className="w-full max-w-3xl mt-10 space-y-3">
        {faqs.map((item, i) => (
          <div
            key={i}
            className={`rounded-lg border transition-all ${
              openIndex === i ? "bg-[#DFF3E3] border-[#9bd5b1]" : "border-gray-200 bg-white"
            }`}
          >
            <button
              onClick={() => toggleFAQ(i)}
              className="w-full flex justify-between items-center px-5 py-4 text-left"
            >
              <span className="font-semibold text-gray-800">{item.q}</span>

              {/* Arrow Icon */}
              <span
                className={`transform transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {openIndex === i && (
              <div className="px-5 pb-4 text-gray-600 leading-relaxed">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* See More Button */}
      <button className="mt-10 flex items-center gap-2 bg-[#C3EF9F] hover:bg-[#b0e789] transition px-6 py-3 rounded-full font-semibold text-gray-800">
        See More FAQ’s
        <FiArrowUpRight size={20} />
      </button>
    </div>
  );
}
