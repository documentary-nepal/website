<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<section class="w-80">
	<div class="">
		<div class="slwlsasd">
			<img src="/galleryimages/{data.image_url}" alt="" />
			<div class="px-8 mt-10 mb-5">
				<h2 class="text-2xl font-bold text-[#273339] mt-5">
					{data.title} - {data.place}
				</h2>
			</div>
		</div>
	</div>
</section>
