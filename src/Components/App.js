import React, {Component} from 'react';
import GlobalStyle from './GlobalStyle'
import Name from './Name'

class App extends Component {
  state ={
    name : null,
  }

  saveName = xoxo=>{
    this.setState({
      name: xoxo,// xoxo인자로 밥을줘서 setstate해서 name으로 받고
    })
    localStorage.setItem('MOMENTUM_NAME', xoxo);//로컬스토리지에 데이터를 저이름으로 저장
  }

  getName =()=>{
    const name = localStorage.getItem('MOMENTUM_NAME');
    if (name !== null){
      this.setState({name})
    }
  }

  componentDidMount(){
    this.getName();
  }

  render() {
    console.log(this.state.name)
    const {name}=this.state;
    return (
        <>
            <GlobalStyle />
            모멘텀
            {name ===null? <Name saveName={this.saveName}/> : name }
        </>
    );
}
}

export default App;