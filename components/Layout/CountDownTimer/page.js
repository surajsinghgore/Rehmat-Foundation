"use client";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import style from "../HomeBanner/page.module.css";

export default function Page({ date, time }) {
  let Dd,
    Mm,
    Yy,
    Hou,
    Min,
    Sec = 59;

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let dateGets = date;
    let arrayOfDate = dateGets.split(".");
    let dateInt = parseInt(arrayOfDate[0]);
    Dd = dateInt;
    let monthInt = parseInt(arrayOfDate[1]);
    Mm = monthInt;
    let yearInt = parseInt(arrayOfDate[2]);
    Yy = yearInt;
    let timeGets = time;
    let arrayOfTime = timeGets.split(".");
    let hoursInt = parseInt(arrayOfTime[0]);
    Hou = hoursInt;
    let minutesInt = parseInt(arrayOfTime[1]);
    Min = minutesInt;
  }, []);

  useEffect(() => {
    const target = new Date(`${Mm}/${Dd}/${Yy} ${Hou}:${Min}:${Sec}`);
    const Interval = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      setDays(d);
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      setHours(h);
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);
      const s = Math.floor((diff % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(Interval);
  }, []);

  return (
    <div className={style.countdown}>
      {/*  30 dec 2023 ------time - 10:00 AM .....*/}
      <div>
        <li>
          <h1>{days}</h1>
          <h2>DAY</h2>
        </li>
      </div>
      <div>
        <li>
          <h1>{hours}</h1>
          <h2>HRS</h2>
        </li>
      </div>
      <div>
        <li>
          <h1>{minutes}</h1>
          <h2>MIN</h2>
        </li>
      </div>
      <div>
        <li>
          <h1>{seconds}</h1>
          <h2>SEC</h2>
        </li>
      </div>
    </div>
  );
}
