import style from './6CSSModule.module.css';

const CSSModule = () => {
    return(
        <div className={ `${style.box1} ${style.center}`}>
            <h2>Css module</h2>
        </div>
    )
    //style.center를 추가하는 다른 방법
    //classnames 라이브러리
    //npm i classnames
    //import Names from 'classnames';
    //<div className = {Names(style.box1, style.center)} />
}

export default CSSModule;