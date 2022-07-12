import React from "react";

type Props={
    seed?:string
    large?:boolean
}

function Avatar({seed,large}:Props) {
  return (
    <div className={`overflow-hidden relative h-10 w-10 rounded-full border-gray-300 bg-white ${large && 'h-20 w-20'}`}>
      <img
      className="object-fit"
        src={`https://avatars.dicebear.com/api/open-peeps/${"placeholder"}.svg`}
        alt=""
      />
    </div>
  );
}

export default Avatar;
