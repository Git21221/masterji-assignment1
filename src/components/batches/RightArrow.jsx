import React from "react";

function RightArrow({ color, onClick, className }) {
  return (
    <div onClick={onClick} className={`${className}`}>
      <svg
        width="17"
        height="30"
        viewBox="0 0 17 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.657432 3.85033C0.236262 3.42602 0 2.85302 0 2.2559C0 1.65877 0.236262 1.08577 0.657432 0.661457C0.86425 0.451963 1.11077 0.285593 1.38265 0.172035C1.65453 0.0584774 1.94634 0 2.24109 0C2.53583 0 2.82764 0.0584774 3.09952 0.172035C3.3714 0.285593 3.61792 0.451963 3.82474 0.661457L16.3436 13.4039C16.7642 13.8292 17 14.4026 17 15C17 15.5974 16.7642 16.1708 16.3436 16.5961L3.82474 29.3385C3.61792 29.548 3.3714 29.7144 3.09952 29.828C2.82764 29.9415 2.53583 30 2.24109 30C1.94634 30 1.65453 29.9415 1.38265 29.828C1.11077 29.7144 0.86425 29.548 0.657432 29.3385C0.236262 28.9142 0 28.3412 0 27.7441C0 27.147 0.236262 26.574 0.657432 26.1497L10.9242 14.9951L0.657432 3.85033Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export default RightArrow;