<script lang = 'ts' setup name = 'amazonHeader'>
    
</script>
<template>
    <div class="amazon-header">
      <div class="amazon-header-left-section">
        <a href="amazon.html" class="header-link">
          <img class="amazon-logo"
            src="../../images/amazon-logo-white.png">
          <img class="amazon-mobile-logo"
            src="../../images/amazon-mobile-logo-white.png">
        </a>
      </div>

      <div class="amazon-header-middle-section">
        <input class="search-bar" type="text" placeholder="Search">

        <button class="search-button">
          <img class="search-icon" src="../../images/icons/search-icon.png">
        </button>
      </div>

      <div class="amazon-header-right-section">
        <a class="orders-link header-link" href="orders.html">
          <span class="returns-text">Returns</span>
          <span class="orders-text">& Orders</span>
        </a>

        <a class="cart-link header-link" href="checkout.html">
          <img class="cart-icon" src="../../images/icons/cart-icon.png">
          <div class="cart-quantity js-cart-quantity">0</div>
          <div class="cart-text">Cart</div>
        </a>
      </div>
    </div>
</template>

<!-- <style scoped>
  .amazon-header {
  background-color: rgb(19, 25, 33);
  color: white;
  padding-left: 15px;
  padding-right: 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
}

.amazon-header-left-section {
  width: 180px;
}

@media (max-width: 800px) {
  .amazon-header-left-section {
    width: unset;
  }
}

.header-link {
  display: inline-block;
  padding: 6px;
  border-radius: 2px;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid rgba(0, 0, 0, 0);
}

.header-link:hover {
  border: 1px solid white;
}

.amazon-logo {
  width: 100px;
  margin-top: 5px;
}

.amazon-mobile-logo {
  display: none;
}

@media (max-width: 575px) {
  .amazon-logo {
    display: none;
  }

  .amazon-mobile-logo {
    display: block;
    height: 35px;
    margin-top: 5px;
  }
}

.amazon-header-middle-section {
  flex: 1;
  max-width: 850px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
}

.search-bar {
  flex: 1;
  width: 0;
  font-size: 16px;
  height: 38px;
  padding-left: 15px;
  border: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.search-button {
  background-color: rgb(254, 189, 105);
  border: none;
  width: 45px;
  height: 40px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  flex-shrink: 0;
}

.search-icon {
  height: 22px;
  margin-left: 2px;
  margin-top: 3px;
}

.amazon-header-right-section {
  width: 180px;
  flex-shrink: 0;
  display: flex;
  justify-content: end;
}

.orders-link {
  color: white;
}

.returns-text {
  display: block;
  font-size: 13px;
}

.orders-text {
  display: block;
  font-size: 15px;
  font-weight: 700;
}

.cart-link {
  color: white;
  display: flex;
  align-items: center;
  position: relative;
}

.cart-icon {
  width: 50px;
}

.cart-text {
  margin-top: 12px;
  font-size: 15px;
  font-weight: 700;
}

.cart-quantity {
  color: rgb(240, 136, 4);
  font-size: 16px;
  font-weight: 700;

  position: absolute;
  top: 4px;
  left: 22px;
  
  width: 26px;
  text-align: center;
}

</style> -->

