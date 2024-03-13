import React, { useState } from 'react';
import {ReactComponent as InvoiceLogo} from '../../svg/invoiceLogo.svg'
import { useNavigate } from 'react-router-dom';
import * as S from "./style"

const JoinCode = () => {
  const navigate = useNavigate();
  const [JCode, setJCode] = useState("");

  function Make(){
    navigate(`/main`);
  }

  return (
    <>
      <S.Wrapper>
        <S.LogoWrapper>
          <InvoiceLogo />
          <p>음성채팅을 링크하나로, INVOICE!</p>
        </S.LogoWrapper>
        <S.InputWrapper>
          <S.JoinInput placeholder='초대코드를 입력해주세요' value={JCode} onChange={e => setJCode(e.target.value)} required/>
          <p>or</p>
          <S.MakeBut onClick={Make}>
            방 만들기
          </S.MakeBut>
        </S.InputWrapper>
      </S.Wrapper>
    </>
  );
};

export default JoinCode;