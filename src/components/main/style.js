import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 90vh;
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Code = styled.div`
  display: inline-flex;
  padding: 5px 24px;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  border: 2px solid rgba(99, 99, 99, 0.1);
  background: linear-gradient(
    275deg,
    rgba(245, 245, 245, 0.8) 0%,
    rgba(255, 255, 255, 0.2) 100%
  );
  color: var(--gray2, #666669);
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 400;
  button {
    display: inline-flex;
    background-color: white;
    border: none;
    height: 24px;
    cursor: pointer;
  }
`;

export const MemberWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
  border-radius: 20px;
  gap: 2rem;
  border: 2px solid var(--Linear, #f5f6f7);
  background: var(
    --filled,
    linear-gradient(
      275deg,
      #ecedf4 0%,
      #f6f6f6 0.01%,
      #f6f6f6 0.02%,
      #fafafa 100%,
      #fdfdfd 100%
    )
  );
`;

export const Member = styled.div`
  display: flex;
  flex-direction: column;
  width: 162px;
  height: 224px;
  border-radius: 16px;
  border: 2px solid #eaeaec;
  background: linear-gradient(
    152deg,
    #fafbfd 0.9%,
    #fff 0.91%,
    #fff 0.92%,
    rgba(255, 255, 255, 0) 100%,
    #fafafa 100%
  );
  justify-content: center;
  align-items: center;
  div {
    width: 128px;
    height: 128px;
    border-radius: 100%;
    background-color: #ef9b9b;
  }
  span {
    width: 112px;
    height: 16px;
    border-radius: 50px;
    background: #d3ed8f;
  }
`;
export const Name = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 400;
  text-decoration-line: none;
`;

export const MenuBar = styled.div`
  display: inline-flex;
  padding: 0 2.2rem;
  justify-content: center;
  gap: 80px;
  align-items: center;
  flex-direction: row;
  border-radius: 20px;
  border: 2px solid var(--Linear, #f5f6f7);
  background: var(
    --filled,
    linear-gradient(
      275deg,
      #ecedf4 0%,
      #f6f6f6 0.01%,
      #f6f6f6 0.02%,
      #fafafa 100%,
      #fdfdfd 100%
    )
  );
  div {
    display: flex;
    justify-content: space-around;
    gap: 1.5rem;
    div {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Bottom = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  span {
    width: 80px;
    height: 80px;
    margin-left: 3rem;
    border-radius: 20px 20px 20px 0px;
    background: #d9d9d9;
  }
`;

export const Maker = styled.p`
  color: var(--gray1, #b4b5b7);
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  text-decoration-line: underline;
`;

export const Setting = styled.div`
  display: flex;
  height: 1.5rem;
  padding: 9.5px 18px;
  margin-right: 3rem;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 12px;
  background: var(--Gray-gray-150, #edeef1);
`;