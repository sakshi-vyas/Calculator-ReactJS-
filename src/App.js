import React ,  {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Solution from './components/Solution'
import Buttons from './components/Buttons'

class App extends Component{
  constructor(){
    super()
    this.state ={
      ans:''
    }
  }
  onClick = button =>
   {
    if(button === '='){
      this.calculate()
    }
    else if(button ==="AC")
{this.reset()}
else if(button==="C"){
  this.backspace()
}
else if(button ==="+/-")
{this.negate()}
else {
  this.setState({
    ans : this.state.ans + button
  })
}
 }//onClick

 calculate = ()=>{
   var checkAns = ''
   if(this.state.ans.includes('--')){
     checkAns = this.state.result.replace('--','+')
   }
   else{
     checkAns = this.state.ans
   }
   try{
     this.setState({
       ans : (eval(checkAns) || '')+""
     })
   }catch(e){
     this.setState({
       ans:'ERR'
     })
   }
 }//calculate

 reset = ()=>{
this.setState({
  ans : ""
})
 }//reset
 backspace = () => {
   this.setState({
     ans: this.state.ans.slice(0 , -1)
   })
 }//backspace
 negate =()=>{
   this.state ={
    ans :  this.state.ans * (-1)
   }
 }

 render(){
   return(
     <div >
     
     <div className="calc">
     <Solution ans={this.state.ans}/>
     <Buttons onClick={this.onClick}/>
     </div>
     </div>
   )
 }
}//Class
export default App
