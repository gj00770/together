import React from 'react';
import styled from 'styled-components';


function Item() {
    return (
        <ItemContainer>
            안녕
        </ItemContainer>
    );
}
const ItemContainer = styled.div`
  width: 350px;
  height: 350px;
  background-color: salmon;
  border-radius: 30px;
`
export default Item;