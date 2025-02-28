<script lang="ts" setup  name = 'sign_up'>
import { ref } from 'vue'

interface UserItem {
    email: string,
    password: string
}

const email = ref<string>('')

const password = ref<string>('')

const errorMessage = ref<string>('')

const signUpSuccess = ref(false)

const users = ref<UserItem[]>([
])

const handleLogin = (event: Event) => {
    event.preventDefault() //阻止表单默认提交，防止页面刷新。
    if (!email.value || !password.value) {
        errorMessage.value = '请完善所有信息'
        return
    }
    
    let flag = users.value.find(item =>item.email === email.value);
    if(!flag){
        users.value.push({
            email:email.value,
            password:password.value
        })

        signUpSuccess.value = true;
        setTimeout(()=>{
            signUpSuccess.value = false;
        },3000);
        console.log(users.value);
    }

    else{
        errorMessage.value = '该邮箱已被注册'
        setTimeout(()=>{
            errorMessage.value = '';
        },3000);
    }
 
}

</script>

<template>
    <div class="container">
        <form @submit="handleLogin">
            <h2>注册为新用户</h2>
            <label for="email">
                电子邮箱:
            </label>
            <input id="email" type="email" v-model="email" placeholder="Enter your email" />
            <label for="password">
                设置密码:
            </label>
            <input id="password" type="password" v-model="password" placeholder="Enter your password" />
            <button type="submit">Login</button>
            <div v-if="errorMessage" class="error">
                {{ errorMessage }}
            </div>
            <div v-if="signUpSuccess" class="success">
                 注册成功!
            </div>
        </form>
    </div>
</template>

<style>
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