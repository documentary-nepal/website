<script lang="ts">
	import Gallery from '$lib/data/gallery.svelte';
	const galleryData = new Gallery().getGallery();
</script>

<section class="w-full max-w-screen-xl mx-auto px-4 my-50">
	<h1 class="text-header mb-4">Gallery</h1>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each galleryData as gallery}
			<a href="/gallery/{gallery.uuid}">
				<div class="gallery-img">
					<img
						src={`/galleryimages/${gallery.image_url}`}
						alt={gallery.description}
						loading="lazy"
					/>
					<div class="innercotent">
						<h2 class="text-desc">{gallery.title}</h2>
						<p class="text-small font-light text-[#273339]">{gallery.description}</p>
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>
