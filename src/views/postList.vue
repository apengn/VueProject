<template>
    <div>
        <Table border :columns="columns7" :data="postListData"></Table>
        <div class="block" style="margin-left: 5px;margin-top: 5px">
            <Page :total="total" @on-change="change"></Page>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            postListData:Array,
            total:Number,
        },
        data () {
            return {
                position: 0,

                columns7: [
                    {
                        title: '创建时间',
                        key: 'create_date',
//                        render: (h, params) => {
//                            return h('div', [
//                                h('Icon', {
//                                    props: {
//                                        type: 'person'
//                                    }
//                                }),
//                                h('strong', params.row.name)
//                            ]);
//                        }
                    },
                    {
                        title: '文章标题',
                        key: 'title'
                    },
                    {
                        title: '文章内容',
                        key: 'content'
                    },
                    {
                        title: '类别',
                        key: 'tags',
                        filters:this.postListData.tags
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 300,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    }, style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],

            }
        },
        methods: {
            change(position){
                this.position = position
                this.$emit('select-page', position)
            },

            show (index) {
                this.$Modal.info({
                    title: '用户信息',
                    content: `姓名：${this.postListData[index].title}<br>年龄：${this.postListData[index].content}<br>地址：${this.postListData[index].create_date}`
                })
            },
            remove (index) {
                this.postListData.splice(index, 1);
            }
        }
    }
</script>
