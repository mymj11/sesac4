
import React, { Component } from 'react';

class ScrollBox extends Component {

    scrollBottom = () => {
    const {scrollHeight, clientHeight} = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
    }
    render() {
        const style={
            border: '1px solid black',
            height: '400px',
            width: '400px',
            overflow: 'auto',
            position: 'relative'
        };

        const innerStyle={
            width: '100%',
            height: '700px',
            background: 'linear-gradient(white, skyblue)'
        }

        return(
            <div>
            <div style={style} ref={(ref) => {this.box=ref}}>
                <div style={innerStyle}></div>
            </div>
            
            <button onClick = {this.scrollBottom}>맨 밑으로</button>
            </div>
        );
    }
}

export default ScrollBox;







// import React, { Component } from 'react';

// class ScrollBox extends Component {
// scrollBottom = () => {
// const {scrollHeight, clientHeight} = this.box;
// this.box.scrollTop = scrollHeight - clientHeight;
// }

// render() {
//     const style={
//         border: '1px solid black',
//         height: '400px',
//         width: '400px',
//         overflow: 'auto',
//         position: 'relative'
//     };

//     const innerStyle={
//         width: '100%',
//         height: '700px',
//         background: 'linear-gradient(white, skyblue)'
//     }

//     return(
//         <div
//             style={style}
//             ref={(ref) => {this.box=ref}}
//         >
//             <div style={innerStyle}></div>
//         </div>
//     );
// }

// }

// export default ScrollBox;




// 1. 클래스형 컴포넌트 ScrollBox.js를 만듭니다.
// 2. ScrollBox.js에 div와 button을 만듭니다.
// 3. 이때, button을 클릭하면 div가 아래로 내려옵니다.