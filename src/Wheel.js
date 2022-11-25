import React, { Component } from "react";
import "./App.css";
class Wheel extends Component {

  state = {
    list: [
      "CAMERA",
      "Iphone 14",
      "CAR",
      "BIKE",
      "OVEN",
      "TV",
    ],
    obj:[
      "CAM6RDAU78",
      "IPHND14D76",
      "CARDSUVU78",
      "BIK23ERU78",
      "OENV02DE8",
      "5TVU66U78"
    ],
    radius: 75, // PIXELS
    rotate: 0, // DEGREES
    easeOut: 0, // SECONDS
    angle: 0, // RADIANS
    top: null, // INDEX
    offset: null, // RADIANS
    net: null, // RADIANS
    result: null, // INDEX
    spinning: false,
    coupon:"",
    prize:""
  };

  componentDidMount() {
    this.renderWheel();
  }

  renderWheel() {
    let numOptions = this.state.list.length;
    let arcSize = (2 * Math.PI) / numOptions;
    this.setState({
      angle: arcSize
    });
    this.topPosition(numOptions, arcSize);

    // dynamically generate sectors from state list
    let angle = 0;
    for (let i = 0; i < numOptions; i++) {
      let text = this.state.list[i];
      this.renderSector(i + 1, text, angle, arcSize, this.getColor());
      angle += arcSize;
    }
  }

  topPosition = (num, angle) => {
  
    let topSpot = null;
    let degreesOff = null;
    if (num === 9) {
      topSpot = 7;
      degreesOff = Math.PI / 2 - angle * 2;
    } else if (num === 8) {
      topSpot = 6;
      degreesOff = 0;
    } else if (num <= 7 && num > 4) {
      topSpot = num - 1;
      degreesOff = Math.PI / 2 - angle;
    } else if (num === 4) {
      topSpot = num - 1;
      degreesOff = 0;
    } else if (num <= 3) {
      topSpot = num;
      degreesOff = Math.PI / 2;
    }

    this.setState({
      top: topSpot - 1,
      offset: degreesOff
    });
  };


  renderSector(index, text, start, arc, color) {
    let canvas = document.getElementById("wheel");
    let ctx = canvas.getContext("2d");
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let radius = this.state.radius;
    let startAngle = start;
    let endAngle = start + arc;
    let angle = index * arc;
    let baseSize = radius * 3.33;
    let textRadius = baseSize - 150;

    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle, false);
    ctx.lineWidth = radius * 2;
    ctx.strokeStyle = color;

    ctx.font = "17px Arial";
    ctx.fillStyle = "black";
    ctx.stroke();

    ctx.save();
    ctx.translate(
      baseSize + Math.cos(angle - arc / 2) * textRadius,
      baseSize + Math.sin(angle - arc / 2) * textRadius
    );
    ctx.rotate(angle - arc / 2 + Math.PI / 2);
    ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
    ctx.restore();
  }

  getColor() {
    // randomly generate rbg values for wheel sectors
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgba(${r},${g},${b},0.4)`;
  }

  spin = () => {

    let randomSpin = Math.floor(Math.random() * 900) + 500;
    this.setState({
      rotate: randomSpin,
      easeOut: 2,
      spinning: true,
    });

    setTimeout(() => {
      this.setState({
        coupon:"Your Coupon Code is: ",
        prize:"You Won: "

      })
      this.getResult(randomSpin);
    }, 2000);
  };

  getResult = spin => {

    const { angle, top, offset, list } = this.state;
    let netRotation = ((spin % 360) * Math.PI) / 180; // RADIANS
    let travel = netRotation + offset;
    let count = top + 1;
    while (travel > 0) {
      travel = travel - angle;
      count--;
    }
    let result;
    if (count >= 0) {
      result = count;
    } else {
      result = list.length + count;
    }
    
    this.setState({
      net: netRotation,  
      result: result
    });
  };

  reset = () => {
    // reset wheel and result
    this.setState({
      rotate: 0,
      easeOut: 0,
      result: null,
      spinning: false
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="whel">Spinning  Wheel</h1>
        <span id="selector">&#9660;</span>
        <canvas
          id="wheel"
          width="500"
          height="500"
          style={{
            WebkitTransform: `rotate(${this.state.rotate}deg)`,
            WebkitTransition: `-webkit-transform ${
              this.state.easeOut
            }s ease-out`
          }}
        />

        {this.state.spinning ? (
          <button type="button" id="reset" onClick={this.reset}>
            reset
          </button>
        ) : (
          <button type="button" id="spin" onClick={this.spin}>
            spin
          </button>
        )}
        <div className="display">
          <span id="readout">
            <span id="result"> 
             {this.state.prize}{this.state.list[this.state.result]}
            </span><br/>
          </span>
        </div>
        <div className="display2">{this.state.coupon}<b> {this.state.obj[this.state.result]}</b>
       </div>
      </div>
    );
  }
}
export default  Wheel


// import React, { Component } from "react";
// import "../App.css";

// export default class Wheel extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "circle",
//       code: "",
//       text: "",
//     };
//   }
//   startRotation = () => {
//     this.setState({
//       name: "circle start-rotate",
//     });
//     setTimeout(() => {
//       this.setState({
//         name: "circle start-rotate stop-rotate",
//       });
//     }, 2000);
//     const characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     let result = " ";
//     const charactersLength = characters.length;
//     for (let i = 0; i < 10; i++) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     setTimeout(() => {
//       this.setState({
//         text: "your offer code for 12 is",
//         code: result,
//       });
//     }, 2000);
//   };
//   render() {
//     return (
//       <div>
//         <div className="arrow"></div>
//         <ul className={this.state.name}>
//           <li>
//             <div className="text" contentEditable="true" spellCheck="false">
//               1
//             </div>
//           </li>
//           <li>
//             <div className="text" contentEditable="true" spellCheck="false">
//               2
//             </div>
//           </li>
//           <li>
//             <div className="text" contentEditable="true" spellCheck="false">
//               3
//             </div>
//           </li>
//           <li>
//             <div className="text" contentEditable="true" spellCheck="false">
//               4
//             </div>
//           </li>
//           <li>
//             <div className="text" contentEditable="true" spellCheck="false">
//               5
//             </div>
//           </li>
//           <li>
//             <div className="text" contentEditable="true" spellCheck="false">
//               6
//             </div>
//           </li>
//           <li>
//             <div className="text" contentEditable="true" spellCheck="false">
//               7
//             </div>
//           </li>
//           <li>
//             <div className="text" contentEditable="true" spellCheck="false">
//               8
//             </div>
//           </li>
//           <li>
//             <div className="text" contentEditable="true" spellCheck="false">
//               9
//             </div>
//           </li>
//           <li>
//             <div className="text" contentEditable="true" spellCheck="false">
//               10
//             </div>
//           </li>
//           <li>
//             <div className="text" contentEditable="true" spellCheck="false">
//               11
//             </div>
//           </li>
//           <li>
//             <div className="text" contentEditable="true" spellCheck="false">
//               12
//             </div>
//           </li>
//         </ul>
//         <button className="spin-button" onClick={this.startRotation}>
//           Spin
//         </button>
//         <div className="box">
//             <h1>{this.state.text}</h1>
//             <h2>{this.state.code}</h2>
//           </div>
//         </div>
//     );
//   }
// }
