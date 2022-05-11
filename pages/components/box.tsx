import { title } from "process";
import { MutableRefObject, ReactComponentElement, useRef } from "react";
import Draggable from 'react-draggable';

type BoxProps = {
    title: string;
    text: string;
    className?: string;
};

const Box = (( {title, text, className} : BoxProps) => {
    const ref : MutableRefObject<null> = useRef(null);
        
    return(
        <Draggable nodeRef={ref}>
            <div ref={ref} className={"flex box "+className}>
                <h3 ref={ref} className="times text-[200%] font-bold">{title}</h3>
                <p ref={ref} className="">{text}</p>
                </div>
        </Draggable>        
    );
});

export default Box;