<template>
  <section class="section">
		<div class="container">
			<div class="notification">
				Example
			</div>
		</div>
  </section>
</template>

<script>
import find from './parts/Find'
import org from './parts/OrgPanel'
import people from './parts/PeoplePanel'
import paper from './parts/PaperPanel'

export default {
  name: 'HelloWorld',
	components: {
		find,
		org,
		people,
		paper
	},
  props: {
    msg: String
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
