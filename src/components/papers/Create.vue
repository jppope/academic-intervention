<template>
  <section class="section">
		<div class="container">
			<div class="columns is-centered">
				<div class="column is-three-quarters">
					<div class="notification">
						<h1 class="title is-3 has-text-centered"><em>Submit a Paper!</em></h1>
						<div class="columns">
							<div class="column is-two-thirds">
								<div class="field">
									<label class="label">Title</label>
									<div class="control">
										<input class="input" v-model="paper.title">
									</div>
								</div>
							</div>
							<div class="column">
								<div class="field">
									<label class="label">Publication Date</label>
									<div class="control">
										<input class="input" v-model="paper.date_published">
									</div>
								</div>
							</div>
						</div>
						<div class="columns">
							<div class="column">
								<div class="field">
									<label class="label">Description</label>
									<div class="control">
										<textarea class="textarea" v-model="paper.desc"></textarea>
									</div>
								</div>
							</div>
						</div>
						<div class="columns">
							<div class="column">
								<div class="field">
									<label class="label">Author(s) <small><em>(please separate authors by comma, without commas for title)</em></small></label>
									<div class="control">
										<input class="input" v-model="paper.author">
									</div>
								</div>
							</div>
						</div>
						<div class="columns">
							<div class="column">
								<div class="field">
									<label class="label">Group Homepage</label>
									<div class="control">
										<input class="input" v-model="paper.site">
									</div>
								</div>
							</div>
							<div class="column">
								<div class="field">
									<label class="label">Link to Paper</label>
									<div class="control">
										<input class="input" v-model="paper.source_url">
									</div>
								</div>
							</div>
						</div>
						<div class="field">
							<label class="label">Group</label>
							<div class="control">
								<input class="input" v-model="paper.group_id">
							</div>
						</div>
						<br>
						<div class="columns">
							<div class="column is-three-fifths"></div>
							<div class="column">
								<button class="button is-primary is-medium is-fullwidth" @click="submitPaper">Submit</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  </section>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
	data(){
		return {
			hello: "hello world",
			paper: {
				title: "",
				desc: "",
				author: "",
				source_url: "",
				site: "",
				group_id: "",
				date_published: "",
			}
		}
	},
	components: {},
  props: {
    msg: String
  },
	computed: {
		...mapGetters(['backend_url'])
	},
	methods: {
		// ...mapActions(['']),
		submitPaper(){
			axios.post(`/paper`, this.paper)
				.then((res) => {
						let error = res.data.error;
						if (error){
								console.error(error);
						} else {
								alert(res.data)
						}
				});
		}
	},
	mounted(){

	}
}
</script>

</style>
