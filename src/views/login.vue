<template>
    <div>
        <header class="top-header">
            <router-link class="text texta" to="/home">取消</router-link>
            <h3>登录</h3>
            <router-link class="text" to="/res">注册</router-link>
        </header>
        
        <div class="login">
            <form>
                <ul>
                    <li>
                        <img src="@/assets/images/login.png"/>
                        <label>账号</label>
                        <input type="text" placeholder="请输入账号" v-model="username"/>
                    </li>
                    <li>
                        <img src="@/assets/images/password.png"/>
                        <label>密码</label>
                        <input type="password" placeholder="请输入密码" v-model="password"/>
                    </li>
                </ul>
                <input type="submit" value="登录" @click="chekuser"/>
            </form>
        
        </div>
    </div>

</template>
<script>
import * as types from '../store/types';
export default {
    data () {
        return {
            username:'abc',
            password:'abc123'
        }
    },
    methods: {
        chek:function(){
            axios({
                url:'http://localhost:3006/index'
            }).then((res)=>{
                console.log(res)
            })
        },
        chekuser:function(){
            this.$store.dispatch({
                type:types.CHECK_USER,
                username:this.username,
                password:this.password
            }).then(()=>{
                console.log(this.$store.state.user.auth)
                if(this.$store.state.user.auth){

                    this.$router.push('/self');
                }else{
                    this.$router.push('/error')
                }
            })

        }
    }
}
</script>

