import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

//@ 자식= 알맹이

const fadeAni = keyframes`
    from {
        opacity :0
}
    to {
        opacity :1
    }
`;

// 홈페이지 좌측상단에 컴포넌트 위치
const Container = styled.div`
    position: fixed;
    display: flex;
    left: 0;
    top: 0;
    margin: 1rem;
`;

const Text = styled.span`
    margin-right: 1rem;
    font-weight: bold;
`;

const SearchIcon = styled.i`
    position: absolute;
    cursor: pointer;
`;

const Input = styled.input`
    
    all: unset;
    animation : ${fadeAni} 10s linear;
    border-bottom: 2px solid #fff;
    padding-left: 1.5rem;
    padding-bottom: 0.5rem;
    /* 전달받은 isOpen값의 결과에 따라 검색창화먼 토글*/
    visibility: ${prop => (prop.isOpen === true ? 'visible' : 'hidden')};
`;

const Search = ({ value, isOpen, handleSubmit, handleChange, searchButton }) => (
    <Container>
    {console.log ("프롭스", isOpen)}
        <Text>Search</Text>
        <form onSubmit={handleSubmit}>
              {/* onClick 시 isOnpen값 변경 */}
            <SearchIcon className="fas fa-search" onClick={searchButton} />
            <Input value={value} onChange={handleChange} isOpen={isOpen} />
        </form>
    </Container>
);

Search.propTypes = {
    value: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    searchButton: PropTypes.func.isRequired,
};

export default Search;