//i. Count	even	numbers	in	array

const array=[1,2,3,4,5,6,7,8,9,10,11,24,25];
function CountEvenNums(array){
    let count=0;
    for(let i=0;i<=array.length;i++){
        if(array[i]%2===0){
            count++;
        }
    }
    return count;
}
console.log(CountEvenNums(array));



//ii. Sum	of	numbers	divisible	by	5

function SumOfNumsDivbyFive(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 5 === 0) {
            sum += array[i];
        }
    }
    return sum;
}
console.log(SumOfNumsDivbyFive(array));



//iii. Change	each	string	to	uppercase

function string_to_uppercase(){
    let String_Name= "house of the dragon";
    let UpperCase=String_Name.toUpperCase();
    console.log(UpperCase);
}
string_to_uppercase();



//vi. Create array	of	1	to	n

function notDivisibleby3(start, end){
    let array1=[];
    for(let i=start; i<end; i++){
        if(i%3===0){
            array1.push(i)
        }
    }
    console.log(array1);
}
notDivisibleby3(5,23)



//viii. Remove Hello	from  array

function RemoveHello(Str){
    return Str.split('Hello').join('');
}
let result = RemoveHello("Hello World! Hello Everyone!");
console.log(result); 

//v. Count	strings	with	b	or	B
