import React, { useState } from "react";
import EachNotif from "./EachNotif";
import { notificationsData } from "../data/data";

const Notification = () => {
  const [notifications, setNotifications] = useState(notificationsData);
  const notifLength = notifications.filter(
    (item) => item.isRead === false
  ).length;

  const handleRead = (id) => {
    const newNotif = notifications.map((item) => {
      if (item.id === id) {
        return { ...item, isRead: true };
      } else {
        return item;
      }
    });

    setNotifications(newNotif);
  };

  const allRead = () => {
    setNotifications((prev) =>
      prev.map((item) => {
        return { ...item, isRead: true };
      })
    );
  };

  return (
    <div className="mx-auto my-8 grid max-w-[720px] gap-8 rounded-lg bg-white p-8">
      <nav className="flex justify-between">
        <div className="flex items-center gap-2">
          <h1 className=" text-2xl font-extrabold">Notifications</h1>
          <span className="grid h-6 w-8 place-items-center rounded-md bg-blue font-bold text-white">
            {notifLength}
          </span>
        </div>
        <button className=" text-blue-dark-grayish" onClick={allRead}>
          Mark all as read
        </button>
      </nav>
      <div className="grid gap-2">
        {notifications.map((el) => (
          <EachNotif key={el.id} el={el} handleRead={handleRead} />
        ))}
      </div>
    </div>
  );
};

export default Notification;
