let box1=document.getElementById('name');
let box2=document.getElementById('profession');
let box3=document.getElementById('age');
let Err=document.getElementById('error');
let lst=document.getElementById('lst');
let arr=[];


function validate(){
    if(box1.value=="" || box2.value=="" || box3.value=="" || isNaN(box3.value)){
        Err.innerText="Error : Please Make sure All the fields before adding in an employee !"
        Err.style.color="red";
    }
    else{
        Err.innerText="Success:Employee Added !"
        Err.style.color="green";
        lst.innerText=""

        let id=arr.length+1;
        arr.push({id:id,name:box1.value,profession:box2.value,age:box3.value,});
        display();
        clear();


    }
    
}
function display(){

    
    let tables="<table border='2|2' class='table'>"

    tables+="<thead>";
    tables+="<tr>";
    tables+="<td>"+'S.No'+"</td>";
    tables+="<td>"+'Name'+"</td>";
    tables+="<td>"+'Profession'+"</td>";
    tables+="<td>"+'Age'+"</td>";
    tables+="<td>"+'Action'+"</td>";    
    tables+="</tr>";
    tables+="</thead>";

    for(let i=0; i<arr.length;i++){
        let sno=i+1;
        tables+="<tr>";
        tables+="<td>"+sno+"</td>";
        tables+="<td>"+arr[i].name+"</td>";
        tables+="<td>"+arr[i].profession+"</td>";
        tables+="<td>"+arr[i].age+"</td>";
        tables+="<td>"+`<button style="background-color: white ;color: black; border-radius: 20px ; type="button" onclick="remove(${arr[i].id})">Delete </button>`+"</td>";  
        tables+="</tr>";

    }
document.getElementById("tbl").innerHTML=tables;
    
}

function clear(){
    box1.value="";
    box2.value="";
    box3.value="";
}

function remove(num){
    let fil=arr.filter((element,inx)=>{
        if(num ==element.id){
            arr.splice(inx,1);
            display();
        }
    })
}

// let tr=document.createElement('tr');

//         let ids=tr.appendChild(document.createElement('td'));
//         let td1=tr.appendChild(document.createElement('td'));
//         let td2=tr.appendChild(document.createElement('td'));
//         let td3=tr.appendChild(document.createElement('td'));
//         let td4=tr.appendChild(document.createElement('td'));

//         ids.innerHTML=++Sno;
//         td1.innerHTML=box1.value;
//         td2.innerHTML=box2.value;
//         td3.innerHTML=box3.value;
//         // td4.innerHTML=<input type="buttion" value="Delete"></input>

//         document.getElementById('tbl').appendChild(tr);