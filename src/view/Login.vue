<template>
  <div>
    <h1>玄武大数据分析平台</h1>
    <div class="crumbs">
      <LottieComponents
          width="400px"
          height="400px"
          :json-data="dataJson"
      />
    </div>
    <div class="container">
      <div class="form-box">
        <el-form ref="formRef" :rules="rules" :model="form" label-width="80px" >
          <el-form-item label="账号" prop="code" label-width="100px">
            <el-input v-model="form.code"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pwd" label-width="100px">
            <el-input v-model="form.pwd" show-password></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="confirm" label-width="100px">
            <el-input v-model="form.confirm" show-password></el-input>
          </el-form-item>
          <el-form-item label="手机号码" prop="mobile" label-width="100px">
            <el-input v-model="form.mobile" maxlength="11"></el-input>
          </el-form-item>
          <el-form-item label="名称" prop="userName" label-width="100px">
            <el-input v-model="form.userName"></el-input>
          </el-form-item>

          <el-form-item style="margin-left: 12%">
            <el-button type="primary" @click="submit(formRef)">注册</el-button>
            <el-button @click="resetForm(formRef)">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import {ElLoading, ElMessage} from "element-plus";
// import md5 from "js-md5";
import LottieComponents from "@/components/Lottie";
import loginJson from "@/assets/login.json";
import dataJson from "@/assets/data1.json";
// import {regularKey, REQ_SUCCESS_GET} from "../../assets/js/commonConfig";
// import {addOperator} from "../../api/apiIndex";

export default {
  name: "registerOperator",
  components:{
    LottieComponents
  },
  setup() {
    const formRef = ref('');
    const validateConfirm = (rule,value,callback) =>{
      if(value === ''){
        callback(new Error("确认密码栏不能为空"))
      }else if(value !== form.pwd){
        callback(new Error("两次输入的密码不一致"))
      }else {
        callback()
      }
    }
    const rules = {
      code:[
        {
          required:true,
          message:"账号不能为空！",
          trigger:"blur"
        }
      ],
      pwd:[
        {
          required:true,
          message:"密码不能为空！",
          trigger:"blur"
        },
        {
          pattern:"",
          message:"密码必须为6-16位的字母、数字或符号任意两种的组合！",
          trigger: "blur"
        }
      ],
      mobile:[
        {
          required:true,
          message:"手机号不能为空！",
          trigger:"blur"
        },{
          pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
          message: "请输入正确的手机号码",
          trigger: "blur"
        }
      ],
      userName:[
        {
          required:true,
          message:"名称不能为空！",
          trigger:"blur"
        }
      ],
      confirm:[
        {
          validator:validateConfirm,
          trigger:"blur"
        }
      ],
    };
    const form = reactive({
      code: "",
      pwd:"",
      mobile:"",
      userName:"",
      confirm:"",
    });

    const submit = (formEl) =>{
      if(!formEl){
        return;
      }
      formEl.validate((valid, fields) =>{
        if(valid){
          /*const loading = ElLoading.service({
            lock: true,
            text: '注册中···',
            background: 'rgba(0, 0, 0, 0.7)',
          })*/
          /*addOperator({
            userCode:form.code,
            userPassword:md5(md5(form.pwd)),
            mobile:form.mobile,
            userName:form.userName,
          },res => {
            loading.close();
            console.log('注册集运人员结果',res);
            if(res.retCode == REQ_SUCCESS_GET){
              ElMessage.success('创建集运人员成功');
              formEl.resetFields();
            }else{
              ElMessage.error(res.retMsg);
            }
          },err => {
            loading.close();
            console.log('注册集运人员异常',err)
            ElMessage.error('创建集运人员异常')
          })*/
        }else{
          ElMessage.error('参数异常，请根据参数规则检查参数！');
          console.log("error，校验失败",fields);
          return;
        }
      })
    }

    const resetForm = (formEl) =>{
      formEl.resetFields();
    }
    return {
      rules,
      form,
      formRef,
      submit,
      resetForm,
      loginJson,
      dataJson
    };
  }
}

</script>

<style scoped>

.el-form-item__label{
  width: 100px !important;
}
>>>.el-form-item__label {
  width: 150px !important;
}
table tbody::-webkit-scrollbar {
  width: 6px;
}
.container {
  width: 40%;
  float: right;
  margin-right: 10%;
  margin-top: 50px;
}
.crumbs {
  width: 40%;
  float: left;
  margin-left: 10%;
}

</style>