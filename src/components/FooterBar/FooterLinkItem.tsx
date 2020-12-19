import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    align-self: center;

    margin-right: 1rem;
`

const ItemStyle = styled.p`
    font-size: 0.9rem;
    color: gray;
    cursor: pointer;
`

const FooterLinkItem: React.FC = ({ children }) => {
    return(
        <Wrapper>
            <ItemStyle>{children}</ ItemStyle>
        </Wrapper>
    )
}

