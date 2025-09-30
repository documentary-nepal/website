<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/common/navbar.svelte';
	import Footer from '$lib/components/common/footer.svelte';

	let { children } = $props();
</script>

<Navbar />
{@render children?.()}
<Footer />
