<template>
  <div class="cropper-content">
    sss
  </div>
</template>

<script>
export default {
  name: 'CropperImage'
}
</script>

<style scoped lang="scss">
.cropper-content{
  display: flex;
  display: -webkit-flex;
  justify-content: flex-end;
  .cropper-box{
    flex: 1;
    width: 100%;
    .cropper{
      width: auto;
      height: 300px;
    }
  }

  .show-preview{
    flex: 1;
    -webkit-flex: 1;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    .preview{
      overflow: hidden;
      border:1px solid #67c23a;
      background: #cccccc;
    }
  }
}
.footer-btn{
  margin-top: 30px;
  display: flex;
  display: -webkit-flex;
  justify-content: flex-end;
  .scope-btn{
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    padding-right: 10px;
  }
  .upload-btn{
    flex: 1;
    -webkit-flex: 1;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
  }
  .btn {
    outline: none;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    padding: 8px 15px;
    font-size: 12px;
    border-radius: 3px;
    color: #fff;
    background-color: #409EFF;
    border-color: #409EFF;
    margin-right: 10px;
  }
}
</style>
