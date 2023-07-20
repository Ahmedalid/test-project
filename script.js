var productName = document.getElementById("productName")
var productPrice = document.getElementById("productPrice")


var prodectConriner 
if(localStorage.getItem("myProduct") != null){
    prodectConriner=  JSON.parse( localStorage.getItem("myProduct"))
    displayproduct()
}else{
    prodectConriner= []
}

function addproducts(){
    var product= {
        name:productName.value,
        price:productPrice.value,
       
    }
    console.log(product);
    prodectConriner.push(product)
    localStorage.setItem("myProduct" , JSON.stringify(prodectConriner))
    // productPrice.value=document.getElementById("url").display
    displayproduct()
    clearform()
}
function clearform(){
    productName.value=""
    productPrice.value=""
   
}

function displayproduct(){
    var lesttablke=""
    for(var i=0; i<prodectConriner.length;i++){
        lesttablke +=`
        <tr>
        <td>${i}</td>
        <td>${prodectConriner[i].name}</td>
      
 
      
   
    <td><a href="###" id="url" class="btn btn-success btn-sm" >
    <span>Visit</span>
    <i class="fa-solid fa-eye"></i>
        </a>
    </td>
    <td><button class="btn btn-danger btn-sm px-4" onclick="deleteProduct(${i})">
    <i class="fa-solid fa-trash-can"></i>
   
</button>
</td>
     </tr>
        `
    }
    document.getElementById("tableProduct").innerHTML = lesttablke
}

 function deleteProduct(index){
    console.log(index);
    prodectConriner.splice(index , 1)
    console.log(prodectConriner);
    localStorage.setItem("myProduct" , JSON.stringify(prodectConriner))
    displayproduct()
}


function updteproduct(index){
    document.getElementById("btn-button").innerHTML="Update"
    productName.value=prodectConriner[index].name
    productPrice.value=prodectConriner[index].price
    productCatcry.value=prodectConriner[index].Catcry
    des.value=prodectConriner[index].desse
   
}
function Url(){
    productPrice.value
}



function validate(){
console.log(productName.value);
    var regx=/^[A-Z][a-zA-Z0-9]{3,10}$/

    if(regx.test(productName.value)){
        document.getElementById("namee").innerHTML=` <span class="text-success"> Match</span>`
    }else{
        document.getElementById("namee").innerHTML=` <span class="text-danger">Not Match</span>`
    }
    
    console.log(regx.test());
}
