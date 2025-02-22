import React from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import IconButton from "../../ui/IconButton";

interface ScrollButtonsProps {
  scrollLeft: () => void;
  scrollRight: () => void;
}

const ScrollButtons: React.FC<ScrollButtonsProps> = ({ scrollLeft, scrollRight }) => {
  return (
    <>
      <IconButton
        onClick={scrollLeft}
        aria-label="Scroll Left"
        icon={<IoMdArrowDropleft size={30} />}
        className="left-0 !right-auto"
      />
      <IconButton
        onClick={scrollRight}
        aria-label="Scroll Right"
        icon={<IoMdArrowDropright size={30} />}
      />
    </>
  );
};

export default ScrollButtons;
