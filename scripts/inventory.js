let pro=JSON.parse(localStorage.getItem("products"))
pro.forEach(function(ele,index){
    let button=document.createElement("button")
    button.innerText="Remove"

    let div=document.createElement('div')
    
    let type=document.createElement("p")
    type.innerText=ele.type;

    let desc=document.createElement("p")
    desc.innerText=ele.desc;

    let price=document.createElement("p")
    price.innerText=ele.price;

    let image=document.createElement("img")
    image.src=ele.image;

    div.append(image,type,desc,price,button)
    document.querySelector("#all_products").append(div)
    button.addEventListener('click',function(){
        removeItem(event,index)
        location.reload();
    })
})
function removeItem(ele,index){
    pro.splice(index,1)
    localStorage.setItem('products',JSON.stringify(pro))
}