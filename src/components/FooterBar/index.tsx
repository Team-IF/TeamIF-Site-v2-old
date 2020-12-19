import React from 'react'
import styled from 'styled-components'
import NoStyleLink from '../../atomics/NoStyleLink'
import FooterTextItem from './FooterTextItem'
import FooterLinkItem from './FooterLinkItem'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #201D20;

  height: 16rem;
`

const FooterListStyle = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: column;

  margin-top: 3.5rem;
  margin-left: 3rem;
`

const FooterTermsListStyle = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: row;

  margin-bottom: 1rem;
`

const FooterBar: React.FC = () => {
    return (
      <FooterContainer>
        <FooterListStyle>
          <FooterTextItem>Team IF<br />대표자: 강두희 │ 이메일: Coder-Iro@teamif.io</ FooterTextItem>

          <FooterTermsListStyle>
            <FooterLinkItem>
              <NoStyleLink to='/license'>라이선스</ NoStyleLink>
            </ FooterLinkItem>
            <FooterLinkItem>
              <NoStyleLink to='/privacy-statement'><b>개인정보취급방침</ b></ NoStyleLink>
            </ FooterLinkItem>
            <FooterLinkItem>
              <NoStyleLink to='/terms-of-service'>이용약관</ NoStyleLink>
            </ FooterLinkItem>
          </ FooterTermsListStyle>
          <FooterTextItem>
            <b>──────────────────────────────</ b>
          </ FooterTextItem>

          <FooterTextItem>Copyright 2020. Team IF all rights reserved.</ FooterTextItem>
        </ FooterListStyle>
      </ FooterContainer>
    )
  }
  
  export default FooterBar