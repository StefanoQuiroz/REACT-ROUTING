import styled from 'styled-components';

const StyledDiv = styled.div`
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3.5rem auto;
    height: 5rem;
    font-size: 3rem;
    color: ${props=> props.bgColor}; 
    background-color: ${props=> props.color}; 
`;

export default StyledDiv;