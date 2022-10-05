import {useParams, useLocation, useSearchParams, useNavigate} from 'react-router-dom';

function Product(){
    const {id} = useParams();
    //const id2 = useParams().id; //새로운 변수에 담을 때 사용.
    const location = useLocation();
    //location이라는 객체를 만들었다.
    const [searchParams, setSearchParams] = useSearchParams();
    //변경할 때 사용할 함수

    const navigate = useNavigate();
    //navigate는 함수로서 사용할 수 있다. //노란색은 함수
    //이동하면서 state 값 전달.
    return(
        <div>
            <h1>{id}번 Product</h1>

            <ul>
                <li>hash : {location.hash}</li> 
                {/* hash : 저장해야 하는 값? */}
                <li>pathname : {location.pathname}</li>
                {/* 내가 지금 접속한 경로, 쿼리는 경로에 포함되지 않는다. */}
                <li>search : {location.search}</li>
                <li>state : {location.state}</li>
                {/* 페이지를 이동할 때 상태값을 임으로 넣을 수 있다. */}
                <li>key : {location.key}</li>
                {/* 페이지의 고유값, 위의 location의 고유값 */}
            </ul>

            <ul>
                {/* searchParams는 개수로 사용할 수 있다. */}
                <li>keyWords : {searchParams}</li>
                <li>keyWords : {searchParams.get("search")}</li>
                {/* 딕셔너리 형태로 되어있어서 get을 이용해서 특정 key?를 가져올 수 있다. */}
            </ul>

            <ul>
                <li><button onClick={() => navigate(-2)}>Go 2 page back</button></li>
                <li><button onClick={() => navigate(-1)}>Go back</button></li>
                <li><button onClick={() => navigate(1)}>Go forward</button></li>
                <li><button onClick={() => navigate(2)}>Go 2 page forward</button></li>
                <li><button onClick={() => navigate('/')}>Go Root</button></li>
                <li><button onClick={() => navigate('/', {state: 'a'})}>Go Root2</button></li>
            </ul>
        </div>
    );
}

export default Product;

//http://localhost:3000/product/10 라고 입력하면 10번 Product라고 뜬다.