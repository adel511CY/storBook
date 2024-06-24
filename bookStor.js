
function addBook(ID , Title , Author , p , q){
    book.push([ID , Title , Author , p , q]);
}
function showBook(ID , Title , Author){
    for(let i = 1 ; i < book.length ; i++){
        if(book[i][0] == ID || book[i][1] == Title || book[i][2] == Author ){
            console.log(book[i]);
        }
    }
}
function buyBook(Title , Q , M ){
    for(let i = 1 ; i < book.length ; i++){
        if (book[i][1] == Title && Q <= book[i][4] && M >=(book[i][3] * Q) ){
            book[i][4] -= Q;
            console.log("تم حساب الفاتوره واخراج الكتب من المستودع");
        }
    }

}

let book = [
    ["ID" , "اسم الكتاب" , "اسم المؤلف" , "السعر" ,"الكمية"]
];
addBook(1 , "الذيب في الوادي" , "ذيب" , 50 , 10 );
addBook(2 , "حياة الادغال في النهار" , "ماوكلي" , 12 ,100);
addBook(3 , "حياة الادغال في الليل" , "ماوكلي" , 13 ,100);

showBook(2);

buyBook("الذيب في الوادي" ,  10 , 200) 

showBook(1);

