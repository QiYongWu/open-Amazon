<script lang="ts" name='buy' setup>
import { ref ,watch,watchEffect} from 'vue';
import { type CartItem } from '@/interfaces/cart/CartItemInterFace';
import {type CartType}  from '@/interfaces/cart/CartType'
import {useProductsStore} from '@/store/products'
import { useCartStore } from '@/store/cart';

/*
import { onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue';
//生命周期
console.log('创建完毕');
onBeforeMount(()=>{
  console.log('挂载前');
})
onMounted(()=>{
  console.log('挂载完毕');
})
*/

const useProducts = useProductsStore();
const useCart = useCartStore();


const products = useProducts.products;
const cart = useCart.cart;
const cartQuantity = useCart.cartQuantity;

function AddToCart(product,value:number){
  const item = {
    id:product.id,
    name:product.name,
    image:product.image,
    quantity:value,
    priceCents:product.priceCents,
  }

  
  useCart.pushProduct(item,value);
  useCart.showCart();
}
let selectedValue = ref(1);
function GetChangeSelectedValue(event){
      selectedValue.value = Number(event.target.value);
  }
</script>

<template>
 
  <div class="main">
  
    <div class="products-grid js-products-grid">
      
      <div class="product-container" v-for="product in products"  :key="product.id">
        <div class="product-image-container">
          <img class="product-image" :src="product.image"/>
        </div>

        <div class="product-name limit-text-to-2-lines">
          {{ product.name }}
        </div>

        <div class="product-rating-container">
 
          <img class="product-rating-stars" :src="`../../images/ratings/rating-${product.rating.stars*10}.png`">
          <div class="product-rating-count link-primary">
            {{product.rating.count}}
          </div>
        </div>

        <div class="product-price">
          ${{ (product.priceCents / 100).toFixed(2) }}
        </div>

        <div class="product-quantity-container">
          <select id = "product-quantity-selections" @change = 'GetChangeSelectedValue'>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
  
        <div class="product-spacer"></div>

        <div class="added-to-cart js-added-to-cart">
          <img src="../../../images/icons/checkmark.png">
          Added
        </div>
  
        <button class="add-to-cart-button button-primary js-add-to-cart"
        @click =  'AddToCart(product,selectedValue)'>  
          Add to Cart
        </button>
      </div>

      </div>
    </div>
 
</template>

<style scoped>
/* 基础布局优化 */
.main {
  padding: 2rem;
  background-color: #f8fafc;
  min-height: 100vh;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1440px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
}

/* 商品卡片美化 */
.product-container {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
}

.product-container:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

/* 图片容器优化 */
.product-image-container {
  position: relative;
  padding-top: 100%; /* 保持1:1宽高比 */
  background: #f1f5f9;
  border-radius: 8px;
  overflow: hidden;
}

.product-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 1rem;
  transition: transform 0.3s;
}

.product-image:hover {
  transform: scale(1.05);
}

/* 文字排版优化 */
.product-name {
  font-size: 1rem;
  font-weight: 100;
  color: #1e293b;
  margin: 1rem 0;
  line-height: 1.5;
  min-height: 3.5em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #10b981;
  margin: 0.5rem 0;
}

/* 评分样式 */
.product-rating-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
}

.product-rating-stars {
  width: 100px;
  height: 20px;
}

.product-rating-count {
  font-size: 0.875rem;
  color: #64748b;
}

/* 数量选择器美化 */
.product-quantity-container select {
  width: 100%;
  padding: 0.5rem;
  border: 2px solid #cbd5e1;
  border-radius: 6px;
  background: white;
  font-size: 1rem;
  color: #1e293b;
  transition: border-color 0.2s;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1.5em;
}

.product-quantity-container select:focus {
  outline: none;
  border-color: #10b981;
  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);
}

/* 按钮美化 */
.add-to-cart-button {
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(to right, #10b981, #34d399);
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.add-to-cart-button:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.add-to-cart-button:active {
  transform: translateY(0);
}

/* 已添加提示 */
.added-to-cart {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #10b981;
  font-weight: 500;
  margin: 0.5rem 0;
  opacity: 0;
  transition: opacity 0.3s;
}

.added-to-cart.visible {
  opacity: 1;
}

.added-to-cart img {
  width: 18px;
  height: 18px;
}

/* 间隔优化 */
.product-spacer {
  flex-grow: 1;
}
</style>