import {Link, useLocation} from 'react-router-dom';
import'./Nav.css';

function Main2(){
    const location = useLocation();
    return(
        <div class = "bar">
            <Link to="/">
                <h1>ReactRouter 실습</h1>
            </Link>
            <nav>
                <ul1>
                    <li><Link to="/student/sesac">학생SeSAC</Link></li>
                    <li><Link to="/student/codingon">코딩온</Link></li>
                    <li><Link to="/student/new?name=sesac&key=id#codingon">searchParams</Link></li>
                </ul1>
            </nav>
        </div>
    );
}

export default Main2;