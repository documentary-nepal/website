interface GalleryEntry {
	uuid: string;
	title: string;
	description: string;
	image_url: string;
	date_created: string;
	place: string;
}

export default class Gallery {
	data: GalleryEntry[] = $state([
		{
			uuid: '47866d28-fe3b-11ed-81b6-f23c937bf722',
			title: 'Samsonite Ad shoot',
			description: 'Shooting In Bhaktapur',
			image_url: '47854ff6-fe3b-11ed-81b6-f23c937bf722IMG_0951.JPG',
			date_created: '2023-05-29 21:49:07.301144',
			place: 'Bhaktapur'
		},
		{
			uuid: '1e7062e8-fefb-11ed-b163-f23c937bf722',
			title: 'Samsonite Ad shoot',
			description: 'Jomsom Shooting Photo ',
			image_url: '1e6f81ac-fefb-11ed-b163-f23c937bf722IMG_0816.JPG',
			date_created: '2023-05-30 20:41:31.573322',
			place: 'Jomsom'
		},
		{
			uuid: '4595cf7a-fefb-11ed-bc00-f23c937bf722',
			title: 'Samsonite Ad shoot',
			description: 'Jomsom shooting photo',
			image_url: '45954514-fefb-11ed-bc00-f23c937bf722IMG_0818.JPG',
			date_created: '2023-05-30 20:41:31.573322',
			place: 'Jomsom'
		},
		{
			uuid: '65223266-fefb-11ed-a015-f23c937bf722',
			title: 'Samsonite Ad shoot',
			description: 'Jomsom shooting Photo',
			image_url: '65212d4e-fefb-11ed-a015-f23c937bf722IMG_0826.JPG',
			date_created: '2023-05-30 20:41:31.573322',
			place: 'Jomsom'
		},
		{
			uuid: '813732bc-fefb-11ed-a015-f23c937bf722',
			title: 'Samsonite Ad shoot',
			description: 'Jomsom Shooting photo',
			image_url: '8136dd6c-fefb-11ed-a015-f23c937bf722IMG_0828.JPG',
			date_created: '2023-05-30 20:41:31.573322',
			place: 'Jomsom'
		},
		{
			uuid: 'c84fc290-fefb-11ed-b163-f23c937bf722',
			title: 'Jomsom documentary shoot ',
			description: 'Documentary shoot In Jomsom',
			image_url: 'c84e2ef8-fefb-11ed-b163-f23c937bf722DSC_0196.JPG',
			date_created: '2023-05-30 20:41:31.573322',
			place: 'Jomsom'
		},
		{
			uuid: '56d27b34-fefc-11ed-b163-f23c937bf722',
			title: 'Jomsom documentary shoot ',
			description: 'Documentary shooting In Jomsom',
			image_url: '56d20e1a-fefc-11ed-b163-f23c937bf722IMG_2564.JPG',
			date_created: '2023-05-30 20:41:31.573322',
			place: 'Jomsom'
		},
		{
			uuid: 'af5e14c0-fefc-11ed-b163-f23c937bf722',
			title: 'Novela joia rara Shooting in Bhaktpur',
			description: 'Novela joia rara Shooting in Bhaktpur',
			image_url: 'af5dbb9c-fefc-11ed-b163-f23c937bf722IMG_2590.JPG',
			date_created: '2023-05-30 20:41:31.573322',
			place: 'Bhaktpur'
		},
		{
			uuid: 'e918ae64-fefc-11ed-b163-f23c937bf722',
			title: 'Novela joia rara Shooting in Bhaktapur',
			description: 'Novela joia rara Shooting in Bhaktapur',
			image_url: 'e91857fc-fefc-11ed-b163-f23c937bf722IMG_2591.JPG',
			date_created: '2023-05-30 20:41:31.573322',
			place: 'Bhaktapur'
		},
		{
			uuid: '17a91944-fefd-11ed-b163-f23c937bf722',
			title: 'Novela joia rara Shooting in Patan ',
			description: 'Novela joia rara Shooting in Patan ',
			image_url: '17a8c1b0-fefd-11ed-b163-f23c937bf722IMG_2592.JPG',
			date_created: '2023-05-30 20:41:31.573322',
			place: 'Patan'
		},
		{
			uuid: '2f0805be-fefd-11ed-bb8d-f23c937bf722',
			title: 'Novela joia rara Shooting in Patan ',
			description: 'Novela joia rara Shooting in Patan ',
			image_url: '2f06f08e-fefd-11ed-bb8d-f23c937bf722IMG_2596.JPG',
			date_created: '2023-05-30 20:41:31.573322',
			place: 'Patan'
		},
		{
			uuid: '475ccffa-fefd-11ed-bb8d-f23c937bf722',
			title: 'Novela joia rara Shooting in Patan ',
			description: 'Novela joia rara Shooting in Patan ',
			image_url: '475c7b2c-fefd-11ed-bb8d-f23c937bf722IMG_2598.JPG',
			date_created: '2023-05-30 20:41:31.573322',
			place: 'Patan'
		},
		{
			uuid: '8ab38262-fefd-11ed-bb8d-f23c937bf722',
			title: 'Novela joia rara Shooting in Bhaktapur',
			description: 'Novela joia rara Shooting in Bhaktapur',
			image_url: '8ab2fbda-fefd-11ed-bb8d-f23c937bf722IMG_2615.JPG',
			date_created: '2023-05-30 20:41:31.573322',
			place: 'Bhaktapur'
		},
		{
			uuid: 'b00d2162-fefd-11ed-bb8d-f23c937bf722',
			title: 'Novela joia rara Shooting in Bhaktapur',
			description: 'Novela joia rara Shooting in Bhaktapur',
			image_url: 'b00cbc2c-fefd-11ed-bb8d-f23c937bf722IMG_2616.JPG',
			date_created: '2023-05-30 20:41:31.573322',
			place: 'Bhaktapur'
		},
		{
			uuid: 'cc1daa7a-fefd-11ed-b9a4-f23c937bf722',
			title: 'Novela joia rara Shooting in Bhaktapur',
			description: 'Novela joia rara Shooting in Bhaktapur',
			image_url: 'cc1cb052-fefd-11ed-b9a4-f23c937bf722IMG_2626.JPG',
			date_created: '2023-05-30 20:41:31.573322',
			place: 'Bhaktapur'
		},
		{
			uuid: 'e423f35e-fefd-11ed-b9a4-f23c937bf722',
			title: 'Novela joia rara Shooting in Bhaktapur',
			description: 'Novela joia rara Shooting in Bhaktapur',
			image_url: 'e423974c-fefd-11ed-b9a4-f23c937bf722IMG_2630.JPG',
			date_created: '2023-05-30 20:41:31.573322',
			place: 'Bhaktapur'
		},
		{
			uuid: '97061dda-fefe-11ed-b9a4-f23c937bf722',
			title: 'Chinese Movie Up In The Wind Shoot In Chobar',
			description: 'Chinease Movie Up In The Wind Shoot In Chobar',
			image_url: '970575ba-fefe-11ed-b9a4-f23c937bf722IMG_2449.JPG',
			date_created: '2023-05-30 20:41:31.573322',
			place: 'Chobar'
		},
		{
			uuid: 'acede6d2-fefe-11ed-b163-f23c937bf722',
			title: 'Chinese Movie Up In The Wind Shoot In Chobar',
			description: 'Chinease Movie Up In The Wind Shoot In Chobar',
			image_url: 'aced830e-fefe-11ed-b163-f23c937bf722IMG_2452.JPG',
			date_created: '2023-05-30 20:41:31.573322',
			place: 'Chobar'
		},
		{
			uuid: 'c1748df4-fefe-11ed-b9a4-f23c937bf722',
			title: 'Chinese Movie Up In The Wind Shoot In Chobar',
			description: 'Chinease Movie Up In The Wind Shoot In Chobar',
			image_url: 'c174328c-fefe-11ed-b9a4-f23c937bf722IMG_2454.JPG',
			date_created: '2023-05-30 20:41:31.573322',
			place: 'Chobar'
		},
		{
			uuid: 'ede5e69e-fefe-11ed-b163-f23c937bf722',
			title: 'Documentary Shoot in Gorkha',
			description: 'Documentary Shoot in Gorkha',
			image_url: 'ede53dfc-fefe-11ed-b163-f23c937bf722IMG_2014.JPG',
			date_created: '2023-05-30 20:41:31.573322',
			place: 'Gorkha'
		},
		{
			uuid: '0adae10a-feff-11ed-bb8d-f23c937bf722',
			title: 'Documentary Shoot in Gorkha',
			description: 'Documentary Shoot in Gorkha',
			image_url: '0ada085c-feff-11ed-bb8d-f23c937bf722IMG_2139.JPG',
			date_created: '2023-05-30 20:41:31.573322',
			place: 'Gorkha'
		}
	]);

	getGalleryEntryByUUID(uuid: String): GalleryEntry | null {
		for (const galleryEntry of this.data) {
			if (galleryEntry.uuid == uuid) {
				return galleryEntry;
			}
		}

		return null;
	}

	getGallery(): GalleryEntry[] {
		return this.data;
	}
}
