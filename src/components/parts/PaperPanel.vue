<template>
	<nav class="panel">
  <p class="panel-heading has-text-centered">
    Top Papers
  </p>
  <a class="panel-block is-active" v-for="(paper, index) in fakePapers" :key="index">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    {{paper}}
  </a>
	<div class="panel-block">
    <button class="button is-link is-outlined is-fullwidth">
      More Papers...
    </button>
  </div>
</nav>
</template>
<script>
export default {
	data(){
		return {
			fakePapers: [
				'Associations of fats and carbohydrate...',
				'Feathered Dinosaur Tail',
				'Neuroparalisis in endometriosis',
				'Meta analysis of Exestentialism',
				'Adversarial methods in Machine Learning',
				'New RNA embeded structures',
				'Glycemic Responses of Top Performers',
				'Patterns of genic intolerance in 59,898 human exomes'
			]
		}
	}
}
</script>

