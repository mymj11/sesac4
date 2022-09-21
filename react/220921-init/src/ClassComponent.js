import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                {/* ClassComponent 태그 사이에 작성한 리액트라는 문자열을 ClassComponent 내부에서 보여주려면 prop.children */}
                <h2>ClassComponent - function</h2>
                <h5>name : {this.props.name}</h5>
                {/* 부모가 전달한 속성들(props) 중에서 name */}
                {/* props 값은 컴포넌트 함수의 파라미터로 받아와서 사용할 수 있다. {props.name} */}
                <h5>location : {this.props.location}</h5>
            </div>
            // 클래스형 컴포넌트에서 props를 사용할 땐 render 함수에서 this.props를 조회하여 사용한다.
        );
    }
    static propTypes = {
        name: PropTypes.string
    }
}

// function ClassComponent(props) {
//     return(
//         <div>
//         {props.children}
//         <h2>ClassComponent - function</h2>
//         <h5>name : {props.name}</h5>
//         {/* 부모가 전달한 속성들(props) 중에서 name */}
//         <h5>location : {props.location}</h5>
//         </div>
//     )
// }

ClassComponent.defaultProps = {
    name: '기본 이름',
    location: '기본 위치'
}
//부모가 자식한테 전달해야 하는데 안 보냈다면 빈값으로 뜬다.
//그래서 기본값 설정을 해주는데 defaultProps가 그 역할을 해준다.
//props 값을 따로 저장하지 않았을 때 보여 줄 기본값을 설정하는 defaultProps

// ClassComponent.prototype = {
//     name: PorpTypes.string
// }
//전달된 속성의 타입이 문자(string)이어야 한다.

//Props는 값, 함수, 배열을 다 보낼 수 있다. 단, Types를 해줘야 한다?
//컴포넌트의 필수 props를 지정하거나 props의 타입을 지정할 때는 propTypes를 사용.

export default ClassComponent;
//SeSAC이라는 값이 나온다.

//ClassComponent를 할 때는 위와 같은 형식이어야 한다. 암기!
//반드시 render()를 써줘야 한다.
//extends는 확장, 상속.