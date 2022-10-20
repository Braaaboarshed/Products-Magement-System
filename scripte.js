let title =document.querySelector('.title')
let price =document.getElementById('price')
let taxes =document.getElementById('taxes')
let ads =document.getElementById('ads')
let discount =document.getElementById('discount')
let count =document.querySelector('.count');
let category = document.querySelector('.category')
let id = document.getElementById('id')
let titleDom = document.getElementById('title-show')
let newRow = document.getElementById('row')
var table = document.getElementById('table')
var body=document.getElementById('body')
let result = document.getElementById('total')
let submit = document.getElementById('submit')
let deleteAllBtn = document.getElementById('delete-all-btn');
let search = document.getElementById('search-box')
let temp ;
let validate
let mode= 'create'
let arr=[]




let item


 submit.onclick=function(){
     item = {
    title :title.value,
    price :price.value,
    taxes : taxes.value,
    ads :ads.value,
    discount :discount.value,
    total :result.innerHTML,
    category :category.value,
}
console.log(arr)

if(mode === 'update'){
arr[temp] = item
mode = 'create'
submit.innerHTML = 'Create'
}
else{
   if(title.value !='' && price.value !='' && ads.value != '' && taxes.value !='' && category.value !=''){
    if(count.value >1){
        for(let i =count.value ; i>0 ; i--){
            arr.push(item)
        }  
    }
    else{
        
        arr.push(item)
    }


   }
   else{
    document.getElementById('waring').innerHTML =  `
    <p>you should enter all inputs</p>`
    setTimeout(function(){
        document.getElementById('waring').innerHTML = ''
        }, 1000);
    
   }
}

clearData()
getTotal()
displayData()
}

displayData()
function displayData(){
    let template =''
    for(let i=0;i<arr.length;i++){
     template  +=  
     ` <tr>
              <td>${i+1}</td>
              <td >${arr[i].title}</td>
              <td >${arr[i].price}</td>
              <td>${arr[i].taxes}</td>
              <td>${arr[i].ads}</td>
              <td>${arr[i].discount}</td>
              <td id="final-total">${arr[i].total}</td>
              <td>${arr[i].category}</td>
              <td  onclick = "updateItem(${i})">update</td>
              <td  onclick ="deleteItem(${i})">delete</td>
          </tr>`
    

}
document.getElementById('body').innerHTML = template
showDeleteAllBtn()


}


    function clearData(){
       title.value=''
    price.value =''
     taxes.value=''
    ads.value=''
    discount.value=''
    result.innerHTML=''
    category.value=''
    }
 
   
function showDeleteAllBtn(){
    if(arr.length == 0){
        deleteAllBtn.innerHTML = ''
    }
    else{
        deleteAllBtn.innerHTML = `<button onclick="deleteAll()">Delete All (${arr.length})</button>`
    }
}


  function deleteAll(){
    if(arr.length > 0){
    arr.splice(0)
    displayData()
    }

   
}


function deleteItem(i){
    
    arr.splice(i,1)
    displayData()

}

function getTotal(){
    if(price.value != ''){
    let total = (+price.value + +taxes.value + +ads.value) - +discount.value

    result.innerHTML  =total
    result.style.background = 'green'
    }
    else{
        
        result.style.background = 'red'
        result.innerHTML = 'total'

    }
}



 function updateItem(i){
    title.value = arr[i].title
    price.value = arr[i].price
    taxes.value = arr[i].taxes
    ads.value = arr[i].ads
    discount.value = arr[i].discount
    category.value = arr[i].category
    count.style.display = 'none'
    submit.innerHTML = 'Update'
    temp = i
    mode = 'update'
    
}

function searchMode(id){
    if(id == 'searchByTitle'){
        search.focus()
        search.placeholder='Search by title'
    }
    else{
        search.focus()
        search.placeholder='Search by category'

    }
}



function searchResult(value){
    let template =''
    for(let i =0 ;i<arr.length;i++){
        if(search.placeholder == 'Search by category'){
            if(arr[i].category.includes(value)){
                template  +=  
                ` <tr>
                         <td>${i+1}</td>
                         <td >${arr[i].title}</td>
                         <td >${arr[i].price}</td>
                         <td>${arr[i].taxes}</td>
                         <td>${arr[i].ads}</td>
                         <td>${arr[i].discount}</td>
                         <td>${result.innerHTML}</td>
                         <td>${arr[i].category}</td>
                         <td  onclick = "updateItem(${i})">update</td>
                         <td  onclick ="deleteItem(${i})">delete</td>
                     </tr>`
            }
            
        }
        else{
            if(arr[i].title.includes(value)){
                template  +=  
                ` <tr>
                         <td>${i+1}</td>
                         <td >${arr[i].title}</td>
                         <td >${arr[i].price}</td>
                         <td>${arr[i].taxes}</td>
                         <td>${arr[i].ads}</td>
                         <td>${arr[i].discount}</td>
                         <td>${result.innerHTML}</td>
                         <td>${arr[i].category}</td>
                         <td  onclick = "updateItem(${i})">update</td>
                         <td  onclick ="deleteItem(${i})">delete</td>
                     </tr>`
            }
        }

       
        document.getElementById('body').innerHTML = template 

        
    }
    

}





    





