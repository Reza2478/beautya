import React from 'react';
import girl from '../../../public/assets/images/girl.png';
import Image from 'next/image';

function NewIn() {
  return (
    <div className="flex flex-col items-center space-y-3 bg-[#3D021E] p-4">
      <p className="text-center text-xl font-bold text-white">New In</p>
      <div className="w-80">
        <Image alt="girl" src={girl} />
        <p className="text-lg font-bold text-white">
          Beautya La Mousse Off/On Foaming Cleaner
        </p>
        <p className=" text-xs text-white">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis en im velit mollit.
        </p>
      </div>
    </div>
  );
}

export default NewIn;
