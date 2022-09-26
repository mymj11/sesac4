import React, {useState} from "react";

function Practice(){
    const [list, setList] = useState([]);
    const [results, setResult] = useState([]);

    function writeList(){
        let form = document.getElementById("form_write");
        let newList = {
            writer: form.writer.value,
            title: form.title.value
        };

        setList([...list, newList]);
        // list = [
        //     {wirter: ~~~, title: ~~~},
        //     {wirter: ~~~, title: ~~~},
        //     {wirter: ~~~, title: ~~~},
        //     {wirter: ~~~, title: ~~~},
        // ]
    }

    function searchList(){
        let form = document.getElementById("form_search");

        //작성자 기준으로
        //let newList = list.filter((result) => {
            //result = {writer : ~~~, title: ~~~~}
            // return result["writer"].includes(form.search.value);
            //return result[form.type.value].includes(form.search.value); //작성자와 제목도 검색가능.
        //}); //이 조건에 부합하는 newList가 만들어졌다.

        let type = form.type.value; //select 태그에서 내가 선택한 것.(writer / title)
        let search = form.search.value; //input 태그에서 내가 입력한 검색어.
        let newList = list.filter((result) => {
            //result = {writer:~~~, title:~~`}
            if (result[type].includes(search)) return result;
            //return result[form.type.value].includes(form.search.value);
        });

        setResult(newList);
    }

    return(
        <div>
            <form id="form_writer">
                <input type="text" name="writer" placeholder="작성자" />
                <input type="text" name="title" placeholder="제목" />
                <button type="button" onClick={writeList}>작성</button>
            </form>
            <form id="form_search">
                <select name="type">
                    <option value="writer">작성자</option>
                    <option value="title">제목</option>
                </select> 
                <input type="text" name="search" placeholder="검색어" />
                <button type="button" onClick={searchList}>검색</button>
            </form>

            <table border={1}>
                <thead>
                    <tr>
                        <th>번호</th><th>제목</th><th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((value, i) => {
                        //value = {witer: ~~~, title: ~~~};
                        return(
                            <tr>
                                <td>{i+1}</td>
                                <td>{value.title}</td>
                                <td>{value.writer}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        
        {
        results.length > 0 ?
        (
        <div>
            <h4>검색 결과</h4>
            <table border={1}>
                <thead>
                    <tr>
                        <th>번호</th><th>제목</th><th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((value, i) => {
                        return(
                            <tr>
                                <td>{i+1}</td>
                                <td>{value.title}</td>
                                <td>{value.writer}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {/* {
                results.length > 0 ?
                (
                    <div>있다</div>
                ) : (
                    <h5>검색 결과가 없습니다.</h5>
                )
            } */}
        </div>
        ) : (
            <h5>검색 결과가 없습니다.</h5>
        )
    }
    </div>
    )
}

export default Practice;