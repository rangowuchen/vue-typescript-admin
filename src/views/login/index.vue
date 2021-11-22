<!--
 * @Author: wuchen
 * @Date: 2021-11-20 14:16:05
 * @LastEditors: wuchen
 * @LastEditTime: 2021-11-22 14:18:30
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
            {{ $t('login.title') }}
            </h3>
            <lang-select class="set-language" />
        </div>

        <el-form-item prop="username">
            <span class="svg-container">
            <svg-icon name="user" />
            </span>
            <el-input
            ref="username"
            v-model="loginForm.username"
            :placeholder="$t('login.username')"
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
                :placeholder="$t('login.password')"
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
            {{ $t('login.logIn') }}
        </el-button>

        <div style="position:relative">

            <el-button
            class="thirdparty-button"
            type="primary"
            @click="showDialog=true"
            >
            {{ $t('login.thirdparty') }}
            </el-button>
        </div>
        </el-form>

        <el-dialog
        :title="$t('login.thirdparty')"
        :visible.sync="showDialog"
        >
        {{ $t('login.thirdpartyTips') }}
        <br>
        <br>
        <br>
        <social-sign />
        </el-dialog>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
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

    private loginRules = {
        username: [{ validator: this.validateUsername, trigger: 'blur'}],
        password: [{ validator: this.validatePassword, trigger: 'blur'}]
    }
}
</script>
