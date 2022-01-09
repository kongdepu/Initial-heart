---
title: 更多
---

# 前端开发问题

## 异步问题，产生取不到值
~ async标识方法名前面该方法是异步方法

~ await标识后端请求接口，表示后面的代码需要等待我执行结束
``` js
async 我是异步方法(data){
      // 第一个请求
      await 后端请求接口(this.dataFrom).then((response) =>{
        this.userId = response.data.userId
      })
      // 第二次请求
      await 后端请求接口(this.userId).then((response) =>{
        
      })
```

## 清楚校验规则

``` html
<el-form-item label="我是Label：" :prop="user">
  <el-input v-model="dataForm.user" ></el-input>
</el-form-item>
```
::: tip 提示
  user就是:prop
:::

``` js
      // 清楚校验
      this.$refs["dataForm"].fields.forEach(e =>{
        if(e === user){
           e.clearValidate();
        }
      })
```