

var arr=JSON.parse(localStorage.getItem('products')) || []
function produc(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;

}

function item(eve){
    event.preventDefault()
    let form=document.getElementById('products')

    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;
  
    var p1=new produc(type,desc,price,image)
    arr.push(p1)
    localStorage.setItem('products',JSON.stringify(arr))
}


