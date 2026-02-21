//senior level code
import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, JSX } from "react";
import Button from "./Button";
import Input from "./Input";

type TimeInput = {
  hours: number;
  minutes: number;
  seconds: number;
};

const CountDownTimer = (): JSX.Element => {
  const [isTimerStarted, setIsTimerStarted] = useState<boolean>(false);
  const [totalSeconds, setTotalSeconds] = useState<number>(0);
  const [inputTime, setInputTime] = useState<TimeInput>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // ✅ Proper browser-safe interval type
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // --------------------------
  // Handlers
  // --------------------------

  const handleStart = (): void => {
    const seconds: number =
      inputTime.hours * 3600 +
      inputTime.minutes * 60 +
      inputTime.seconds;

    if (seconds <= 0) return;

    setTotalSeconds(seconds);
    setIsTimerStarted(true);
  };

  const handlePause = (): void => {
    setIsTimerStarted(false);
  };

  const handleReset = (): void => {
    setIsTimerStarted(false);
    setTotalSeconds(0);
    setInputTime({ hours: 0, minutes: 0, seconds: 0 });
  };

  const handleInputChange =
    (field: keyof TimeInput) =>
    (e: ChangeEvent<HTMLInputElement>): void => {
      let value: number = parseInt(e.target.value, 10);

      if (Number.isNaN(value)) value = 0;

      if (field !== "hours") {
        value = Math.max(0, Math.min(59, value));
      } else {
        value = Math.max(0, value);
      }

      setInputTime((prev: TimeInput) => ({
        ...prev,
        [field]: value,
      }));
    };

  // --------------------------
  // Timer Effect
  // --------------------------

  useEffect(() => {
    if (!isTimerStarted) return;

    timerRef.current = setInterval(() => {
      setTotalSeconds((prev: number) => {
        if (prev <= 1) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
          }
          setIsTimerStarted(false);
          alert("Time's up!");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isTimerStarted]);

  // --------------------------
  // Derived Values (no duplication)
  // --------------------------

  const hours: number = Math.floor(totalSeconds / 3600);
  const minutes: number = Math.floor((totalSeconds % 3600) / 60);
  const seconds: number = totalSeconds % 60;

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">CountDownTimer</h1>

      <div className="w-[600px] h-[600px] border-4 border-indigo-600 rounded-lg flex flex-col items-center justify-center mx-auto mt-10 gap-6">
        {isTimerStarted ? (
          <>
            <h1 className="text-5xl font-bold">
              {hours.toString().padStart(2, "0")}:
              {minutes.toString().padStart(2, "0")}:
              {seconds.toString().padStart(2, "0")}
            </h1>

            <div className="flex gap-4">
              <Button onClick={handlePause} text="Pause" />
              <Button onClick={handleReset} text="Reset" />
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-2">
              <Input
                type="number"
                placeholder="HH"
                value={inputTime.hours}
                onChange={handleInputChange("hours")}
              />
              <span>:</span>
              <Input
                type="number"
                placeholder="MM"
                value={inputTime.minutes}
                onChange={handleInputChange("minutes")}
              />
              <span>:</span>
              <Input
                type="number"
                placeholder="SS"
                value={inputTime.seconds}
                onChange={handleInputChange("seconds")}
              />
            </div>

            <Button onClick={handleStart} text="Start" />
          </>
        )}
      </div>
    </div>
  );
};

export default CountDownTimer;