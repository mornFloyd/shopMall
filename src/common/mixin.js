import BackTop from 'components/content/backtop/BackTop'
export const BackTopMixIn = {
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0,0)
    }
  },
  components: {
    BackTop
  }
}
