// const func1 = new Promise((resolve, reject) => {
//     var flag = true;
//     if (flag) resolve("성공");
//     else reject("실패");
// })

const func1 = new Promise(function(resolve, reject){
    var flag = true;
    if (flag) resolve("성공");
    else reject("실패");
})

// // value에 성공이 들어온다.
// func1.then(value => {
//     return value + "1";
// }).then(result => {
//     console.log(value);
//     // then 밑에 또 then을 쓸 수 있다.
// }).catch(err => {
//     console.log(err);
// });

func1.then(function(value){
    return value + "1";
}).then(result => {
    console.log(value);
}).catch(err => {
    console.log(err);
});