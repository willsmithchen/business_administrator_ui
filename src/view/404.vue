<template>
  <div class="images-page">
    <LottieComponents
        width="100%"
        height="600px"
        :json-data="errorJson"
    />
  </div>
  <div class="errPage">
      <div class="info">抱歉，您访问的页面不存在。</div>
      <div class="go-back">
        <el-button @Click="goBack">返回上一页</el-button>
        <el-button type="primary" @Click="goHome"> 返回首页</el-button>
      </div>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";
import {defineComponent} from "vue";
import LottieComponents from "@/components/Lottie";
import errorJson from '../assets/404.json'

defineComponent({
  name: '404-page',
  components:{
    LottieComponents
  },
  data(){
    return {
      errorJson
    }
  }
})
const router = useRouter();

function goHome() {
  router.push("/");
}

function goBack() {
  router.go(-1);
}
</script>

<style lang="scss" scoped>
.images-page{
  width: 50%;
  //height: 600px;
  //margin-top: 10%;
  float: left;
}
.errPage {
  width: 50%;
  height: 100%;
  float: right;
  margin-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .info {
    text-align: center;
    font-size: 16px;
    padding: 20px 0;
    color: #999;
  }

  .go-back {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

