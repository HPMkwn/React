import React, { Component } from "react";
import './Calc.css'
export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { display: 0, string: "" };
    this.onClickHandler = this.onClickHandler.bind(this);
  }


  onClickHandler = (event) => {
      let char = event.target.value;
    if(char === '$'){
        if(this.state.string.length > 1)
            this.setState({string : this.state.string.slice(0, this.state.string.length-1)});
    }
    else if(char === '#'){
        this.setState({string : ''});
    }
    else if((this.state.string.length < 1 || this.state.string.slice(-1) === '+' || this.state.string.slice(-1) === '-' || this.state.string.slice(-1) === '*' || this.state.string.slice(-1) === '/' || this.state.string.slice(-1) === '.') && (char=== '+' || char=== '-' || char=== '*' || char=== '/' || char=== '.' || char=== '='))
    {}
    else{
        if(char==='='){
            this.setState({string : '' , display : eval(this.state.string)});
        }
        else{
            this.setState({string : this.state.string + event.target.value});
        }
    } 
  };

  render() {
    return (
      <div className="container">
        <div className="calc-body">
            <div className="calc-screen">
                <div className="calc-operation">
                    {this.state.display}
                </div>
                <div className="calc-typed">
                    {this.state.string}<span className="blink-me">_</span>
                </div>
            </div>
            <div className="calc-botton-row">
                <button className="button c" onClick={this.onClickHandler} value="#">C</button>
                <button className="button" onClick={this.onClickHandler} value="">≠</button>
                <button className="button" onClick={this.onClickHandler} value="">%</button>
                <button className="button l" onClick={this.onClickHandler} value="">/</button>
            </div>
            <div className="calc-botton-row">
                <button className="button" onClick={this.onClickHandler} value="7">7</button>
                <button className="button" onClick={this.onClickHandler} value="8">8</button>
                <button className="button" onClick={this.onClickHandler} value="9">9</button>
                <button className="button l" onClick={this.onClickHandler} value="*">x</button>
            </div>
            <div className="calc-botton-row">
                <button className="button" onClick={this.onClickHandler} value="4">4</button>
                <button className="button" onClick={this.onClickHandler} value="5">5</button>
                <button className="button" onClick={this.onClickHandler} value="6">6</button>
                <button className="button l" onClick={this.onClickHandler} value="-">-</button>
            </div>
            <div className="calc-botton-row">
                <button className="button" onClick={this.onClickHandler} value="1">1</button>
                <button className="button" onClick={this.onClickHandler} value="2">2</button>
                <button className="button" onClick={this.onClickHandler} value="3">3</button>
                <button className="button l" onClick={this.onClickHandler} value="+">+</button>
            </div>
            <div className="calc-botton-row">
                <button className="button " onClick={this.onClickHandler} value="0">0</button>
                <button className="button" onClick={this.onClickHandler} value=".">.</button>
                <button className="button" onClick={this.onClickHandler} value="$">E</button>
                <button className="button l" onClick={this.onClickHandler} value="=">=</button>
            </div>
        </div>
    </div>
      // <div>
      //   <div>
      //       <span>
      //        {!!this.state.display && this.state.display}
      //       {this.state.string}
      //       </span>
      //   </div>
      //   <div>
      //     <table>
      //       <tbody>
      //         <tr>
      //           <td>
      //             <button onClick={this.onClickHandler} value="7">
      //               7
      //             </button>
      //           </td>
      //           <td>
      //             <button onClick={this.onClickHandler} value="8">
      //               8
      //             </button>
      //           </td>
      //           <td>
      //             <button onClick={this.onClickHandler} value="9">
      //               9
      //             </button>
      //           </td>
      //           <td>
      //             <button onClick={this.onClickHandler} value="/">
      //               /
      //             </button>
      //           </td>
      //           <td>
      //             <button onClick={this.onClickHandler} value="#">
      //               clear
      //             </button>
      //           </td>
      //         </tr>
      //         <tr>
      //           <td>
      //             <button onClick={this.onClickHandler} value="4">
      //               4
      //             </button>
      //           </td>
      //           <td>
      //             <button onClick={this.onClickHandler} value="5">
      //               5
      //             </button>
      //           </td>
      //           <td>
      //             <button onClick={this.onClickHandler} value="6">
      //               6
      //             </button>
      //           </td>
      //           <td>
      //             <button onClick={this.onClickHandler} value="*">
      //               *
      //             </button>
      //           </td>
      //           <td>
      //             <button onClick={this.onClickHandler} value="$">
      //               erase
      //             </button>
      //           </td>
      //         </tr>
      //         <tr>
      //           <td>
      //             <button onClick={this.onClickHandler} value="1">
      //               1
      //             </button>
      //           </td>
      //           <td>
      //             <button onClick={this.onClickHandler} value="2">
      //               2
      //             </button>
      //           </td>
      //           <td>
      //             <button onClick={this.onClickHandler} value="3">
      //               3
      //             </button>
      //           </td>
      //           <td>
      //             <button onClick={this.onClickHandler} value="-">
      //               -
      //             </button>
      //           </td>
      //         </tr>
      //         <tr>
      //           <td>
      //             <button onClick={this.onClickHandler} value="0">
      //               0
      //             </button>
      //           </td>
      //           <td>
      //             <button onClick={this.onClickHandler} value=".">
      //               .
      //             </button>
      //           </td>
      //           <td>
      //             <button onClick={this.onClickHandler} value="=">
      //               =
      //             </button>
      //           </td>
      //           <td>
      //             <button onClick={this.onClickHandler} value="+">
      //               +
      //             </button>
      //           </td>
      //         </tr>
      //       </tbody>
      //     </table>
      //   </div>
      // </div>
    );
  }
}
