import {useParams, useLocation, useSearchParams, useNavigate} from 'react-router-dom';
import './Nav.css';

function Student(){
    const {name} = useParams();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();
    return(
        <div>
            <h1>학생의 이름은 <span>{name}</span>입니다.</h1>
            <h2>{searchParams != "" && <p>실제 이름은 <span2>{searchParams.get("name")}</span2></p>}</h2>

            <ul>
                <button onClick={() => navigate(-1)}>이전 페이지로</button>
            </ul>
        </div>
    );
}

export default Student;
