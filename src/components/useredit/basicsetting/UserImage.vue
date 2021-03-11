<template>
  <div style="margin-top: 20px">
    <image-upload></image-upload>
  </div>
</template>

<script>
import ImageUpload from '@/components/useredit/basicsetting/ImageUpload'
export default {
  name: 'UserImage',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ImageUpload
  }
}
</script>

<style lang="less" scoped>
.upload-list-cover{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 40px;
  align-items: center;
  background: rgba(0,0,0,.6);
  opacity: 0;
  transition: opacity 1s;
}
.cover_icon {
  font-size: 30px;
}
.upload-btn{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px solid #cccccc;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 1px #cccccc;
}
.upload-btn:hover {
  border: 1px solid #69b7ed;
}
.upload-btn i{
  margin: 5px;
}
</style>
