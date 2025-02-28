<script lang="ts" name="amazonMain" setup>
import { productsList } from '../../data/products';

import { ref ,watch,watchEffect} from 'vue';
import { type CartItem } from '@/interfaces/cart/CartItemInterFace';
import {type CartType}  from '@/interfaces/cart/CartType'
import axios from 'axios';


import { onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue';
//生命周期
console.log('创建完毕');
onBeforeMount(()=>{
  console.log('挂载前');
})
onMounted(()=>{
  console.log('挂载完毕');
})


const products = ref(productsList);
let cartQuantity = ref(0);
let selected = ref(0);

watchEffect(()=>{
  console.log(selected.value);
})

watch(cartQuantity,(newValue)=>{   //监听购物车数量变化实时渲染
    document.querySelector('.cart-quantity').textContent = newValue
})




// const cart = ref<CartItem[]>([])
 const cart = ref<CartType>([])
// const cart:CartType = [];

function AddedToCart(product: { id: string, name: string }){
  // 先查找购物车中是否已存在该商品
  const existingItem = cart.value.find(item => item.id === product.id)
  if(existingItem) {
    // 如果存在则增加数量
    existingItem.quantity++
  } else {
    // 否则直接添加新商品
    cart.value.push({
      id: product.id,
      name: product.name,
      quantity: 1
    })
  }
  cartQuantity.value++;
  console.log('cartQuantity',cartQuantity.value);
  console.log('cart',cart.value);
}

</script>

<template>
 
  <div class="main">
    <button id = 'add-all-product-to-cart'>
      一键添加所有商品进入购物车
    </button>
    <div class="products-grid js-products-grid">
      
      <div class="product-container" v-for="product in products"  :key="product.id">
        <!--使用v-for对应的key属性进行状态管理-->
        <div class="product-image-container">
          <img class="product-image" :src="product.image"/>
        </div>

        <div class="product-name limit-text-to-2-lines">
          {{ product.name }}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars" :src="`images/ratings/rating-${product.rating.stars*10}.png`">
          <div class="product-rating-count link-primary">
            {{product.rating.count}}
          </div>
        </div>

        <div class="product-price">
          ${{ (product.priceCents / 100).toFixed(2) }}
        </div>

        <div class="product-quantity-container">
          <select id = "product-quantity-selections"  v-model= 'selected'>
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
          <img src="../../images/icons/checkmark.png">
          Added
        </div>
  
        <button class="add-to-cart-button button-primary js-add-to-cart"
        @click = AddedToCart(product)>  
          Add to Cart
        </button>
      </div>

      </div>
    </div>
 
</template>

<style scoped>
.products-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 6 列，每列等宽 */
  grid-template-rows: repeat(7, auto); /* 7 行，高度自适应 */
  gap: 30px; /* 网格间距 */
  margin-top:30px;
}

.product-container{
  text-align:center;
  border:solid 2px green;
  background-color:white;

}

.product-image{
  width:200px;
  height:200px;
  object-fit:contain;
}

.added-to-cart{
  /* opacity:0;  完全透明 */
  
  opacity:1;

}

.product-rating-container{
  display:flex;
  align-items:center;
  justify-content: center;
  padding: auto;
  align-content:center;
  gap:20px;
  margin-bottom:10px;
}

.product-name{
  height:60px;
}
.product-rating-stars{
  width:100px;
}

.product-rating-count{
  
    
}

.add-to-cart-button{
  width:100px;
  height:50px;
  margin-bottom:10px;

}

.product-name{
  margin-top:20px;
  margin-bottom:20px;
}
.product-price{
  margin-bottom:10px;
}
</style>