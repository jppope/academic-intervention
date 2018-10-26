<template>
	<!-- Main container -->
	<nav class="level">
		<!-- Left side -->
		<div class="level-left">

			<div class="level-item">
				<div class="field">
					<div class="control">
						<div class="select">
							<select>
								<option>Time Period</option>
								<option>Week</option>
								<option>Last Week</option>
								<option>Month</option>
								<option>Last Month</option>
								<option>90 Days</option>
								<option>This Year</option>
								<option>All Time</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			<p class="level-item"><a class="button is-success">New</a></p>
			<p class="level-item"><strong>All</strong></p>
			<p class="level-item"><a>Trending</a></p>
			<p class="level-item"><a>Top</a></p>
			<p class="level-item"><a>Newest</a></p>

		</div>

		<!-- Right side -->
		<div class="level-right">

			<div class="level-item">
				<div class="field has-addons">
					<p class="control">
						<input class="input" type="text" placeholder="Search">
					</p>
					<p class="control">
						<button class="button">
							Search
						</button>
					</p>
				</div>
			</div>
		</div>
	</nav>
</template>
