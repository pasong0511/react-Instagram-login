import React, { useState, createRef } from 'react';

import styled from 'styled-components';

export default function Login() {
  const [usrInputs, setUsrInputs] = useState({
    id: '',
    pw: '',
  });

  const { id, pw } = usrInputs; // 비구조화 할당을 통해 값 추출

  const handleChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setUsrInputs({
      ...usrInputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //새로고침 방지
    alert(`${id} ${pw}`);
    localStorage.setItem(id, pw);
  };

  const validation = id.includes('@') && pw.length > 4; //id는 '@'를 포함할 때, pw는 5자리 숫자가 넘을 때 버튼이 활성화

  return (
    <Container>
      <Header>
        <LogoImag>
          <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"></img>
        </LogoImag>
      </Header>
      <Section>
        <form onSubmit={handleSubmit}>
          <Input
            name="id"
            placeholder="전화번호,사용자 이름 또는 이메일"
            onChange={handleChange}
            value={id}
            autocomplete="off"
          ></Input>
          <Input
            type="password"
            name="pw"
            placeholder="비밀번호"
            onChange={handleChange}
            value={pw}
          ></Input>
          <Button type="submit" validation={validation}>
            로그인
          </Button>
        </form>
      </Section>
      <Footer>비밀번호를 잊으셨나요</Footer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  width: 350px;
  height: 380px;
  margin: 200px auto;
  background-color: #fff;
  border: 1px solid #dbdbdb;
`;

const Header = styled.header`
  text-align: center;
`;

const LogoImag = styled.div`
  margin: 35px 0;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const Input = styled.input`
  display: block;
  width: 270px;
  height: 36px;
  padding: 8px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  margin-left: 15px;
  margin-bottom: 4px;
`;

const Button = styled.button`
  width: 268px;
  height: 30px;
  margin: 15px;
  background-color: ${(props) => (props.validation ? '#0095f6' : '#b9dffc')};
  color: white;
  border: none;
  border-radius: 5px;
`;

const Footer = styled.div`
  position: relative;
  top: 65px;
  color: rgba(var(--fe0, 0, 55, 107), 1);
  font-size: 12px;
  text-align: center;
`;
