<script>
	import AboutSection from '$lib/components/landing/about-section.svelte';
	import CollaborationSection from '$lib/components/landing/collaboration-section.svelte';
	import HelpSection from '$lib/components/landing/help-section.svelte';
	import Hero from '$lib/components/landing/hero.svelte';
	import NetworkSection from '$lib/components/landing/network-section.svelte';
</script>

<main class="">
	<Hero />
	<section class="w-80">
		<AboutSection />
		<HelpSection />
	</section>
	<section class="w-75">
		<NetworkSection />
	</section>
	<section class="w-80 py-20">
		<CollaborationSection />
	</section>
</main>
