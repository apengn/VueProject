<template>
   <div>
       <div>{{postDetail.img}}</div>
       <div>{{postDetail.name}}</div>
   </div>
</template>

<script type="text/ecmascript-6">
    export default{
        props: {
            postDetail: {type: Object}
        }

    };
</script>

<style>

</style>
