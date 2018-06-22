
function fetchProducts (done) {
    $.get('/api/products', function (data) {
        done(data)
    })
}

function addProduct (name, manuf, price, done) {
    $.post('/api/products', {
        name: name,
        manufacturer: manuf,
        price: price
    }, function (data) {
        done(data)
    })
}

function createProductCard (product) {
    return $(`
    <div class="col-4 card mycard ">
        <h4 class="product-name"><b>${product.name}</b></h4>
        <div class="product-manufacturer">${product.manufacturer}</div>
        <div class="row">
            <div class="col ">
                Rs. ${product.price}
            </div>
            <button class="col btn btn-primary m-3 " onclick= "addToCart('${product.name}','${product.manufacturer}','${product.price}')">Buy</button>
        </div>
    </div>`
        )
}


function addToCart(name,manuf,price){
    console.log("Button clicked");
    let obj=   { name:  name,
        price:  price,
        manufacturer: manuf
      }
      console.log(obj)
    $.post('/api/cart',obj,function(data){
          console.log("data");
    })
}
