import {memo} from "react";

const Small = ({counter = 0}) => {
    console.log('Me volví a llamar :)')
    return (
        <small>
            {counter}
        </small>
    );
};

export default memo(Small);
