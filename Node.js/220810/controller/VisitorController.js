// const Visitor = require("../model/Visitor");
const models = require("../model");
//models => model/index.js에서의 db

exports.get_visitors = (req,res) => {
    //model/Visitor.js에서의 model
    //models.Visitor은 models에서 visitor을 선택한 것. models는 db다. 따라서 db에서 Visitor을 선택한 것이 된다. 
    models.Visitor.findAll()//sequelize 문법. Select * FROM visitor;//findAll()은 조건없이 모든 것을 찾는 함수
    .then((result) => {
        //console.log("result : ", result);
        // console.log("index");
        // console.log(result[0]);
        // console.log(result[0].id);
        // console.log("result : ", result);
        // console.log("index");
        //sequelize는 promise이기 때문에 .then을 쓸 수 있다.
        res.render("index", {data: result});

    });

    // Visitor.get_visitors(function( result ){
    //     console.log( "result : ", result );
    //     console.log( "index" );
    //     res.render("index", { data: result });
    // });
}

exports.post_comment = (req,res) => {
    // console.log( req.body );

    // Visitor.insert( req.body.name, req.body.comment, function( result ){
    //     res.send({ id: result });
    // } );
    let object = {
        name: req.body.name,
        comment: req.body.comment
    };
    //create() -> insert into visitor
    //create({name: '홍', comment: '길동'})
    //-> insert into visitor(name,comment) values('홍', '길동');
    models.Visitor.create(object)
    .then((result) => {
        console.log(result);
        res.send({id: result.id});
        // res.send({id: result});
    })
}

exports.get_visitor = (req,res) => {//한 개만 검색할 경우, findOne
    //select * from visitor where id = req.query.id limit 1
    models.Visitor.findOne({
        where: {id: req.query.id}
    }).then((result) => {
        console.log(result);
        res.send({result : result});
    })
    // Visitor.get_visitor( req.query.id, function(result) {
    //     console.log( "result : ", result );
    //     res.send( { result : result[0] } );
    // })//mysql은 select하면 무조건 배열에 담았다.
}

exports.patch_comment = (req,res) => {
    // Visitor.update( req.body, function(result){
    //     console.log( result );
    //     res.send( "수정 성공" );
    // });
    let newObj = {
        name : req.body.name,
        comment: req.body.comment
    };
    //update visitor set name = req.body.name, comment: req.body.comment
    // models.Visitor.update(수정할 객체, 조건)
    models.Visitor.update(newObj, {where: {id: req.body.id}})
    .then((result) => {
        console.log(result);
        res.send('수정 성공');
    })
}
// update를 하면 몇 개가 성공했는지 알려준다.

exports.delete_comment = (req,res) => {
    // Visitor.delete( req.body.id, function(result){
    //     console.log( result );
    //     res.send( "삭제 성공" );
    // });

    // destory()는 삭제하는 함수
    models.Visitor.destroy({
        where: { id: req.body.id}
    }).then((result) => {
        console.log(result);
        res.send("삭제 성공");
    })
}