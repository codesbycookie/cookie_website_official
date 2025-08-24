import { useState, useEffect } from "react";
import { formatTimeLeft } from "../../../../utils/quotaProvider";
export default function QuotaTimer({ quota }) {
  const [timeLeft, setTimeLeft] = useState(quota.timeLeft);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 1000 ? prev - 1000 : 0)); // decrease by 1s
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center p-6 w-full md:w-3/5  md:p-10">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 border-2 border-yellow-300 shadow-sm mb-4">
        <svg
          className="w-8 h-8 text-yellow-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01M12 5a7 7 0 100 14 7 7 0 000-14z"
          />
        </svg>
      </div>

      <h2 className="text-xl font-bold text-yellow-800 mb-2">
        Submission Limit Reached 🚫
      </h2>
      <p className="text-sm text-yellow-700 max-w-xs">
        You’ve already used all <span className="font-medium">{quota.max}</span>{" "}
        submissions in the last 3 days.
        <br />⏳ Next available in{" "}
        <span className="font-semibold">{formatTimeLeft(timeLeft)}</span>.
      </p>
    </div>
  );
}
