import React from 'react';
import ReactDOM from 'react-dom/client';
import Child from "./Child"
class Myclass extends React.Component {
    constructor(props) {
        super(props);
        this.state ={value:"In constructor", show:true};
        
    }

    // static getDerivedStateFromProps(props,state) {

    //     return {value:props.value};

    // }
    componentDidMount() {
        setTimeout(() => {
          this.setState({value: "In component didmount"})
        }, 1000)
      }

     
    changeValue= () => {
        this.setState({value:"In change function"});
        
    }
    shouldComponentUpdate() {
        return true;
      }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
        "Before the update,  " + prevState.value;
    }
    componentDidUpdate() {
        document.getElementById("div2").innerHTML =
        "The updated value is " + this.state.value;
      }

      delValue= () => {
        this.setState({show:false});
        
    }

    render () {
        let myheader;
        if (this.state.show) {
        myheader = <Child />;
    };
        return (
            <div>
                <h1>{this.state.value}</h1>                
                <button type="button" onClick={this.changeValue}>Change Value </button>   
                <div id="div1"></div>
                <div id="div2"></div>   
                <div>
               {myheader}
                <button type="button" onClick={this.delValue}>Delete Value</button>    
                </div>      
            </div>
        )
    }
}
export default Myclass