import template from './dashboard.html'
import Command from '../../range/command'

export default {
    template,
    data(){
        return {
          dialogImageUrl: '',
          dialogVisible: false,
          isFirst: true,
          list: [],
          btnState: false
        }
    },
    methods: {
        change () {
          this.btnState = true
        },
        handleRemove (file, fileList) {
          console.log(file, fileList)
        },
        handlePictureCardPreview (file) {
          this.dialogImageUrl = file.url
          this.dialogVisible = true
        },
        progress () {
          this.btnState = true
        },
        uploadSuccess (res, file, fileList) {
          let index = this.getIndex(file, fileList)
          this.$nextTick(() => {
            this.btnState = false
          })
          if (!res.code) {
            this.btnState = false
            file.url = res.data.urlWhole
            this.list[index] = {
              src: res.data.urlWhole
            }
          }
        },
        getIndex (item, arr) {
          return arr.indexOf(item)
        },
        confirmUpload () {
          let str = ''
          for (let i in this.list) {
            str += `<img class="test" src="${this.list[i].src}" alt=""/>`
          }
          this.$parent.execCommand(Command.INSERT_HTML, str)
          this.list = []
          this.$refs.upload.clearFiles()
        },
        clear () {
          this.btnState = false
          this.list = []
          this.$refs.upload.clearFiles()
          return
        }
    }
}
