<!--
 * @Author: wuchen
 * @Date: 2021-11-20 14:16:05
 * @LastEditors: wuchen
 * @LastEditTime: 2021-12-24 11:24:05
 * @Description: 
 * @Email: rangowu@163.com
-->
<template>
    <div class="login-container">
        <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
        autocomplete="on"
        label-position="left"
        >
        <div class="title-container">
            <h3 class="title">
            {{ login.title }}
            </h3>
        </div>

        <el-form-item prop="username">
            <span class="svg-container">
            <svg-icon name="user" />
            </span>
            <el-input
            ref="username"
            v-model="loginForm.username"
            :placeholder="login.username"
            name="username"
            type="text"
            tabindex="1"
            autocomplete="on"
            />
        </el-form-item>

        <el-tooltip
            v-model="capsTooltip"
            content="Caps lock is On"
            placement="right"
            manual
        >
            <el-form-item prop="password">
            <span class="svg-container">
                <svg-icon name="password" />
            </span>
            <el-input
                :key="passwordType"
                ref="password"
                v-model="loginForm.password"
                :type="passwordType"
                :placeholder="login.password"
                name="password"
                tabindex="2"
                autocomplete="on"
                @keyup.native="checkCapslock"
                @blur="capsTooltip = false"
                @keyup.enter.native="handleLogin"
            />
            <span
                class="show-pwd"
                @click="showPwd"
            >
                <svg-icon :name="passwordType === 'password' ? 'eye-off' : 'eye-on'" />
            </span>
            </el-form-item>
        </el-tooltip>

        <el-button
            :loading="loading"
            type="primary"
            style="width:100%; margin-bottom:30px;"
            @click.native.prevent="handleLogin"
        >
            {{ login.logIn }}
        </el-button>

        <div style="position:relative">

            <el-button
            class="thirdparty-button"
            type="primary"
            @click="showDialog=true"
            >
            {{ login.thirdparty }}
            </el-button>
        </div>
        </el-form>

        <el-dialog
        :title="login.thirdparty"
        :visible.sync="showDialog"
        >
        {{ login.thirdpartyTips }}
        <br>
        <br>
        <br>
        <social-sign />
        </el-dialog>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Input } from 'element-ui';
// import { Route } from 'vue-router';

@Component({
    name: 'Login',
    components: {
        
    }
})
export default class extends Vue {
    // 表单验证
    private validateUsername = (rule: any, value: string, callback: Function) => {
    if (!value) {
      callback(new Error('Please enter the correct user name'))
    } else {
      callback()
    }
  }

  private validatePassword = (rule: any, value: string, callback: Function) => {
    if (value.length < 6) {
      callback(new Error('The password can not be less than 6 digits'))
    } else {
      callback()
    }
  }

    private loginForm = {
        username: 'admin',
        password: '111111'
    }
    private login = {
        title: '系统登录',
        logIn: '登录',
        username: '账号',
        password: '密码',
        any: '随便填',
        thirdparty: '第三方登录',
        thirdpartyTips: '本地不能模拟，请结合自己业务进行模拟！！！'
    }
    private passwordType = 'password'
    private showDialog = false
    private loading = false
    private capsTooltip = false

    private loginRules = {
        username: [{ validator: this.validateUsername, trigger: 'blur'}],
        password: [{ validator: this.validatePassword, trigger: 'blur'}]
    }

    private showPwd() {
        if (this.passwordType === 'password') {
            this.passwordType = ''
        } else {
            this.passwordType = 'password'
        }
        this.$nextTick(() => {
            (this.$refs.password as Input).focus()
        })
    }
}
</script>
