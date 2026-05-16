let cart = [];

function add(name, price){

  let item = cart.find(i => i.name === name);

  if(item){
    item.qty++;
  }
  else{
    cart.push({
      name,
      price,
      qty:1
    });
  }

  update();
}

function update(){

  let list = document.getElementById("list");

  let totalEl = document.getElementById("total");

  let count = document.getElementById("cartCount");

  list.innerHTML = "";

  let total = 0;

  let qty = 0;

  cart.forEach((item, i)=>{

    total += item.price * item.qty;

    qty += item.qty;

    let li = document.createElement("li");

    li.innerHTML = `

      <strong>${item.name}</strong><br>

      ₹${item.price} x ${item.qty}

      <br>

      <button onclick="inc(${i})">+</button>

      <button onclick="dec(${i})">-</button>

      <button onclick="del(${i})">❌</button>

    `;

    list.appendChild(li);

  });

  totalEl.innerText = "Total: ₹" + total;

  count.innerText = qty;
}

function inc(i){

  cart[i].qty++;

  update();
}

function dec(i){

  cart[i].qty--;

  if(cart[i].qty <= 0){

    cart.splice(i,1);
  }

  update();
}

function del(i){

  cart.splice(i,1);

  update();
}

function showCart(){

  document.getElementById("cart")
  .classList.add("active");
}

function closeCart(){

  document.getElementById("cart")
  .classList.remove("active");
}

function clearCart(){

  cart = [];

  update();
}

function checkout(){

  if(cart.length === 0){

    alert("Your cart is empty");

    return;
  }

  alert("Order placed successfully 🍽");

  cart = [];

  update();

  closeCart();
}

function searchFood(){

  let input = document
  .getElementById("search")
  .value.toLowerCase();

  let cards =
  document.querySelectorAll(".card");

  cards.forEach(card=>{

    let title =
    card.querySelector("h3")
    .innerText.toLowerCase();

    if(title.includes(input)){

      card.style.display="block";
    }
    else{

      card.style.display="none";
    }

  });
}