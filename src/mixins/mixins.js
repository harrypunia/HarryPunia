export default {
  created() {
    const fullName = this.$vnode.tag;
    this.name = fullName.substring(fullName.lastIndexOf("-") + 1, fullName.length);
  },
  methods: {
    msg(path) {
      return this.$t(`${this.name}.${path}`);
    },
    msgd(path) {
      return this.$t(path);
    }
  }
};