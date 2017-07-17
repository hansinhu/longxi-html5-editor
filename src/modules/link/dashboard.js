import template from './dashboard.html'

export default {
    template,
    data(){
        return {url: null}
    },
    methods: {
        createLink(){
            if (!this.url) {
                return
            }
            if (!/^(http|https)?:\/\//.test(this.url)) {
              // new Vue().$message.error('请输入以http://或者https://开头的链接')
              alert('请输入以http://或者https://开头的链接')
              return
            }
            this.$parent.execCommand('createLink', this.url)
            this.url = null
        }
    }
}
