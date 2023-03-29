 //1. ternary vasitesile yaz

 //let result;
 let a=4;
 let b=5;
 //if (a + b < 10) {
 //result = 'Yes';
 //} else {
 //result = 'No';
 //}
 //console.log(result);

 
 let result =(a+b<10) ? "Yes" : "No";
 console.log(result);


 //2. quvveti hesablayan funksiya

  function numPower(num,pow){
    let result =1;
    for ( let i = 1; i <=pow; i++){
        result *= num;
    }
    return result;
 }
 console.log(numPower(4,3));
 console.log(numPower(16,2));

 //3. X formatinda qara reng cixan table

 let tbl=document.getElementById('tbl');
let slc=document.getElementById('slc');

function add(){

    tbl.style.display = 'table';


    let result='';
    let color;
    for(let i=1;i<=slc.value;i++){

        result+=`<tr>`;

        for(let j=1;j<=slc.value;j++){
            color = (i == j && i+j==7) ? 'black' : '';
            result+=`<td style="background-color:${color};"> ${i}+${j} </td>`;
        }
        result+=`</tr>`;
    }

    tbl.innerHTML = result;
}

slc.addEventListener('change', add);










 
