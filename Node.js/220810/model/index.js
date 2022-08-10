const Sequelize = require("sequelize");

const config = require("../config/config.json")["development"];

//const a = require("../config/config.json");
//const a = {
//     "development" : {"host": localhost ~~~},
//      "production" : {
//}   
//const config = a["development"];
//{
//     "host": "localhost",
//     "database": "sesac",
//     "username": "1234",
//     "dialect": "mysql"
// }
const db = {};
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
//const a = require("./Visitor");
//const b = a(sequelize, Sequelize);

db.Visitor = require("./Visitor")(sequelize, Sequelize);
//db.Visitor은 함수를 실행한 결과
//model/Visitor.js에서 함수가 실행되고 return된 model
//db.Visitor에는 model이 담긴 것. model.Visitor에서 동일하게 담기는 것
//const a = require(./"Vistior")(sequelize, Sequelize);
//const test=require("./Visitor") -> ./Visitor.js에서 modeul.~~?
//const test2=test();
//이 Visitor에 Visior.js에서 테이블 구조 만든거? 모델링?한게 들어오게 된다
//db={Visitor: "model/Visitor"~~}
//models는 db다.

//const db = {"sequelize": sequelize, "Sequelize": Sequelize};
//module.exports = {"sequelize": sequelize, "Sequelize": Sequelize};
module.exports = db;

// sequelize라는 객체를 하나 만들어 모듈로 내보냈다.
// sequelize는 항상 객체를 보낸다. 
// sequelize는 들어갔다에서 끝나는 것이 아니라, 새로 들어간 모든 컬럼들을 보여준다.