<template>
  <section class="section">
		<div class="container">
			<div class="notification">
				<table class="table is-fullwidth">
					<thead>
						<tr>
							<th>Rating</th>
							<th>Title</th>
							<th>Author</th>
							<th>Description</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(paper, index) in papers" :key="index">
							<td>
								8.3/10
							</td>
							<td>{{paper.title}}</td>
							<td>{{paper.author}}</td>
							<td>{{paper.desc}}</td>
							<td>
								<div class="buttons">
									<div class="button is-small is-light">Rate</div>
									<div class="button is-small is-info">Read</div>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
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
		...mapGetters(['papers'])
	},
	methods: {
		...mapActions(['getPapers']),
	},
	mounted(){
		this.getPapers();
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
