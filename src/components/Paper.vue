<template>
  <section class="section">
		<div class="container">
			<div class="notification">{{hidden}}
			</div>
		</div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
	components: {},
  props: {
    msg: String
  },
	computed: {
		...mapGetters(['hidden'])
	},
	methods: {
		...mapActions(['getRestricted']),
	},
	mounted(){
		this.getRestricted();
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
