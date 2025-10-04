import Gallery from '$lib/data/gallery.svelte';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	let galleryClass = new Gallery();
	let gallery = galleryClass.getGalleryEntryByUUID(params.uuid);

	if (gallery) {
		return gallery;
	}

	error(404, 'not found');
};
