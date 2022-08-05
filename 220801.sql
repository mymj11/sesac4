CREATE DATABASE sesac;
USE sesac;
CREATE TABLE user(
	ID varchar(10) not null primary key,
    name varchar(5) not null default '',
    birthday date not null
);
DESC user;

ALTER TABLE user drop column birthday;
ALTER TABLE user add column birthday date not null;

DROP TABLE user;

INSERT INTO user (ID, name, birthday) VALUES ('id3', '홍길동2', '2022-08-01');
INSERT INTO user (ID, birthday) VALUES ('id5', '2022-08-01');
INSERT INTO user VALUES ('id0', '홍길동3', '2022-08-01');

SELECT * FROM user;

SELECT * FROM user WHERE name='홍길동';
SELECT * FROM user WHERE name='홍길동' ORDER BY ID DESC;
SELECT * FROM user ORDER BY ID DESC LIMIT 2;
SELECT * FROM user LIMIT 2;
SELECT name, birthday FROM user;

/* BETWEEN a AND b */
SELECT * FROM player WHERE height BETWEEN 160 AND 180;
/* IN */
SELECT * FROM player WHERE position IN ('striker', 'goalkeeper');
SELECT * FROM player WHERE position ='striker' OR position = 'goalkeeper';
/* LIKE _ % */
SELECT * FROM user WHERE name LIKE '__동';
SELECT * FROM user WHERE name LIKE '홍%';

UPDATE user SET name = '홍길동2', birthday='2022-07-31' WHERE ID != 'id2';
SELECT * FROM user;

DELETE FROM user WHERE ID='id2';

CREATE TABLE user2(
	ID varchar(10) not null,
    name varchar(5) not null default '',
    birthday date not null
);
INSERT INTO user2 VALUES ('KIM', '김민지', '2022-08-01');
SELECT * FROM user2;

DELETE FROM user2 WHERE name = '김민지';

DROP TABLE user;

CREATE TABLE user(
	id varchar(10) not null primary key,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender ENUM('F', 'M', '') default '',
    birthday DATE not null,
    age int(3) not null default 0
);

DESC user;

INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', '33');
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', '31');
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', '53');
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', '39');
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', '47');
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('dvadva', 'k3f3aj', '송하나', 'F', '2001-06-03', '22');
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', '24');

SELECT * FROM user;

SELECT * FROM user WHERE birthday ORDER BY birthday ASC;
SELECT * FROM user WHERE gender='M' ORDER BY name DESC;
SELECT id, name FROM user WHERE '1990-01-01'<=birthday AND birthday<'2000-01-01';
SELECT * FROM user WHERE birthday LIKE '%06%' ORDER BY birthday ASC;
SELECT * FROM user WHERE gender='M' AND '1970-01-01'<=birthday AND birthday<'1980-01-01';
SELECT * FROM user ORDER BY age DESC LIMIT 3;
SELECT * FROM user WHERE '50'>=age AND age>='25';
UPDATE user SET PW='12345678' WHERE ID = 'hong1234';
SELECT * FROM user;
DELETE FROM user WHERE id='jungkrat';
SELECT * FROM user;


CREATE TABLE member(
	id varchar(20) not null primary key,
    name varchar(5) not null,
    age int(2) null,
    gender varchar(2) not null,
    email varchar(50) null,
    promotion varchar(2) null default 'X'
);
DESC member;

ALTER TABLE member add column interest varchar(100) null;
ALTER TABLE member modify column gender varchar(2) not null default '여';
ALTER TABLE member modify column id varchar(10);

DESC member;

USE sesac;
CREATE TABLE visitor(
	id int not null primary key auto_increment,
    name varchar(10) not null,
    comment mediumtext  null
);

DESC visitor;

INSERT INTO visitor (id, name, comment ) VALUES ('1', '홍길동', '내가 왔다');
SELECT * FROM visitor;








    


