const Visitor = (Sequelize, DataTypes) => {
    //Sequelize는 model/index.js에서의 sequelize
    //DataTypes는 model/index.js에서의 Sequelize

    // 테이블 구조를 정의할 것이다.
    const model = Sequelize.define(
        "visitor",//모델이름
        {
            //create ~~(id int not null auto_increment primary key)
            //위의 것을 sequelize로 표현해보자
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },//id컬럼
            name: {//name varchar(10) not null
                type: DataTypes.STRING(10),
                allowNull: false,

            },
            comment: {//comment mediumtext
                type: DataTypes.TEXT('medium'),

            }
        }, //컬럼정의(컬럼은 여러 개라서 배열형태, dictionary형태로)
        {
            timestamps: false,//true로 지정하게 되면 등록된 시간과 수정된 시간을 갖는 컬럼이 만들어진다.
            tableName: "visitor",
            freezeTableName: true,//테이블 이름을 바꾸지 말아라.
        
        }//모델옵션
        

    );// 여기서 Sequelize는 데이터 베이스와 연결된 객체이다.(config.json보자)
    return model;
    //위의 함수를 실행한 결과를 return했다.
}

module.exports = Visitor;