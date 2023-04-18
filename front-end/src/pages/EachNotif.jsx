import React from "react";

const EachNotif = ({ el, handleRead }) => {
  let activityClass = el.isReaction
    ? "text-blue-dark-grayish"
    : el.isGroup
    ? "text-blue"
    : "";

  return (
    <div onClick={() => handleRead(el.id)} className="cursor-pointer">
      <div
        className={`flex items-center gap-4  p-4 ${
          el.isRead ? "" : "bg-blue-very-light-grayish"
        } relative rounded-lg`}
      >
        <img src={el.avatar} alt={el.name} className=" w-12" />
        <div className="flex flex-col">
          <div className=" flex gap-1">
            <p className="font-bold">
              <span>{el.name}</span>{" "}
              <span className="font-normal text-blue-dark-grayish">
                {el.action}{" "}
              </span>
              <span className={`${activityClass}`}>{el.activity}</span>
            </p>
            {!el.isRead && <span className="text-red">&#x2022;</span>}
          </div>
          <p className="text-blue-dark-grayish">{el.date}</p>
        </div>
        {el.isComment && (
          <img src={el.comment} alt="a comment" className="ml-auto h-12" />
        )}
      </div>
      {el.isMessage && (
        <p className=" ml-20 mr-4 max-w-[590px] rounded-md border border-blue-grayish p-4 text-blue-dark-grayish">
          {el.message}
        </p>
      )}
    </div>
  );
};

export default EachNotif;
