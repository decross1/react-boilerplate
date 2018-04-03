import styled from 'styled-components';

const StyledListItem = styled.li`
  font: 200 20px/1.5 Helvetica, Verdana, sans-serif;
  border-bottom: 1px solid #ccc;
  text-decoration: none;
  color: #000;
  display: block;
  width: 100%;
  text-align:center
  
  &:hover {
    font-size: 30px;
    background: #f6f6f6;
  }
`;

export default StyledListItem;
