// alert("salam");



// function test(){
//     alert("salam");
// };


// // test();


// function test(name, surname){
//     console.log(name + " " + surname);
// };


// test('Arif', 'Qulu');

// function hesabla(num){
//     alert(num+num);
// }

// hesabla(5);


// function hesabla(num){
//     return num+num;
// }

// console.log(hesabla(5));


// function test(){
//     alert("salam");
// }

// let btn = document.getElementById("btn");

// btn.onclick = test;


// let btn = document.getElementById("btn");


// btn.onclick = function(){
//     alert('salam');
// } 



let result = document.getElementById("Result");

result.style.display = "none";

let luck = document.getElementById("luck");
let notluck = document.getElementById("notluck");
let again = document.getElementById("again");
let main = document.getElementById("main");

luck.style.display;
notluck.style.display;
again.style.display;
main.style.display; 


function Check(){
 
    let mail = "admin@gmail.com";
    let pass = '123';

    let userEmail = document.getElementById("email").value;
    let userPass = document.getElementById("pass").value;


    if(mail == userEmail && pass == userPass){
        Swal.fire(
            'Daxil oldunuz',
            'Email ve password',
            'success'
          )
        result.style.display = "block";
        document.getElementById("form").style.display = "none";
        luck.style.display;
        notluck.style.display = "none";
        again.style.display = "none"
        main.style.display = "none"

    }else if(userEmail == "" && userPass == ""){
        Swal.fire(
            'Məlumatları doldurun',
            'Email ve password',
            'question'
        )
        result.style.display = "block";
        document.getElementById("form").style.display = "none";
        luck.style.display = "none";
        notluck.style.display;
        again.style.display = "none";
        main.style.display;
    }
    else{
        Swal.fire(
            'Məlumat tapilmadi',
            'Email ve password',
            'question'
          )
          result.style.display = "block";
        document.getElementById("form").style.display = "none";
        luck.style.display = "none";
        notluck.style.display;
        again.style.display;
        main.style.display = "none";
    }




}


