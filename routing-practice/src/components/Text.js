import React from 'react';
import StyledDiv from './StyledDiv';

const Text = (props) => {
    const {text, color, backGroundColor} = props;
    
    return (
        <StyledDiv
            bgColor={backGroundColor}
            color={color}
        >{text}</StyledDiv>
    );
}

export default Text;
