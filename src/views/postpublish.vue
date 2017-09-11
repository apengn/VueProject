<template>
    <div>

        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                 @select="handleSelect">

            <el-menu-item index="1">
                创建文章
            </el-menu-item>
            <el-menu-item index="2"><a href="#" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
        <div style="margin-top: 10px;margin-left:20px;width: 80%">
            <h2>文章标题</h2>
            <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入内容"
                    v-model="textarea">
            </el-input>
            <h2>文章类别</h2>
            <el-select v-if="optiondata" v-model="optionsId" placeholder="请选择文章类别">
                <el-option
                        v-for="item in optiondata"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id">
                </el-option>
            </el-select>
            <h2>文章内容</h2>
            <quill-editor ref="myTextEditor" v-model="contentHtml" :options="options" @change="changeText"></quill-editor>
            <div style="margin-top: 10px">
                <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
            </div>
        </div>

    </div>
</template>

<script type="text/ecmascript-6">
    import {quillEditor} from 'vue-quill-editor';
    export default{
        computed: {
            editor() {
                return this.$refs.myTextEditor.quillEditor;
            }
        },
        components: {
            'quill-editor': quillEditor,
        },
        props: {
            optiondata: Array
        },
        data(){
            return {
                optionsId: '',
                content:"",
                contentHtml: '',
                textarea: "",
                options: {
                    modules: {
                        toolbar: [
                            ['bold', 'italic', 'underline', 'strike'],
                            ['blockquote', 'code-block'],
                            [{'header': 1}, {'header': 2}],
                            [{'list': 'ordered'}, {'list': 'bullet'}],
                            [{'script': 'sub'}, {'script': 'super'}],
                            [{'indent': '-1'}, {'indent': '+1'}],
                            [{'direction': 'rtl'}],
                            [{'size': ['small', false, 'large', 'huge']}],
                            [{'header': [1, 2, 3, 4, 5, 6, false]}],
                            [{'color': []}, {'background': []}],
                            [{'font': []}],
                            [{'align': []}],
                            ['clean'],
//                            ['link', 'image', 'video']
                        ]
                    },
                    theme: 'snow'
                },
                activeIndex: '1',
            }
        },
        methods: {

            changeText(ob){
                this.content=ob.text
            },
            handleSelect(){
            },

            submit(){
                console.log(this.content);
                console.log(this.optionsId);
                console.log(this.textarea);
                var params = new URLSearchParams();
                params.append('tagId', this.optionsId);
                params.append('title', this.textarea);
                params.append('content', this.content);
                this.$http.post('http://127.0.0.1:8081/v1/user/createpost', params, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then((respones) => {
                    respones = respones.data;
                    console.log(respones)
                    if (respones.status === 200) {
                        this.$message.success('提交成功！');
                    }
                }, (erro) => {
                    console.log(erro);
                })

            },
        }
    }
</script>

<style>
    .editor-btn {
        margin-top: 20px;
    }
</style>
