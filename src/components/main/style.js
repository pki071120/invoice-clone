import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`

export const Code = styled.div`
  display: inline-flex;
  padding: 8px 24px;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  border: 2px solid rgba(99, 99, 99, 0.10);
  background: linear-gradient(275deg, rgba(245, 245, 245, 0.80) 0%, rgba(255, 255, 255, 0.20) 100%);
  color: var(--gray2, #666669);
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 400;
`

export const MemberWrapper = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;
  border-radius: 20px;
  border: 2px solid var(--Linear, #F5F6F7);
  background: var(--filled, linear-gradient(275deg, #ECEDF4 0%, #F6F6F6 0.01%, #F6F6F6 0.02%, #FAFAFA 100%, #FDFDFD 100%));
`

export const Member = styled.div`
  display:flex;
  width: 162px;
  height: 224px;
  border-radius: 16px;
  border: 2px solid #EAEAEC;
  background: linear-gradient(152deg, #FAFBFD 0.9%, #FFF 0.91%, #FFF 0.92%, rgba(255, 255, 255, 0.00) 100%, #FAFAFA 100%);
  justify-content:center;
  align-items:center;
  div{
    width: 128px;
    height: 128px;
    border-radius: 100%;
    background-color:#EF9B9B;
  }
`