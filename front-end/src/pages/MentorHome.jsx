import React, { useState } from "react";
import MentorHeader from "./MentorHeader"
import "./MentorHome.css";

import Mentee01 from '../images/mentee-01.png';
import Mentee02 from '../images/mentee-02.png';
import Mentee03 from '../images/mentee-03.png';

const MentorHome = () => {
  const [mentees, setMentees] = useState([
    {
      name: "Karate Kid",
      bio: "Please teach me karate.",
      imgSrc:
        Mentee01,
    },
    {
      name: "Luke Skywalker",
      bio: "I need help learning some space magic.",
      imgSrc:
        Mentee02,
    },
    {
      name: "Kung Fu Panda",
      bio: "I don't even know what I'm doing here",
      imgSrc:
        Mentee03,
    },
  ]);
  const [notifications, setNotifications] = useState([
    { message: "Sean Wants to connect with you!", isRead: false },
    { message: "Kelven Sent you a new message!", isRead: false },
    { message: "Jack wants to connect with you!", isRead: false },
  ]);

  const renderMentees = () => {
    return mentees.map((mentee, index) => (
      <div className="mentee" key={mentee.name}>
        <img src={mentee.imgSrc} alt={`${mentee.name} profile pic`} />
        <div className="mentee-details">
          <h3>{mentee.name}</h3>
          <p>{mentee.bio}</p>
        </div>
        <button onClick={() => removeMentee(index)}>Remove</button>
      </div>
    ));
  };

  const removeMentee = (index) => {
    const updatedMentees = [...mentees];
    updatedMentees.splice(index, 1);
    setMentees(updatedMentees);
  };

  const renderNotifications = () => {
    return notifications.map((notification, index) => (
      <div
        className={`notification ${notification.isRead ? "read" : "unread"}`}
        key={index}
        onClick={() => markNotificationAsRead(index)}
      >
        {notification.isRead ? (
          <span className="read-status">Read</span>
        ) : (
          <span className="unread-status">Unread</span>
        )}
        <p className="notification-message">
          {notification.isRead ? notification.message : "Click to view"}
        </p>
      </div>
    ));
  };

  const markNotificationAsRead = (index) => {
    const updatedNotifications = [...notifications];
    updatedNotifications[index].isRead = true;
    setNotifications(updatedNotifications);
  };

  return (
   <div>
    <MentorHeader/>
    <div className="mentor-homepage">
      <h2>Recommended Mentees</h2>
      <div className="mentee-container">
        {renderMentees()}
        {mentees.length === 0 && <p>No recommended mentees found.</p>}
      </div>
      <h2>Notifications</h2>
      <div className="notification-container">
        {renderNotifications()}
        {notifications.filter((n) => !n.isRead).length === 0 && (
          <p>No new notifications.</p>
        )}
      </div>
    </div>
   </div>
  );
};

export default MentorHome;

