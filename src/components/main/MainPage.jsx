import React, { useState } from 'react';
import { ReactComponent as InvoiceLogoMain } from '../../svg/InvoiceLogoMain.svg';
import { ReactComponent as Clip } from '../../svg/clip.svg';
import * as S from "./style"

const MainPage = () => {
  const [code, setCode] = useState(123456);


  return (
    <>
      <S.Wrapper>
        <InvoiceLogoMain />
        <S.Code>
          <Clip />
          {code}
        </S.Code>
        <S.MemberWrapper>
          <S.Member>
            <div></div>
          </S.Member>

          <S.Member>
            <div></div>
          </S.Member>

          <S.Member>
            <div></div>
          </S.Member>

          <S.Member>
            <div></div>
          </S.Member>

          <S.Member>
            <div></div>
          </S.Member>
        </S.MemberWrapper>
      </S.Wrapper>
    </>
  );
};

export default MainPage;