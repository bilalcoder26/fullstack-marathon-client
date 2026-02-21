import { useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";

const CountDownTimer = () => {
  const [isTimerStarted, setIsTimerStarted] = useState<boolean>(false);
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const onReset = () => {
    setIsTimerStarted(false);
    setTime({
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  };
  const onTimerStart = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const value = parseInt(e.target.value) || 0;
    // if(value > 60 || value < 0)  alert("Please enter a valid number between 0 and 60");
    setTime({ ...time, hours: value });
  };
  useEffect(() => {
    let timer: number;
    if (isTimerStarted) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          const totalSeconds =
            prevTime.hours * 3600 +
            prevTime.minutes * 60 +
            prevTime.seconds -
            1;
          if (totalSeconds < 0) {
            clearInterval(timer);
            setIsTimerStarted(false);
            alert("Time's up!");
            return { hours: 0, minutes: 0, seconds: 0 };
          }
          const hours = Math.floor(totalSeconds / 3600);
          const minutes = Math.floor((totalSeconds % 3600) / 60);
          const seconds = totalSeconds % 60;
          return { hours, minutes, seconds };
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTimerStarted]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">CountDownTimer</h1>
      <div className="w-[600px] h-[600px] border-4 border-indigo-600 rounded-lg flex items-center justify-center mx-auto mt-10">
        {isTimerStarted ? (
          <>
            <h1 className="text-5xl font-bold">
              {time.hours}:{time.minutes.toString().padStart(2, "0")}:
              {time.seconds.toString().padStart(2, "0")}
            </h1>
            <Button onClick={() => setIsTimerStarted(false)} text="Pause" />
            <Button onClick={onReset} text="Reset" />
          </>
        ) : (
          <>
            <Input
              type="text"
              placeholder="HH"
              value={time.hours}
              onChange={onTimerStart}
            />
            <span>:</span>
            <Input
              type="text"
              placeholder="MM"
              value={time.minutes}
              onChange={(e) =>
                setTime({ ...time, minutes: parseInt(e.target.value) || 0 })
              }
            />
            <span>:</span>
            <Input
              type="text"
              placeholder="SS"
              value={time.seconds}
              onChange={(e) =>
                setTime({ ...time, seconds: parseInt(e.target.value) || 0 })
              }
            />
            <Button
              onClick={() => setIsTimerStarted(!isTimerStarted)}
              text="Start"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default CountDownTimer;

