import React from "react";

const QuoteStrip = ({quote}:{quote:string}) => {
  return (
    <div className="flex gap-5 justify-center items-center -rotate-90 absolute left-[-8rem] top-[18rem]">
      <div className="h-[1px] w-[6rem] bg-color3/50"></div>
      <div className="text-color3/50 text-sm font-semibold">
        {quote}
      </div>
    </div>
  );
};

export default QuoteStrip;
