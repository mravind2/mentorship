import mark from '../images/avatar-nathan-peterson.webp';
import angela from '../images/avatar-angela-gray.webp';
import jacob from '../images/avatar-jacob-thompson.webp';
import rizky from '../images/avatar-rizky-hasanuddin.webp';
export const notificationsData = [
  {
    id: 1,
    isRead: false,
    avatar: mark,
    name: "Mark Webber",
    action: "reacted to your recent post",
    activity: "My first tournament today!",
    isReaction: true,
    date: "1m ago",
  },
  {
    id: 2,
    isRead: false,
    avatar:  angela,
    name: "Angela Gray",
    action: "followed you",
    isFollow: true,
    date: "5m ago",
  },
  {
    id: 3,
    isRead: false,
    avatar:  jacob,
    name: "Jacob Thompson",
    action: "has joined your group",
    activity: "Chess Club",
    isGroup: true,
    date: "1 day ago",
  },
  {
    id: 4,
    isRead: true,
    avatar: rizky,
    name: "Rizky Hasanuddin",
    action: "sent you a private message",
    message:
      "Hello, I am trying to set up a meeting with you.",
    isMessage: true,
    date: "5 days ago",
  },
  
];
