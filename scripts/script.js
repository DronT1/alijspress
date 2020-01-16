document.addEventListener("DOMContentLoaded", () => {
  const search = document.querySelector(".search") //обращение к html классу search
  //console.log('search', search)
  const cartBtn = document.getElementById("cart")
  const wishBtn = document.getElementById("wishlist")
  const goodsWrapper = document.querySelector(".goods-wrapper")
  const cart = document.querySelector(".cart")
  const createCardGoods = (id, title, price, img) => {
  const card = document.createElement('div')
    card.className = "card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 pb-3"
    card.innerHTML = `<div class="card">
      <div class="card-img-wrapper">
        <img class="card-img-top" src="img/temp/${img}" alt="">
        <button class="card-add-wishlist" data-goods-id="${id}"></button>
      </div>
      <div class="card-body justify-content-between">
        <a href="#" class="card-title">${title}</a>
        <div class="card-price">${price}</div>
        <div>
          <button class="card-add-cart" data-goods-id="${id}">Добавить в корзину</button>
        </div>
      </div>
    </div>`
    return card
  };

  goodsWrapper.appendChild(createCardGoods(1, "Дартс", 3500, "Archer.jpg"))
  goodsWrapper.appendChild(createCardGoods(2, "Фламинго", 34000, "Flamingo.jpg"))
  goodsWrapper.appendChild(createCardGoods(3, "Носки", 120, "Socks.jpg"))

  const openCart = (event) => {
    event.preventDefault()
    cart.style.display = 'flex'
  }

  const closeCart = (event) => {
    const target = event.target
    if (target === cart || target.classList.contains("cart-close")) cart.style.display = ''
  }

  //esc не работает
  document.addEventListener("keypress", (event) => {
    if (event.code === "KeyQ") cart.style.display = ''
  })

  cartBtn.addEventListener("click", openCart)
  cart.addEventListener("click", closeCart)

})
