import React, { Component } from 'react';
import SearchPresenter from './SearchPresenter';

//@부모

class SearchContainer extends Component {
    state={
        value :"",
        isOpen: false,
    };
    handleSubmit= e =>{
        e.preventDefault();
        window.location.href =`https://www.bing.com/search?q=${this.state.value}&PC=ATMM&FORM=MMXT01`
        //bing검색문 : url부분은 'search?q={검색어}' 검색어 부분만 변경되서 해당 쿼리에 현재 value의 값을 넣고 window.location.href를 통해
        //검색어가 담긴 주소가 리다이렉트 되도록 구현
    }
    handleChange = e=>{
        this.setState({
            value : e.target.value,
        })
    }
    searchButton =()=>{
        this.setState ({
            isOpen :!this.state.isOpen, //검색을 할 수 있는 검색창이 토글형식이 되도록 구현
        })
    }
    
    
    render (){
        console.log("gh",this.state.isOpen)
        console.log("서치서치", SearchPresenter)
        const {value, isOpen}= this.state;
        return (
            <SearchPresenter value ={value} isOpen={isOpen} handleSubmit={this.handleSubmit} handleChange={this.handleChange} searchButton={this.searchButton}/>
        )
    }

}
export default SearchContainer;