import Styled from "styled-components"

export const Wrapper = Styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`

export const LogoWrapper = Styled.div`
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  
  p {
    color: #72BAC1;
    font-family: "Pretendard Variable";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  `

export const InputWrapper = Styled.form`
  width: 100%;
  heigth: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  color: #95CBD1;
  font-family: "Pretendard Variable";
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  `

export const JoinInput = Styled.input`
  display: flex;
  width: 720px;
  height: 30px;
  padding: 16px 40px;
  justify-content: space-between;
  align-items: center;
  border-radius: 40px;
  border: 2px solid #F5F6F7;
  background: #DCEEF0;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  ::placeholder {
    color: #500555;
    font-family: "Pretendard Variable";
    font-size: 24px;
    font-weight: 400;
  }
  :focus{
    outline: none;
  }
`

export const MakeBut = Styled.button`
  width: 800px;
  height: 68px;
  padding: 16px 40px;
  border-radius: 40px;
  border: 2px solid #F5F6F7;
  background: #72BAC1;
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #F5F6F8;;
  text-align: center;
`