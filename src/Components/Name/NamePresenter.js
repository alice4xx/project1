import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

//@자식 : 파일이름은 namepresenter인데 사실상 컴포넌트이름이 name이다

//애니메이션 효과
const fadeAni = keyframes`
    from {
        opacity :0
}
    to {
        opacity :1
    }
`;

//css적용
const Form = styled.form `
animation :${fadeAni} 2s linear;
display : flex;
flex-direction : column;
font-size : 2rem;
`;

const Text =styled.span `
font-weight : bold;
margin-bottom : 0.5rem;
`;

const Input =styled.input`
all: unset;
border-bottom : 2px solid #fff;
text-align : center;
`;

const Name = ({value, handleChange, handleSubmit}) =>(
    //인자에 프롭스로 넣어주어서 props라고 명시하지 않음
    <Form onSubmit ={handleSubmit}>
        <Text>Hello, What's your name?</Text>
        <Input value ={value} onChange={handleChange}/>
    </Form>
);
//데이터타입체크
Name.propTypes={
    value: PropTypes.string.isRequired,
    handleChange : PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default Name;