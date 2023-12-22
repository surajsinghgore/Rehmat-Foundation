"use client";

import { useState } from "react";
import style from "../../../app/Contact/style.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Page() {
  const [data, setData] = useState({ clientName: "", email: "", message: "" });
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };
  // send message
  const sendData = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/contactMe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resGet = await res.json();

    if (res.status == 500) {
      toast.error(resGet.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (res.status == 400) {
      toast.warn(resGet.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    toast.success(resGet.message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setData({ clientName: "", email: "", message: "" });
  };
  return (
    <div className={style.right}>
      <h2>KEEP IN TOUCH</h2>
      <div className={style.form}>
        <form onSubmit={sendData} method="post">
          <input
            type="text"
            name="clientName"
            placeholder="Your Name"
            value={data.clientName}
            onChange={handleChangeInput}
          />

          <input
            type="email"
            placeholder="Your Email"
            name="email"
            value={data.email}
            onChange={handleChangeInput}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={data.message}
            onChange={handleChangeInput}
          ></textarea>
          <button>SEND COMMENT</button>
        </form>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
