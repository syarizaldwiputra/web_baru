// document.writeln("Hello World");

// tipe data number

// document.writeln(12);
// document.writeln("</br>");
// document.writeln(12.1)

// tipe data hexa,binery,octal

// const binery = (0b111010);
// console.log(binery);

// const hexa = (0x01010);
// console.log(hexa);

// const octal = (0o01010);
// console.log(octal);

// // tipe data boolean

// const benar = (true);
// console.log(benar);

// const salah = (false);
// console.log(salah);

// tipe data string

// document.writeln("</br>");
// document.writeln("Muhamad Syarizal Dwi Putra");
// document.writeln("</br>");
// document.writeln("Programmer Beginner");

// document.writeln("</br>");
// document.writeln("Nama :" +  "Muhammad " + "Syarizal");
// document.writeln("</br>");
// document.writeln("Kelas :" + "12 " + "SIJA");

// variable

//  const fullName = "Muhammad Syarizal Dwi Putra";
// fullName = "Al Badri";
// console.log(fullName);

// const firstName = "Chiko Hakles";
// firstName = "Rahmat Mulyana";
// console.log(firstName);

// const middleName = "Ojak";
// middleName = "Najmi";
// console.log(middleName);

// const lastName = "Abiyan Fajar";
// lastName = "Fajar Dwi";
// console.log(lastName)

// Operator Logika

// const nilaiUjian = 80;
// const nilaiAbsen = 85;

// const lulusUjian = nilaiUjian > 80;
// const lulusAbsen = nilaiAbsen < 80;

// const lulus = lulusUjian && lulusAbsen;
// console.error(lulus);

// string template

// const name = "Adit Sopo Jarwo";
// const template = `Nama : ${name}`;

// console.log(template);

// const nilai = 90;
// const template2 = `Nama : ${name}, Lulus : ${nilai < 90}`;

// console.log(template2);

// template multiline string

// const multiline = `Nama saya Ijal,
// Saya tinggal di rumah,
// Kadang mager ngapa-ngapain`;

// console.log(multiline);

// tipe data array

// const arrayKososng = [];
// const arrayNama = ["Syarizal", "Dwi", "Putra"];

// console.log(arrayNama);

// const names = [];
// names.push("Maulana")
// names.push("Ihsan", "Mawardi");

// console.table(names);

// cara ubah,hapus,menambah array -> array

// names.push(1,2,3,4);
// names.push(["Chiko", "Hakles"]);

// console.table(names);

// delete names[7];

// console.table(names);

// tipe data object

// const orang = {
//     "nama lengkap": "Syarizal Dwi Putra",
//     kelas: 12,
//     alamat: "Jakarta"
// };

// console.info(`Nama : ${orang["nama lengkap"]}`);
// console.info(`Kelas : ${orang.kelas}`);
// console.info(`Alamat : ${orang.alamat}`);

// console.table(orang);

// delete orang["kelas"];

// console.table(orang);

// if else expression

// const nilaiAkhir = 70;

// if (nilaiAkhir > 80) {
//     console.log("Good Job : A");
// } else if (nilaiAkhir >70) {
//     console.log("Good Job : B");
// } else if (nilaiAkhir >60) {
//     console.log("Good Job : C");
// } else {
//     console.log("Coba Lagi Tahun Depan");
// }

// popup : alert, prompt, confirm

// const masuk = confirm("Anda yakin ingin masuk?");
// if (masuk) {
    // const nama = prompt("Siapa Nama Anda?");
    // alert(`Hello ${nama}`);
    // console.log(`Hello ${nama}`);
// } else {
    // alert("Bye-bye");
    // console.log("Bye-bye");
// }

// undefined

// const nama = ["Syarizal", "Dwi", "Putra"];
// if (nama[2] === undefined) {
//     console.log("Array Undefined");
// } else {
//     console.log("Array Defined");
// }

// const orang = {
//     nama : "Syarizal"
// };
// if (orang.nama === undefined) {
//     console.log("Object Undefined");
// } else {
//     console.log("Object Defined");
// }

// Null

// const namaDepan = "eko";

// if(namaDepan === undefined) {
    // alert("UNDEFINED");
    // console.log("undefined");
// } else if (namaDepan === null) {
    // alert("NULL");
    // console.log("null");
// } else {
    // alert(namaDepan);
    // console.log(namaDepan);
// }

// switch expression

// const asal = "A";

// switch (asal) {
//     case "A":
//         console.log("Anda Lulus Dengan Baik");
//         break;
//     case "B":
//     case "C":
//         console.log("Anda Lulus");
//         break;
//     case "D":
//         console.log("Anda Tidak Lulus");
//         break;
//     default:
//         console.log("Mungkin Anda Salah Jurusan");
// } 

// operator typeof

// let data = true;
// const typeData = typeof data;
// console.log(`${typeData}`);

// operator in

// const contohNama = {
//     awalan: "Dia",
//     tengah: "Kami",
//     akhir: "Saya"
// }

// if ("awalan" in contohNama) {
//     alert (`Hello ${contohNama.tengah}`);
// } else {
//     alert ("Hello Student");
// }

// ternary operator

// const hasil = 80;
// const rapot = hasil >= 90 ? "Selamat Anda Lulus" : "Silahkan Coba Lagi";

// console.log(`${rapot}`);

// nullish coalescing

// let jarak = null;
// asal = jarak ?? "Asal Kota";
// console.log(asal);

// optional chaining

// const diri = {
//     address: {
//         country: "Philipin"
//     }
// };

// let koreksi = diri?.address?.country;
// alert(`${koreksi}`);

// falsy & truthy

// const data = -0;

// if (data) {
//     console.log("TRUE");
// } else {
//     console.log("FALSE");
// }

// operator logika di non boolean
// jika (&&) AND untuk mengambil falsy

// sementara (||) atau OR untuk mengambil truthy
// console.log("Halo" || "");
// console.log("0" || "NOL");
// console.log("" || []);

// const inisial = {
//     inisialPertama: "EDAN",
//     inisialKedua: "Mulayana"
// };

// const nLengkap = inisial.inisialPertama || inisial.inisialKedua;
// console.log(nLengkap);

// for loop (Perulangan)

// for (let streak = 1; streak <= 10; streak++) {
    // console.log(`ke ${streak}`);
    // perulangan dengan post statement
// }

// while loop

// let streak = 1
// while (streak <= 10) {
//     console.log(`ke ${streak}`);
//     streak++;
// }

// let streak = 1
// do {
//     console.log(`ke ${streak}`);
//     streak++;
// } while (streak <= 10);

// break & continue

// let counter = 1
// while (true) {
//     console.log(`perulangan ke ${counter}`);
//     counter++;

//     if (counter >10)
//     break;
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0){
//         continue;
//     }
//     console.log(`Perulangan Ganjil ${i}`);
// }

// Label

// var i = '';
// for (let i = 0; i < 100; i++){
//     var j = '';
//     for (let j = 0; j < 10; j++){
//         console.log(`${i} - ${j}`);
//     }
// }


//  For In (Object)

// const person = {
//     firstName: "Ijal",
//     middleName: "Dwi",
//     lastName: "Putra"
// };

// for(const property in person){
//     console.log(`${property} : ${person[property]}`);
// }

// For Of (Array)

// const names = ["Ijal", "Dwi", "Putra"];
//     for(const name of names){
//         console.log(`${name}`);
//     }

// function parameter

// function dataDiri(namaDepan, namaBelakang) {
//     console.log(`Hello ${namaDepan} ${namaBelakang}`);
// }
// dataDiri("Dwi", "Putra");

// function return value

// function hello(firstName, lastName) {
//     const say = `Hello ${firstName} ${lastName}`;
//     return say;
// }
// const result = hello("Najmi", "Rahmat");
// console.log(result);

// function getScore(value){
//     if (value > 90) {
//         return "A";
//     } else if (value > 80) {
//         return "B";
//     } else if (value > 70) {
//         return "C";
//     } else if (value > 60) {
//         return "D";
//     } else {
//         return "E";
//     }
// }
// const finalScore = getScore(80);
// console.log(finalScore);

// menghentikan eksekusi dengan return

// function isContains(array, searchValue) {
//     for (const element of array) {
//         console.log(`Iterasi Element ${element}`);
//         if (element === searchValue) {
//             return true;
//         }
//     }
//     return false;
// }

// const array = ["ijal", "dwi", "putra"];
// const search = "dwi";
// const found = isContains(array, search);
// console.log(`${found}`);

// optional parameter

// function sayHello(firstName, middleName, lastName) {
//     console.log(firstName);
//     console.log(middleName);
//     console.log(lastName);
// }

// sayHello();
// sayHello("Ijal");
// sayHello("Putra", "Siregar");

// default parameter

// function register(name, alamat = "UNKNOWN") {
//     console.log(name);
//     console.log(alamat);
// }

// register();
// register("Guh", "Jakarta");

// rest parameter

// function sum(name, ...data) {
//     let total = 0;
//     for (const item of data) {
//         total += item;
//     }
//     console.log(`Total ${name} is ${total}`);
// }
// sum("Mobil", 10, 20, 30, 40, 50,);
// sum("Motor", 10, 20, 30, 40,);
// sum("Sepeda", 10, 20, 30);

// jika ingin menggunakan spread syntax

// const values = [10, 20, 30, 40, 50, 60,]
// sum("Kapal", ...values);

// function di value/variabel

// function sayHello(name){
//     console.log(`Hello ${name}`);
// }
// sayHello("Nanda");

// const say = sayHello;

// say("Opal");

// function di parameter
//  function giveName(callback) {
//     callback("Lima");
//  }

//  giveName(sayHello);
//  giveName(say);

// Anonymous function

// di dalam variable

// const say = function (nama) {
//     console.log(`Hello ${nama}`);
// }

// say("Mandra");
// say("Jawir");

// di dalam parameter

// function giveName(callback){
//     callback("Saya");
// }

// giveName(function(nama){
//     console.log(`Hi ${nama}`);
// });

// function dalam function

// function outer(){

//     function inner(){
//         console.log("inner");
//     }

//     inner();
//     inner();

// }

// outer();
// inner(); *Error karena function inner tidak bisa di panggil di luar

// global scope

// let number = 0;

// function tambah(){
//     number +1;
// }

// function (tambah & kurang) merupakan definisi local scope

// function kurang(){
//     number -2;
// }

// tambah();
// kurang();

// console.log(number);

// nested scope

// function first(){
//     let firstVariable = "first";

//     function firstNested(){
//         console.log(firstVariable);
//     }
//     firstNested();
// }
// first();

// function recursive

// function factorialRecursive(value){
//     if (value === 1){
//         return 1;
//     } else {
//         return value * factorialRecursive(value - 1);
//     }
// }
// console.log(factorialRecursive(4));

// function generator

// function generator sederhana

// function* createNames(){
//     yield "Ijal";
//     yield "Dwi";
//     yield "Putra";
// }

// const names = createNames();
// for (name of names){
//     console.log(name);
// }

// generator kompleks

{
    function* buatGanjil(value) {
        for (let i = 1; i <= value; i++) {
            if (i % 2 === 1) {
                yield i;
            }
        }
    }
    const numbers = buatGanjil(100);
    for (number of numbers){
        console.log(number);
    }
}

// arrow function

{
    const welcome = (name) => {
        const say = `Selamat Datang Di ${name}`;
        console.log(say);
    }
    welcome("SMKN 26 Jakarta");
}

// arrow tanpa blok (`{}`)

{
    const welcome = (name) => console.log(`Selamat Datang Di ${name}`);

welcome("SMKN 26 Jakarta");
}

// arrow return value

{
    const sum = (first, second) => {
        return first + second;
    }
    
    
    const pertama = (first, second) => first + second;
    console.log(sum(20, 22));
}

// arrow function tanpa parameter

{
    const sapaan = nama => console.log(`Apa Kabar? ${nama}`);
sapaan("Ijal");
}

// arrow dengan parameter

{
    function giveName(callback) {
        callback("Ijal");
    }
    
    giveName(nama => console.log(`Hi ${nama}`));
}

// closure

{
    function createAdder(value) {
        const owner = "Ijal";
    
        function add(param) {
            console.log(owner);
            return value = param;
        }
        return add;
    }
    
    const addTwo = createAdder(2);
    // function addTwo(param){
    //     console.log("Ijal");
    //     return 2 + param;
    // }
    console.log(addTwo(10));
    console.log(addTwo(20));
    
    const addTen = createAdder(10);
    // function addTwo(param){
    //     console.log("Ijal");
    //     return 10 + param;
    // }
    // console.log(addTen(10));
    // console.log(addTen(20));
    
}

// membuat object dengan method

{
    const person = {
        name: "Ijal",
        sayHello: function (name){
            alert(`Hello ${name}`);
        }
    };
    person.sayHello('Putra');
}

// membuat method ke object

{
    const person = {
        name: "Ijal"
    };
    
    person.sayHello = function (name){
        alert(`Hello ${name}`);
    }
    
    person.sayHello("Dwi");
    
// this di global scope
    
    console.log(this);
    
    function sample() {
        console.log(this);
    
        function inner() {
            console.log(this);
        }
    
        inner();
    }
    
    sample();
}

// this di object method

{
    const person = {
        name: "Ijal",
        sayHello: function (value){
            console.log(`Hello ${value} My Name Is ${this.name}`);
        }
    };
    person.sayHello("Putra");
    person.sayHello("Badri");
    
}

// catatan : arrow funtion tidak dapat digunakan untuk arguments object,function generator,kata kunci this,kata kunci super

// arrow function di object

// object method arrow function

{
    const person = {
        name: "Satu",
        sayHello: (name) => {
            console.log(`Hello ${name}`);
        }
    };
    person.sayHello("Sija");
}

// getter (mengambil data)

{
    const person = {
        firstName: "Sija",
        lastName: "Satu",
        get fullName(){
            return `${this.firstName} ${this.lastName}`;
        }
    }
    person.lastName = "Dua";
    console.log(person.fullName);
}

// setter (merubah data)

{
    const orang = {
        namaDepan: "Bangunan",
        namaAkhir: "Satu",
        get namaLengkap(){
            return `${this.namaDepan} ${this.namaAkhir}`
        },
        set namaLengkap(value){
            const array = value.split(" ");
            this.namaDepan = array [0];
            this.namaAkhir = array [1];
        }
    };
    orang.namaLengkap = "Bangunan Dua";
    console.table(orang);
    
    orang.namaLengkap = "Bangunan Tiga";
    console.table(orang);
    
    orang.namaLengkap = "Bangunan Empat";
    console.table(orang);
}

// destructuring di array

{
    const names = ["Ijal", "Sija", "Satu", "Abu", "Bangunan", "Satu"];
const [firstName, middleName, lastName, ...other] = names;

console.log(firstName);
console.log(middleName);
console.log(lastName);
console.log(other);

}

// destructuring di object

{

    const person = {
        firstName: "Ijal",
        lastName: "Putra",
        address: {
            street: "Jalan Belum Ada",
            city: "Jakarta",
            country: "Indonesia",
        },
        hobby: "Game",
        channel: "Youtube Sija Satu"
    };

    // let {firstName, lastName, address, ...other} = person
    // console.log(firstName);
    // console.log(lastName);
    // console.log(address);
    // console.log(other);

    // destructuring nested object
    
    let {firstName, lastName, address: {city, street, country}, ...others} = person
    console.log(firstName);
    console.log(lastName);
    console.log(city);
    console.log(street);
    console.log(country);
    console.log(others);


}

// destructuring di function parameter

{
    function displayPerson(person) {
        console.log(person.firstName);
        console.log(person.middleName);
        console.log(person.lastName);
    }

    const person = {
        firstName: "Sija",
        middleName: "Listrik",
        lastName: "Bangunan"
    };
    displayPerson(person);
}

{
    function sum([first, second]) {
        return first + second;
    }
    console.log(sum([1,1]));
    console.log(sum([10,10]));
}


