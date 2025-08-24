import { useEffect, useState } from "react";

export function formatTimeLeft(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));

  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

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
    <div className="p-4 bg-yellow-50 text-yellow-800 rounded-lg border border-yellow-200 w-full flex justify-center items-center text-center">
      <p className="text-sm">
         You’ve used all {quota.max} submissions. <br />
        ⏳ Next available in{" "}
        <span className="font-medium">{formatTimeLeft(timeLeft)}</span>.
      </p>
    </div>
  );
}
