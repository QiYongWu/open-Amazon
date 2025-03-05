<script setup lang="ts" name = 'order'>
import { ref, computed } from 'vue'
import { useCartStore } from '@/store/cart'


// 从 Pinia store 中获取购物车数据
const { cart } = useCartStore()
const emit = defineEmits(['payment-initiated'])

// 表单数据
const formData = ref({
  name: '',
  phoneNumber:'',
  province: '',
  city: '',
  paymentMethod: 'alipay' as 'alipay' | 'wechat'
})

// 提交状态
const isSubmitting = ref(false)
let totalPrice=0;
//计算总价
    cart.forEach((product) => {
       totalPrice += product.priceCents/100*product.quantity;
    })


// 提交表单处理函数
const handleSubmit = async () => {
  if (!formData.value.name || !formData.value.province || !formData.value.city) {
    alert('请填写完整的收货信息')
    return
  }
  isSubmitting.value = true
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    emit('payment-initiated', {
      ...formData.value,
      amount: totalPrice
    })
  } catch (error) {
    console.error('支付失败:', error)
    alert('支付失败，请重试')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
    <div class="checkout-container mx-auto p-12 max-w-lg">
      <!-- 订单摘要 -->
      <section class="order-summary mb-12">
        <h2 class="heading mb-6">订单摘要</h2>
        <div class="summary-list divide-y divide-gray-300">
          <div 
            v-for="product in cart" 
            :key="product.id"
            class="summary-item flex justify-between items-center py-4">
            <div>
              <span class="product-name font-medium">{{ product.name }}</span>
              <span class="product-qty text-sm text-gray-500 ml-2">×{{ product.quantity }}</span>
            </div>
            <span class="product-price font-semibold">¥{{ (product.priceCents/100 * product.quantity).toFixed(2) }}</span>
          </div>
        </div>
        <div class="summary-total border-t border-gray-300 mt-6 pt-4 flex justify-between items-center">
          <span class="total-label text-lg font-medium">订单总计</span>
          <span class="total-price text-2xl font-bold">¥{{  totalPrice.toFixed(2) }}</span>
        </div>
      </section>
  
      <!-- 支付表单 -->
      <form @submit.prevent="handleSubmit" class="checkout-form space-y-10">
        <!-- 收货信息 -->
        <section class="shipping-info">
          <h3 class="section-heading mb-6">收货信息</h3>
          <div class="form-group mb-6">
            <label class="form-label">收货人姓名</label>
            <input 
              v-model="formData.name"
              required
              placeholder="请输入姓名"
              class="form-input"
            >
          </div>
          <div class="form-group mb-6">
            <label class="form-label">收货人电话号码</label>
            <input 
              v-model="formData.phoneNumber"
              required
              placeholder="请输入电话号码"
              class="form-input"
            >
          </div>
          <div class="grid grid-cols-2 gap-6">
            <div class="form-group">
              <label class="form-label">省份</label>
              <input 
                v-model="formData.province"
                required
                placeholder="例如：广东省"
                class="form-input"
              >
            </div>
            <div class="form-group">
              <label class="form-label">城市</label>
              <input 
                v-model="formData.city"
                required
                placeholder="例如：广州市"
                class="form-input"
              >
            </div>
          </div>
        </section>
  
        <!-- 支付方式 -->
        <section class="payment-method">
          <h3 class="section-heading mb-6">支付方式</h3>
          <div class="payment-options space-y-6">
            <label 
              class="payment-option flex items-center p-5 border rounded-xl cursor-pointer transition-all"
              :class="{'active-option': formData.paymentMethod === 'alipay'}"
            >
              <input 
                type="radio" 
                v-model="formData.paymentMethod" 
                value="alipay"
                class="radio-input mr-4"
              >
              <span class="option-label">支付宝</span>
            </label>
            <label 
              class="payment-option flex items-center p-5 border rounded-xl cursor-pointer transition-all"
              :class="{'active-option': formData.paymentMethod === 'wechat'}"
            >
              <input 
                type="radio" 
                v-model="formData.paymentMethod" 
                value="wechat"
                class="radio-input mr-4"
              >
              <span class="option-label">微信支付</span>
            </label>
          </div>
        </section>
  
        <!-- 提交按钮 -->
        <button 
          type="submit"
          :disabled="isSubmitting"
          class="submit-btn w-full py-5 rounded-xl font-semibold transition-all"
        >
          <span v-if="!isSubmitting">立即支付 ¥{{ totalPrice.toFixed(2) }}</span>
          <span v-else class="flex items-center justify-center">
            <svg class="spinner animate-spin h-6 w-6 mr-3" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            支付处理中...
          </span>
        </button>
      </form>
    </div>
  </template>
  

  
  <style scoped>
  /* 整体容器 */
  .checkout-container {
    display:flex;
    justify-content: center;
    align-items: center;
    column-gap: 300px;
    margin-top:130px;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }
  
  /* 标题 */
  .heading {
    font-size: 2.5rem;
    font-weight: 600;
    color: #333;
  }
  
  /* 分节标题 */
  .section-heading {
    font-size: 2rem;
    font-weight: 500;
    color: #333;
  }
  
  /* 表单标签 */
  .form-label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.125rem;
    color: #555;
  }
  
  /* 输入框 */
  .form-input {
    width: 80%;
    padding: 1rem 1.25rem;
    font-size: 1.125rem;
    border: none;
    border-bottom: 2px solid #ccc;
    transition: border-color 0.3s;
  }
  .form-input:focus {
    outline: none;
    border-bottom-color: #0071e3;
  }
  
  /* 支付方式 */
  .payment-option {
    border: 1px solid #ddd;
    background: #fafafa;
  }
  .payment-option:hover {
    border-color: #0071e3;
  }
  .active-option {
    border-color: #0071e3;
    background: #f0faff;
  }
  .radio-input {
    width: 1.5rem;
    height: 1.5rem;
  }
  
  /* 提交按钮 */
  .submit-btn {
    background: #0071e3;
    color: #fff;
    font-size: 1.5rem;
    box-shadow: 0 10px 20px rgba(0, 113, 227, 0.3);
    transition: background 0.3s, transform 0.3s;
  }
  .submit-btn:hover {
    background: #005bb5;
    transform: translateY(-2px);
  }
  .submit-btn:disabled {
    background: #a0c4e3;
    cursor: not-allowed;
  }
  
  /* Spinner 动画 */
  .spinner {
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  