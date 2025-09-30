<script>
	let sidebarVisible = false;

	function toggle() {
		sidebarVisible = !sidebarVisible;
	}
</script>

<svelte:head>
	<title>Documentary Nepal - Film International and National Documentaries in Nepal.</title>
	<link rel="icon" href="/image/favicon.png" type="image/x-atom" />
	<meta charset="UTF-8" />
	<meta http-equiv="accept-ch" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="description" content="Filming documentary and film in Nepal." />
	<meta
		property="og:title"
		content="Documentary Nepal - Nepal's Leading Production Service Company."
	/>
	<meta
		property="og:description"
		content="Make breathtaking documentaries and film production in Nepal with experienced crew and next generation equipment."
	/>
	<meta property="og:image" content="/image/share_image.png" />

	<title-bar></title-bar>
	<title>Documentary Nepal - Filming Documentary and Film in Nepal</title>
	<link rel="icon" type="image/x-icon" href="/image/favicon.png" />
	<link rel="stylesheet" href="/css/nav/nav.css" />
	<link rel="stylesheet" href="/css/normal/normal.css" />
	<link rel="stylesheet" href="/css/screens/big.css" />
	<link rel="stylesheet" href="/css/screens/mobile.css" />
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
	/>
	<script src="https://cdn.tailwindcss.com"></script>
	<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.map"></script>
</svelte:head>

<!-- Header / Navbar -->
<nav>
	<header class="navheader">
		<div class="logo-nav">
			<a href="/">
				<img src="/image/logo3.png" alt="" class="logo-merchant" />
			</a>
		</div>

		<div class="active-nvabar">
			<a href="/" class="linkofthenav">Home</a>
			<a href="/about" class="linkofthenav">About us</a>
			<a href="/gallery" class="linkofthenav">Gallery</a>
			<a href="/service" class="linkofthenav">Services</a>
			<a href="/contact" class="linkofthenav">Contact us</a>
		</div>
	</header>

	<!-- Mobile Header -->
	<div class="mobile-header">
		<div class="logo-nav">
			<a href="/">
				<img src="/image/logo3.png" alt="" class="logo-merchant" />
			</a>
		</div>

		<div class="p-8 cursor-pointer sidebarshow" on:click={toggle}>
			<i class="fa-solid fa-bars"></i>
		</div>

		<div class={`sidebarthing ${sidebarVisible ? 'display-bloc' : ''}`} id="sidebarthing">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About Us</a></li>
				<li><a href="/gallery">Gallery</a></li>
				<li><a href="/service">Services</a></li>
				<li><a href="/contact">Contact Us</a></li>
			</ul>
		</div>
	</div>
</nav>
