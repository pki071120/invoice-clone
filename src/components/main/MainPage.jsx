import React, { useState } from 'react';
import { ReactComponent as InvoiceLogoMain } from '../../svg/InvoiceLogoMain.svg';
import { ReactComponent as Clip } from '../../svg/clip.svg';
import { ReactComponent as Chat } from "../../svg/Chat.svg";
import { ReactComponent as Head } from "../../svg/Head.svg";
import { ReactComponent as Mic } from "../../svg/Mic.svg";
import { ReactComponent as Par } from "../../svg/Par.svg";
import { ReactComponent as Setting } from "../../svg/Seticon.svg";
import * as S from "./style";

const MainPage = () => {
  const [code, setCode] = useState(Math.floor(100000 + Math.random() * 900000));

  const handleCopyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      alert("복사 성공!");
    } catch (error) {
      alert("복사 실패!");
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.HeaderWrapper>
          <InvoiceLogoMain />
          <S.Code>
            <button onClick={handleCopyClipBoard}>
              <Clip />
            </button>
            {code}
          </S.Code>
        </S.HeaderWrapper>
        <S.MemberWrapper>
          <S.Member>
            <div></div>
            <S.Name>Person_n</S.Name>
            <span></span>
          </S.Member>

          <S.Member>
            <div></div>
            <S.Name>Person_n</S.Name>
            <span></span>
          </S.Member>

          <S.Member>
            <div></div>
            <S.Name>Person_n</S.Name>
            <span></span>
          </S.Member>

          <S.Member>
            <div></div>
            <S.Name>Person_n</S.Name>
            <span></span>
          </S.Member>

          <S.Member>
            <div></div>
            <S.Name>Person_n</S.Name>
            <span></span>
          </S.Member>
        </S.MemberWrapper>
        <S.MenuBar>
          <S.Name>Person_n</S.Name>
          <div>
            <Mic />
            <Head />
            <Par />
            <Chat />
          </div>
        </S.MenuBar>
        <S.Bottom>
          <span />
          <S.Maker>Made by FlowMakers</S.Maker>
          <S.Setting>
            <Setting />
            설정
          </S.Setting>
        </S.Bottom>
      </S.Wrapper>
    </>
  );
};

export default MainPage;