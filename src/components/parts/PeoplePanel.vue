<template>
	<nav class="panel">
  <p class="panel-heading has-text-centered">
    Top Academics
  </p>
  <a class="panel-block is-active" v-for="(paper, index) in fakeAcademics" :key="index">
    <span class="panel-icon">
      <i class="fas fa-user" aria-hidden="true"></i>
    </span>
		{{paper}}
  </a>
	<div class="panel-block">
    <button class="button is-link is-outlined is-fullwidth">
      More Academics...
    </button>
  </div>
</nav>
</template>
<script>
export default {
	data(){
		return {
			fakeAcademics: [
				'Jordan Peterson',
				'Richard Thaler',
				'Noam Chomsky',
				'Sam Harris',
				'Dan Gillen',
				'Andrew Ng',
				'Michel Foucault',
				'Steven Pinker',
				'Peter Drucker',
				'Alan Kay'
			]
		}
	}
}
</script>

