<template>
    <div>
        <div style="padding-left:50px;font-size:20px;background-color: #324157;color: white;width: 100%;height: 60px;line-height: 60px;text-align: left">
            后台管理
        </div>
        <div style="position: relative">
            <div style="width: 600px;display: inline-block">
                <el-row class="tac">
                    <el-col :span="8">
                        <el-menu default-active="1-1-1" class="el-menu-vertical-demo" @open="handleOpen"
                                 @close="handleClose">
                            <el-submenu index="1">
                                <template slot="title"><i class="el-icon-message"></i>数据管理</template>
                                <el-menu-item-group>
                                    <template slot="title">文章管理</template>
                                    <el-menu-item index="1-1-1"><p style="display: inline-block" @click="EditPost">
                                        编辑文章</p></el-menu-item>
                                    <el-menu-item index="1-1-2"><p style="display: inline-block" @click="LookPostList">
                                        查看文章</p></el-menu-item>
                                    <el-menu-item index="1-1-3">审核文章</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group title="广告宣传管理">
                                    <el-menu-item index="1-2-1">广告查看</el-menu-item>
                                    <el-menu-item index="1-2-2">广告编辑</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-menu-item index="2"><i class="el-icon-setting"></i>文章</el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
            </div>
            <div style="display: inline-block;position: absolute;left: 200px;width: 80% ;margin-top: 5px;margin-left: 5px">
                <div v-if="showModel ===0">
                    <post-publish :optiondata="options"></post-publish>
                </div>
                <div v-else-if="showModel===1">
                    <post-list @select-page="selectPage" :postListData="postListData" :total="total"></post-list>
                </div>

            </div>
        </div>

    </div>
</template>

<script type="text/ecmascript-6">
    import postPublish from './postpublish.vue'
    import postList from './postList.vue'
    export default{
        components: {
            "post-publish": postPublish,
            "post-list": postList
        },
        data(){
            return {
                options: [],
                showModel: 0,
                offset: 0,
                postListData: [],
                total:0,
            }
        },
        methods: {
            getTag(){
                this.$http.get('http://127.0.0.1:8081/v1/user/gettag').then((respones) => {
                    respones = respones.data;
                    console.log(respones)
                    if (respones.status === 200) {
                        this.options = respones.result
                    }
                }, (erro) => {
                    console.log(erro);
                })
            },
            selectPage(position){
                this.offset=(position-1)*10
                this.$http.get('http://localhost:8081/v1/user/getpost?limit=10&offset=' + this.offset).then((respones) => {
                    respones = respones.data;
                    console.log(respones)
                    if (respones.status === 200) {
                        this.postListData = respones.result.result
                        this.total=respones.result.total
                    }
                }, (erro) => {
                    console.log(erro);
                })
            },
            handleClose(){
            },

            handleOpen(){
            },
            EditPost(){
                this.showModel = 0
                this.getTag()
            },
            //查看文章列表
            LookPostList(){
                this.showModel = 1
                this.selectPage(0);
            }
        },
        beforeMount(){
            this.getTag(),
            this.selectPage(0);
        },
    };
</script>

<style>

</style>
