<template>
  <div :class="$style.root">
		<breadcrumb :class="$style.breadcrumbs" :path="$route.path"/>
    <div :class="$style.container">
      <slot />
    </div>
		<footer :class="$style.footer">
			<p>&copy; 2017-2020 gyojir</p>
		</footer>
  </div>
</template>

<script>
export default {
  setup() {
    const route = useRoute();
  },
}
</script>

<style lang="scss" module>
.root {
	display: flex;
  flex-direction: column;
	min-height: 100%;
	padding-top: 0.1rem;
	background-color: rgb(241, 241, 233);
}

.container{
	border-radius: 0.4rem;
	min-height: 75vh;
	width: 80%;
	margin: 0 auto;
	padding: 0rem 2rem 2rem 2rem;
	box-shadow: 0rem 0rem 0.4rem rgba(0,0,0,0.5);
	background-color: white;
}

.footer{
	text-align: center;
	width: 100%;
	bottom: 0;
  margin-top: auto;
	padding: 0.5rem 0;
	p{
		margin: 0 !important;
	}
}

.breadcrumbs{
	width: 80%;
	margin: 0 auto 0.5rem auto;
}

/* スマホ用CSS */
@media screen and (max-width : 768px) {
	.container{
		width: 97%;
		padding: 0rem 0.5rem 2rem 0.5rem;
	}
	
	.breadcrumbs{
		width: 97%;
	}
}
</style>