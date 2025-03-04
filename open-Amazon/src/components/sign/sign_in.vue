<script lang="ts" setup name = 'sign_in'>
import { ref } from 'vue'
import user from './sign_up.vue'
const email = ref<string>('')

const password = ref<string>('')

const errorMessage = ref<string>('')

const loginSuccess = ref<boolean>(false)

const showSuccessful = ref<string>('登录成功！');


const handleLogin = (event: Event) => {
    event.preventDefault()
    if (!email.value || !password.value) {
        errorMessage.value = '请完善您的信息！'
        return
    }
    const foundUser = user.value.find(u => u.email === email.value && u.password === password.value)
    if (foundUser) {
        loginSuccess.value = true
        errorMessage.value = ''
    } else {
        loginSuccess.value = false
        errorMessage.value = 'Invalid email or password'
    }
}
</script>

<template>
    <div class="container">
        <form @submit="handleLogin">
            <h2>登录界面</h2>
            <label for="email">
                电子邮箱:
            </label>
            <input id="email" type="email" v-model="email" placeholder="Enter your email" />
            <label for="password">
                密码:
            </label>
            <input id="password" type="password" v-model="password" placeholder="Enter your password" />
            <button type="submit">Login</button>
            <div v-if="errorMessage" class="error">
                {{ errorMessage }}
            </div>
            <div v-if="loginSuccess" class="success">
                {{showSuccessful}}
            </div>
        </form>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
}

form {
    background-color: white;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    width: 300px;
    box-shadow: 0 0 10px #ccc;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

input:focus {
    border-color: #4CAF50;
    outline: none;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #45a049;
}

.error {
    color: red;
    text-align: center;
}

.success {
    color: green;
    text-align: center;
}
</style>