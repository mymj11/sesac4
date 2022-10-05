import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'; //불러오기
import Main2 from './Main2';
import Student from './Student';

const ReactRouter2 = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main2 />}></Route>
                    <Route path="/student/:name" element={<Student />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default ReactRouter2;