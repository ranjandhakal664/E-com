var updateBtns = document.getElementsByClassName('update-cart')

for (i=0; i< updateBtns.length; i++){
    updateBtns[i].addEventListener('click', function(){
        var productId= this.dataset.product
        var action = this.dataset.action
        console.log('productId:',productId, 'action:',action)

        console.log('user:', user);
        if(user == 'AnonymousUser'){
            console.log('not loggedin');
        }
        else{
            updateUserOrder(productId, action)
        }
    })
}

function updateUserOrder(productId, action){
    console.log('authenticated')
    var url = '/update_item/'
    fetch(url, {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken': csrftoken,
        },
        body:JSON.stringify({'productID':productId, 'action':action})
    })
    .then((response) =>{
        return response.json()
    })
    .then((data) =>{
        console.log('Data:',data)
    });
}