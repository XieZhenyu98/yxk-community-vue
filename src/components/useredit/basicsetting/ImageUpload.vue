<template>
  <div>
    <input
      type="file"
      id="uploads"
      :value="imgFile"
      accept="image/png, image/jpeg, image/gif, image/jpg"
      @change="uploadImg($event, 1, 'user_picture')"
      style="display:none"
    />
    <label for="uploads" class="base_content">
      <img :src="this.$http.defaults.baseURL+userInfo.image" alt="">
    </label>
    <el-dialog
      :visible.sync="showCropperDialog">
      <div>
        <div class="model" v-show="model" @click="model = false">
          <div class="model-show">
            <img :src="modelSrc" alt="">
          </div>
        </div>

        <div class="cut">
          <vueCropper ref="cropper" :img="option.img" :output-size="option.size" :output-type="option.outputType" :info="true" :full="option.full"
                       :can-move="option.canMove" :can-move-box="option.canMoveBox" :fixed-box="option.fixedBox" :original="option.original"
                       :auto-crop="option.autoCrop" :auto-crop-width="option.autoCropWidth" :auto-crop-height="option.autoCropHeight" :center-box="option.centerBox"
                       @real-time="realTime" :high="option.high"></vueCropper>
        </div>
        <!-- 底部实时预览 -->
        <div class="show-preview" :style="{'width': previews.w + 'px', 'height': previews.h + 'px',  'overflow': 'hidden', 'margin': '5px'}">
          <div :style="previews.div">
            <img :src="previews.url" :style="previews.img">
          </div>
        </div>
        <div class="test-button">
          <!-- <label class="btn" for="uploads">upload</label>
        <input type="file" id="uploads" style="position:absolute; clip:rect(0 0 0 0);" accept="image/png, image/jpeg, image/gif, image/jpg"
               @change="uploadImg($event, 1)"> -->
          <button @click="refreshCrop" class="btn">刷新</button>
          <button @click="changeScale(1)" class="btn">+</button>
          <button @click="changeScale(-1)" class="btn">-</button>
          <button @click="rotateLeft" class="btn">左转</button>
          <button @click="rotateRight" class="btn">右转</button>
          <button @click="finish('base64')" class="btn">预览(base64)</button>
          <!-- <button @click="finish('blob')" class="btn">preview(blob)</button> -->
          <a @click="down('base64')" class="btn">确定更换头像</a>
          <!-- <a @click="down('blob')" class="btn">确认上传</a> -->

        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { VueCropper } from 'vue-cropper'
export default {
  name: 'ImageUpload',
  components: {
    VueCropper
  },
  created () {
    this.userInfo = JSON.parse(window.sessionStorage.getItem('user'))
  },
  data () {
    return {
      items: [],
      model: false,
      modelSrc: '',
      crap: false,
      previews: {},
      userInfo: {},
      show: true,
      showCropperDialog: false,
      option: {
        img: '',
        size: 1,
        full: false, // 是否输出原图比例的截图
        outputType: 'png', // 裁剪生成图片的格式
        canMove: true, // 上传图片是否可以移动
        fixedBox: true, // 固定截图框大小 不允许改变
        original: false, // 上传图片按照原始比例渲染
        canMoveBox: true, // 截图框能否拖动
        // eslint-disable-next-line no-tabs
        autoCrop: true, //	是否默认生成截图框
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth: 200, // 默认生成截图框宽度
        autoCropHeight: 200, // 默认生成截图框高度
        centerBox: false, // 截图框是否被限制在图片里面
        high: true // 是否按照设备的dpr 输出等比例图片
      },
      imgFile: ''
    }
  },
  methods: {
    refreshCrop () {
      this.$refs.cropper.refresh()
    },
    changeScale (num) {
      num = num || 1
      this.$refs.cropper.changeScale(num)
    },
    rotateLeft () {
      this.$refs.cropper.rotateLeft() // 左旋转
    },
    rotateRight () {
      this.$refs.cropper.rotateRight() // 右旋转
    },
    // 截图
    finish (type) {
      if (type === 'blob') {
        this.$refs.cropper.getCropBlob((data) => {
          var img = window.URL.createObjectURL(data)
          this.model = true
          this.modelSrc = img
        })
      } else {
        this.$refs.cropper.getCropData((data) => {
          // data就是截到图片生成的base64
          this.model = true
          this.modelSrc = data
        })
      }
    },
    // 实时预览函数
    realTime (data) {
      this.previews = data
    },
    down (type) {
      // eslint-disable-next-line no-unused-vars
      var _this = this
      this.$refs.cropper.getCropBlob(async (data) => {
        const fd = new FormData()
        fd.append('file', data)
        const { data: res } = (await this.$http.post('file/userImageUpload', fd, { headers: { 'Content-Type': 'multipart/form-data' } }))
        this.showCropperDialog = false
        // eslint-disable-next-line eqeqeq
        if (res.code == -1) return this.$message.error('上传失败！')
        this.$message.success('上传成功！')
        _this.userInfo.image = res.data
        window.sessionStorage.setItem('user', JSON.stringify(_this.userInfo))
      })
    },
    uploadImg (e, num, type = 'user_picture') {
      var _this = this
      var file = e.target.files[0]
      _this.fileName = file.name
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
        return false
      }
      var reader = new FileReader()
      reader.onload = (e) => {
        let data
        if (typeof e.target.result === 'object') {
          // 把Array Buffer转化为blob 如果是base64不需要
          data = window.URL.createObjectURL(new Blob([e.target.result]))
        } else {
          data = e.target.result
        }
        if (num === 1) {
          _this.option.img = data
        } else if (num === 2) {
          _this.example2.img = data
        }
      }
      reader.readAsArrayBuffer(file)
      this.showCropperDialog = true
    }
  }
}
</script>

<style lang="less" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  /*display: flex;*/
  flex:1;
}
.row {
  display: block;
  width: 100%;
  padding: 10px 0 10px 15px;
  font-size: 16px;
  line-height: 30px;
  color: #444;
  background-color: #fff;
}
.grey-bg {
  background-color: #eee;
}
* {
  margin: 0;
  padding: 0;
}

.cut {
  width: 500px;
  height: 500px;
  margin: 30px auto;
}

.c-item {
  max-width: 800px;
  margin: 10px auto;
  margin-top: 20px;
}

.content {
  margin: auto;
  max-width: 1200px;
  margin-bottom: 100px;
}

.test-button {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}

.btn {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #c0ccda;
  color: #1f2d3d;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin:20px 10px 0px 0px;
  padding: 9px 15px;
  font-size: 14px;
  border-radius: 4px;
  color: #fff;
  background-color: #50bfff;
  border-color: #50bfff;
  transition: all .2s ease;
  text-decoration: none;
  user-select: none;
}

.des {
  line-height: 30px;
}

code.language-html {
  padding: 10px 20px;
  margin: 10px 0px;
  display: block;
  background-color: #333;
  color: #fff;
  overflow-x: auto;
  font-family: Consolas, Monaco, Droid, Sans, Mono, Source, Code, Pro, Menlo, Lucida, Sans, Type, Writer, Ubuntu, Mono;
  border-radius: 5px;
  white-space: pre;
}

.show-info {
  margin-bottom: 50px;
}

.show-info h2 {
  line-height: 50px;
}

/*.title, .title:hover, .title-focus, .title:visited {
  color: black;
}*/

.title {
  display: block;
  text-decoration: none;
  text-align: center;
  line-height: 1.5;
  margin: 20px 0px;
  background-image: -webkit-linear-gradient(left,#3498db,#f47920 10%,#d71345 20%,#f7acbc 30%,#ffd400 40%,#3498db 50%,#f47920 60%,#d71345 70%,#f7acbc 80%,#ffd400 90%,#3498db);
  color: transparent;
  -webkit-background-clip: text;
  background-size: 200% 100%;
  animation: slide 5s infinite linear;
  font-size: 40px;
}

.test {
  height: 500px;
}

.model {
  position: fixed;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
}

.model-show {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

.model img {
  display: block;
  margin: auto;
  max-width: 80%;
  user-select: none;
  background-position: 0px 0px, 10px 10px;
  background-size: 20px 20px;
  background-image: linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee 100%),linear-gradient(45deg, #eee 25%, white 25%, white 75%, #eee 75%, #eee 100%);
}

.c-item {
  display: block;
  user-select: none;
}

@keyframes slide {
  0%  {
    background-position: 0 0;
  }
  100% {
    background-position: -100% 0;
  }
}

</style>
