"use client"
import { useState, useEffect } from 'react';

const Notification = ({ message, type, onClose, duration }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [show, duration]);

  const getNotificationClass = () => {
    let baseClass = 'fixed bottom-5 left-5 right-5 p-4 rounded-md text-white';
    switch (type) {
      case 'success':
        return `${baseClass} bg-green-500`;
      case 'warning':
        return `${baseClass} bg-yellow-500`;
      case 'error':
        return `${baseClass} bg-red-500`;
      default:
        return `${baseClass} bg-gray-500`;
    }
  };

  return show ? (
    <div className={getNotificationClass()}>
      <p>{message}</p>
    </div>
  ) : null;
};

export default Notification;
