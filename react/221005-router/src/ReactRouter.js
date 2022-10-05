import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'; //불러오기
import Main from './Main';
import Product from './Product';

const ReactRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Link to="/">페이지</Link>
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    {/* <Route path="/product" element={<Product />}></Route> */}
                    <Route path="/product/:id" element={<Product />}></Route>
                    {/* parm할 때? : 써야한다. */}
                </Routes>
            </BrowserRouter>
        </div>
        //경로에 따라서 <div> 안 내용만 바뀐다.
        //경로에 따라서 페이지를 다르게 보이고 싶을 때
    )
}

export default ReactRouter;