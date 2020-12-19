import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    align-self: flex-start;

    margin-bottom: 1rem;
`

const ItemStyle = styled.p`
    font-size: 0.9rem;
    color: gray;
`

const FooterTextItem: React.FC = ({ children }) => {
    return(
        <Wrapper>
            <ItemStyle>{children}</ ItemStyle>
        </ Wrapper>
    )
}

export default FooterTextItem