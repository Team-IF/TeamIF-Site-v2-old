import React from 'react';
import styled from 'styled-components';
import { Heading1 } from '../../../atomics/Typography/Heading';
import AlignContainer from '../../../utils/AlignContainer';
import MemberCard from '../../MemberCard';

const Container = styled.section`
  display: flex;
  align-items: center;
`;

const TitleStyle = styled(Heading1)`
  margin: 2rem 0;
`;

const MemberList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Member: React.FC = () => {
  return (
    <Container id="member">
      <AlignContainer>
        <TitleStyle>Member.</TitleStyle>
        <MemberList>
          <MemberCard email="default" nickname="nickname" color="#16a085" />
          <MemberCard email="default" nickname="short" color="#e67e22" />
          <MemberCard email="default" nickname="longlonglong" color="#f1c40f" />
          <MemberCard email="default" nickname="longlonglong" color="#f1c40f" />
          <MemberCard email="default" nickname="longlonglong" color="#f1c40f" />
        </MemberList>
      </AlignContainer>
    </Container>
  );
};

export default Member;
