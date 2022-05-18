import { MutableRefObject, ReactComponentElement, useRef } from "react";
import Draggable from "react-draggable";

type BoxProps = {
  title: string;
  text: string;
  className?: string;
  dx: number;
  dy: number;
};

const Box = ({ title, text, className, dx, dy }: BoxProps) => {
  const ref: MutableRefObject<null> = useRef(null);
  const pos = { x: dx, y: dy };

  return (
    <Draggable nodeRef={ref} defaultPosition={pos}>
      <div ref={ref} className={"flex box " + className}>
        <h3 ref={ref} className="times text-[200%] font-bold">
          {title}
        </h3>
        <p ref={ref} className="">
          {text}
        </p>
      </div>
    </Draggable>
  );
};

export default Box;
