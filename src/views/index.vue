<style scoped>
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .layout-logo {
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }

    .layout-header {
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    }

    .layout-copy {
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }

    .layout-ceiling {
        background: #464c5b;
        padding: 10px 0;
        overflow: hidden;
    }

    .layout-ceiling-main {
        float: right;
        margin-right: 15px;
    }

    .layout-ceiling-main a {
        color: #9ba7b5;
    }

    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
    }

    .layout-breadcrumb {
        padding: 10px 15px 0;
    }

    .layout-content {
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }

    .layout-content-main {
        padding: 10px;
    }

    .layout-copy {
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }

    .layout-menu-left {
        background: #464c5b;
    }

    .layout-header {
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    }

    .layout-logo-left {
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
</style>
<template>
    <div class="layout">
        <div class="layout-ceiling">
            <div class="layout-ceiling-main">

                <span @click="modal2 = true" style="color: aliceblue ;cursor:pointer">登录</span>
                <Modal v-model="modal2" width="360">
                    <p slot="header" style="color:#0008ff;text-align:center">
                        <Icon type="information-circled"></Icon>
                        <span>用户登陆</span>
                    </p>
                    <div style="text-align:center">
                        <Form ref="formCustomL" :model="formCustomL" :rules="ruleValidateL" :label-width="80">
                            <Form-item label="用户名" prop="name">
                                <Input v-model="formCustomL.name" placeholder="请输入用户名"></Input>
                            </Form-item>
                            <Form-item label="密码" prop="passwd">
                                <Input type="password" v-model="formCustomL.passwd" placeholder="请输入密码"></Input>
                            </Form-item>

                            <Form-item>
                                <Button type="primary" @click="handleSubmit('formCustomL')">登陆</Button>
                                <Button type="ghost" @click="handleReset('formCustomL')" style="margin-left: 8px">
                                    重新填写
                                </Button>
                            </Form-item>
                        </Form>

                    </div>
                    <div slot="footer">
                    </div>
                </Modal>
                |
                <span @click="modal3 = true" style="color: aliceblue;cursor:pointer">注册</span>
                <Modal v-model="modal3" width="360">
                    <p slot="header" style="color:#0008ff;text-align:center">
                        <Icon type="information-circled"></Icon>
                        <span>用户注册</span>
                    </p>
                    <div style="text-align:center">
                        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                            <Form-item label="用户名" prop="name">
                                <Input v-model="formValidate.name" placeholder="请输入用户名"></Input>
                            </Form-item>
                            <Form-item label="邮箱" prop="mail">
                                <Input v-model="formValidate.mail" placeholder="请输入邮箱"></Input>
                            </Form-item>
                            <Form-item label="性别" prop="gender">
                                <Radio-group v-model="formValidate.gender">
                                    <Radio label="male">男</Radio>
                                    <Radio label="female">女</Radio>
                                </Radio-group>
                            </Form-item>
                            <Form-item label="密码" prop="passwd">
                                <Input type="password" v-model="formValidate.passwd"></Input>
                            </Form-item>
                            <Form-item label="确认密码" prop="passwdCheck">
                                <Input type="password" v-model="formValidate.passwdCheck"></Input>
                            </Form-item>
                            <Form-item>
                                <Button type="primary" @click="handleSubmit('formValidate')">注册</Button>
                                <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">
                                    重新填写
                                </Button>
                            </Form-item>
                        </Form>

                    </div>
                    <div slot="footer">
                    </div>
                </Modal>
                |
                <a href="#">帮助中心</a>
                <a href="#">安全中心</a> |
                <a href="#">服务大厅</a>
                <router-link to="/adminManage"><p style="cursor: pointer;display: inline-block">后台管理</p></router-link>
                <router-link to="/doem"><p style="cursor: pointer;display: inline-block">Dome</p></router-link>
            </div>
        </div>
        <div class="layout-header">
            <div class="layout-logo" style="text-align: center;line-height: 30px ;color: white">IVIEW
            </div>
        </div>
        <div class="layout">
            <Row type="flex">
                <i-col span="5" class="layout-menu-left">
                    <Menu v-if="items" active-name="1-1" theme="dark" width="auto" :open-names="['1']">
                        <div class="layout-logo-left" style="text-align: center;color:white;line-height: 30px">导航</div>
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                IT
                            </template>
                            <Menu-item name="1-1"><p @click="changeContent(1)">JAVA</p></Menu-item>
                            <Menu-item name="1-2"><p @click="changeContent(2)">Android</p></Menu-item>
                            <Menu-item name=" 1-3"><p @click="changeContent(3)">IOS</p></Menu-item>
                        </Submenu>
                        <Submenu name=" 2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                UI设计
                            </template>
                            <Menu-item name="2-1"><p>动画特效</p></Menu-item>
                            <Menu-item name="2-2"><p>AppUI设计</p></Menu-item>
                            <Menu-item name="2-3"><p>设计基础</p></Menu-item>
                            <Menu-item name="2-4"><p>设计工具</p></Menu-item>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                云计算大数据
                            </template>
                            <Menu-item name="3-1"><p>大数据</p></Menu-item>
                            <Menu-item name="3-2"><p>云计算</p></Menu-item>
                        </Submenu>
                    </Menu>
                </i-col>
                <i-col span="19">
                    <div class=" layout-breadcrumb">
                        <Carousel v-if="banners" autoplay v-model="value2">
                            <Carousel-item v-for=" baner in banners">
                                <div class="demo-carousel" style="height: 100px;width: 100%;background-color: aqua">
                                    <img :src="baner.image_url" height="100px" width="100%"/>
                                </div>
                            </Carousel-item>
                        </Carousel>
                    </div>
                    <div class="layout-content">
                        <div class="layout-content-main">
                            <div v-if="cardData && isShowCard" >
                                <ul style="list-style: none; margin: 0;padding: 0;overflow: hidden">
                                    <li v-for=" cardItem in cardData"
                                        style="float: left;display: block;width: 200px;margin: 10px">
                                        <Card style="width:200px">
                                            <div style="text-align:center" @click="lookDetail(cardItem)">
                                                <img :src="cardItem.img" width="100px"
                                                     height="150px">
                                                <h3 v-text="cardItem.name"></h3>
                                            </div>
                                        </Card>
                                    </li>
                                </ul>
                                <div>
                                    <Page :total="total" @on-change="change"></Page>
                                </div>
                            </div>
                            <div v-else-if="!isShowCard">
                                <v_postdetail :postDetail="postDetails"></v_postdetail>
                            </div>
                            <div v-else>
                                null
                            </div>
                        </div>
                    </div>
                    <div class="layout-copy">
                        2011-2016 &copy; TalkingData
                    </div>
                </i-col>
            </Row>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    import postDetail from './postDetail.vue'

    export default {
        components: {
            'v_postdetail': postDetail
        },
        props(){

            return {}
        },
        data() {

            const validatePassL = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    callback();
                }
            };
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.formValidate.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formValidate.validateField('passwdCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.formValidate.passwd) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                formCustomL: {
                    name: '',
                    passwd: '',
                },
                ruleValidateL: {
                    name: [
                        {required: true, message: '姓名不能为空', trigger: 'blur'}
                    ],
                    passwd: [
                        {validator: validatePassL, trigger: 'blur'}
                    ],
                },
                formValidate: {
                    name: '',
                    mail: '',
                    gender: '',
                    passwd: '',
                    passwdCheck: '',
                },
                ruleValidate: {
                    name: [
                        {required: true, message: '姓名不能为空', trigger: 'blur'}
                    ],
                    mail: [
                        {required: true, message: '邮箱不能为空', trigger: 'blur'},
                        {type: 'email', message: '邮箱格式不正确', trigger: 'blur'}
                    ],
                    gender: [
                        {required: true, message: '请选择性别', trigger: 'change'},
                    ], passwd: [
                        {validator: validatePass, trigger: 'blur', required: true},

                    ],
                    passwdCheck: [
                        {validator: validatePassCheck, trigger: 'blur', required: true},
                    ],
                },
                title: "abc",
                modal2: false,
                modal_loading: false,
                modal3: false,
                modal4: false,
                modal5: false,
                cardData: [{
                    name: "一套基于 Java的高质量UI组件库1",
                    img: "https://cn.vuejs.org/images/logo.png"
                }, {
                    name: "一套基于 Java的高质量UI组件库2",
                    img: "https://cn.vuejs.org/images/logo.png"
                },],
                items: [],
                current: 1,
                total: 1,
                value2: 0,
                banners: [],
                isShowCard: true,
                postDetails:{},
            };
        },
        beforeMount(){

        },
        methods: {
            lookDetail(cardItem){
                this.postDetails=cardItem
                this.isShowCard=false
                alert(cardItem.name)
            }
            ,
            changeContent(values){
                this.isShowCard=true
                this.postDetails=null
                switch (values) {
                    case 1:
                        this.cardData = [{
                            name: "一套基于 Java的高质量UI组件库1",
                            img: "https://cn.vuejs.org/images/logo.png"
                        }, {
                            name: "一套基于 Java的高质量UI组件库2",
                            img: "https://cn.vuejs.org/images/logo.png"
                        },]
                        break;
                    case 3:
                        this.cardData = [{
                            name: "一套基于 IOS 的高质量UI组件库1",
                            img: "https://cn.vuejs.org/images/logo.png"
                        }, {
                            name: "一套基于 IOS 的高质量UI组件库2",
                            img: "https://cn.vuejs.org/images/logo.png"
                        },]
                        break
                    case 2:
                        this.cardData = [{
                            name: "一套基于 Android的高质量UI组件库Android",
                            img: "https://cn.vuejs.org/images/logo.png"
                        }, {
                            name: "一套基于 Android 的高质量UI组件库2",
                            img: "https://cn.vuejs.org/images/logo.png"
                        },]
                        break
                }


                this.total = this.cardData.length
            },
            changeTitle(val){
                this.title = val;
            },
            subject() {
                this.current = this.total -= 1;
            },
            change(pager) {
                console.log(pager)
            },
            handleStart() {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'

                });
            },
            del () {
                this.modal_loading = true;
                setTimeout(() => {
                    this.modal_loading = false;
                    this.modal2 = false;
                    this.$Message.success('删除成功');
                }, 2000);
            }
            , handleSubmit (name) {


                this.$refs[name].validate((valid) => {
                    if (valid) {
                        if (name === "formCustomL") {
                            console.log()
                            this.$iview.LoadingBar.start();
                            this.$http.get("http://127.0.0.1:8081/v1/user/login?name=" + this.formCustomL.name + "&password=" + this.formCustomL.passwd).then(response => {
                                response = response.data;
                                console.log(response)
                                if (response.status === 200) {
                                    this.$iview.LoadingBar.finish();
                                    this.modal2 = false
                                    this.$Message.success('登陆成功');
                                }
                            }, error => {
                                this.$iview.LoadingBar.finish();
                                console.log(error)
                            })
                        }
                        console.log(this.formCustomL.name,)
//                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('验证失败!请重新输入');
                        this.handleReset(name)
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
            ,
        },
        beforeMount(){
            axios.get('http://127.0.0.1:8081/v1/banner/').then((respones) => {
                respones = respones.data;
                console.log(respones)
                if (respones.status === 200) {
                    console.log(respones.result);
                    this.banners = respones.result
                }
            }, (erro) => {
                console.log(erro);
            })
            axios.get('http://127.0.0.1:8081/v1/user/getpost?limit=10&offset=0').then((respones) => {
                respones = respones.data;
                console.log(respones)
                if (respones.status === 200) {
                    console.log(respones.result);
                }
            }, (erro) => {
                console.log(erro);
            })
        },
        created(){

        }
    };
</script>
