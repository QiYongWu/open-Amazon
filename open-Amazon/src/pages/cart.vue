<script lang="ts" name="Cart" setup>
import { useCartStore } from '@/store/cart'
import { computed } from 'vue'

const cartStore = useCartStore()
const cart = cartStore.cart

const formatPrice = (cents: number) => {
  return `¥${(cents / 100).toFixed(2)}`
}

const updateQuantity = (productId: string, quantity: number) => {
  if (quantity < 1) return
  cartStore.updateQuantity(productId, quantity)
}

const removeItem = (productId: string) => {
  cartStore.removeFromCart(productId)
}
</script>

<template>
  <div class="cart-container">
    <h1 class="cart-title">我的购物车 ({{ cart.length }})</h1>
    
    <div class="cart-grid">
      <div class="cart-card" v-for="product in cart" :key="product.id">
        <button class="remove-btn" @click="removeItem(product.id)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
        
        <img :src="product.image" :alt="product.name" class="product-image">
        
        <div class="product-info">
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-price">{{ formatPrice(product.priceCents) }}</p>
          
          <div class="quantity-control">
            <button 
              class="quantity-btn"
              @click="updateQuantity(product.id, product.quantity - 1)"
              :disabled="product.quantity <= 1"
            >-</button>
            
            <span class="quantity">{{ product.quantity }}</span>
            
            <button 
              class="quantity-btn"
              @click="updateQuantity(product.id, product.quantity + 1)"
            >+</button>
          </div>
        </div>
      </div>
    </div>
    
    <div v-if="cart.length === 0" class="empty-cart">
      <p>购物车是空的，快去选购商品吧！</p>
    </div>
  </div>
</template>

<style scoped>
.cart-container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  margin-top:60px;
}

.cart-title {

  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
}

.cart-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.cart-card {
  background: white;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: transform 0.2s;
}

.cart-card:hover {
  transform: translateY(-2px);
}

.remove-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: #ff4757;
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  opacity: 0.8;
}

.remove-btn:hover {
  opacity: 1;
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.product-info {
  text-align: center;
}

.product-name {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.product-price {
  font-size: 1.2rem;
  color: #e74c3c;
  font-weight: bold;
  margin-bottom: 1rem;
}

.quantity-control {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
}

.quantity-btn {
  width: 32px;
  height: 32px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f8f9fa;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s;
}

.quantity-btn:hover {
  background: #e9ecef;
  border-color: #ccc;
}

.quantity-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.quantity {
  font-size: 1.1rem;
  min-width: 30px;
}

.empty-cart {
  text-align: center;
  padding: 3rem;
  color: #7f8c8d;
  font-size: 1.2rem;
}
</style>