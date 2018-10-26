<template>
	<nav class="panel">
  <p class="panel-heading has-text-centered">
    Top Organizations
  </p>
  <a class="panel-block is-active" v-for="(paper, index) in fakeOrganizations" :key="index">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    {{paper}}
  </a>
	<div class="panel-block">
    <button class="button is-link is-outlined is-fullwidth">
      More Organizations...
    </button>
  </div>
</nav>
</template>
<script>
export default {
	data(){
		return {
			fakeOrganizations: [
				'University California Irvine',
				'IPAs and APIs',
				'Open AI',
				'University of Kansas',
				'Microsoft Research',
				'Stanford University',
				'Department of Defense Research',
				'Google Deep Brain',
				'Carnegie Mellon',
				'Cal State Fullerton',
			]
		}
	}
}
</script>

