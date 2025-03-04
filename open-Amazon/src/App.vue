<script setup lang="ts">
  import { RouterView ,RouterLink} from 'vue-router'
  import { computed ,toValue,watch} from 'vue'
  import { useRoute } from 'vue-router'
  import { useCartStore } from './store/cart'

  const cartQuantity = computed(() => useCartStore().cartQuantity);
  const route = useRoute()
  const targetRoute = computed(() => {
    // 如果当前路径为 "/" 则跳转到 "/order"，否则返回 "/"
    return route.path === '/' ? '/order' : '/'
  })
</script>

<template>
  <div id = 'router'>
    <div class="amazon-header">
      <div class="amazon-header-left-section">
        <RouterLink to="/" class="header-link">
          <img class="amazon-logo"
            src="../images/amazon-logo-white.png">
          <!-- <img class="amazon-mobile-logo"
            src="../images/amazon-mobile-logo-white.png"> -->
        </RouterLink>
      </div>

      <div>
        <RouterLink to = '/home'>
         
          <img id = 'home-logo' src = '../images/home-logo.png'>
        </RouterLink>
      </div>

      <div class="amazon-header-middle-section">
        <input class="search-bar" type="text" placeholder="Search">

        <button class="search-button">
          <img class="search-icon" src="../images/icons/search-icon.png">
        </button>
      </div>

      <div class="amazon-header-right-section">
        <RouterLink :to=targetRoute class="orders-link header-link">
          <span class="returns-text">Returns</span>
          <span class="orders-text">& Orders</span>
        </RouterLink>

        <RouterLink to = '/cart' class="cart-link header-link" >
          <img class="cart-icon" src="../images/icons/cart-icon.png">
          <div class="cart-quantity js-cart-quantity">{{ cartQuantity }}</div>
          <div class="cart-text">Cart</div>
        </RouterLink>
      </div>
    </div>

  </div>

  <div id = 'routers'>
    <RouterView>

    </RouterView>

  </div>
    
    
</template>


<style scoped>
/* 基础布局优化 */
#router {
  position: relative;
  z-index: 1000;
}

.amazon-header {
  background: linear-gradient(to right, #131921, #232f3e);
  padding: 0 2rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-bottom: 2px solid #ff9900;
}

/* Logo 区域优化 */
.amazon-header-left-section {
  flex: 0 0 auto;
}

.header-link {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}

.header-link:hover {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 0 2px #ff9900;
}

.amazon-logo {
  height: 3rem;
  width: auto;
  transition: transform 0.3s ease;
}

.amazon-logo:hover {
  transform: scale(1.05);
}

/* 搜索框现代化改造 */
.amazon-header-middle-section {
  flex: 1;
  max-width: 800px;
  min-width: 200px;
  position: relative;
}

.search-bar {
  width: 80%;
  height: 4.2rem;
  padding: 0 5rem 0 2rem;
  border: none;
  border-radius: 4rem;
  background: #ffffff;
  font-size: 1.4rem;
  color: #131921;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.search-bar:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(255, 153, 0, 0.3);
}

.search-button {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 5rem;
  background: linear-gradient(to right, #ff9900, #ffaf4d);
  border: none;
  border-radius: 0 4rem 4rem 0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.search-button:hover {
  background: linear-gradient(to right, #ffaf4d, #ff9900);
  width: 6rem;
}

.search-icon {
  height: 2rem;
  filter: brightness(0) invert(1);
}

/* 右侧导航优化 */
.amazon-header-right-section {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.orders-link {
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.orders-link:hover {
  background: rgba(255, 255, 255, 0.1);
}

.returns-text {
  font-size: 1.2rem;
  color: #cccccc;
}

.orders-text {
  font-size: 1.4rem;
  font-weight: 700;
  color: white;
}

/* 购物车现代化设计 */
.cart-link {
  position: relative;
  padding: 0.8rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.cart-link:hover {
  background: rgba(255, 255, 255, 0.1);
}

.cart-icon {
  width: 4rem;
  height: 4rem;
  transition: transform 0.3s ease;
}

.cart-link:hover .cart-icon {
  transform: scale(1.1);
}

.cart-quantity {
  position: absolute;
  top: 0.2rem;
  left: 2.2rem;
  background: #ff9900;
  color: white;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 700;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.cart-text {
  display: none; /* 移动端隐藏文字 */
}

/* 响应式设计 */
@media (max-width: 768px) {
  .amazon-header {
    padding: 0 1rem;
    height: 5rem;
    gap: 1rem;
  }

  .amazon-logo {
    height: 2.5rem;
  }

  .search-bar {
    height: 3.6rem;
    padding-left: 1rem;
    font-size: 1.2rem;
  }

  .search-button {
    width: 4rem;
  }

  .orders-text {
    display: none;
  }

  .returns-text {
    font-size: 1.1rem;
  }

  .cart-quantity {
    width: 2rem;
    height: 2rem;
    font-size: 1.2rem;
    left: 1.8rem;
  }

  .cart-icon {
    width: 3.2rem;
    height: 3.2rem;
  }
}

@media (max-width: 480px) {
  .amazon-header-middle-section {
    display: none;
  }
}

#routers {
  margin-top: 0rem;
  padding: 2rem;
  min-height: calc(100vh - 6rem);
  background: #f3f3f3;
}

@media (max-width: 768px) {
  #routers {
    margin-top: 5rem;
    padding: 1rem;
  }
}


.amazon-logo,.amazon-mobile-logo,#home-logo
,.search-icon,.cart-icon{
  width:40px;
  height:40px;
}

.cart-icon{
  width:70px;
  height:70px;
}

.amazon-logo{
  width:80px;
  /* height:60px; */
}
</style>
