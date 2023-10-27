<script lang="ts">
	import type { PageData } from './$types';
	import Button from '../Components/Button.svelte';
	export let data: PageData;
	import { onMount } from 'svelte';

	let avatarUrl = '';

	onMount(() => {
		const topTypes = [
			'ShortHairDreads01',
			'ShortHairDreads02',
			'ShortHairFrizzle',
			'ShortHairShaggyMullet',
			'ShortHairCurly',
			'ShortHairStraight',
			'ShortHairWavy',
			'ShortHairAfro',
			'LongHairCurly',
			'LongHairStraight',
			'LongHairWavy',
			'Bald',
			'BuzzCut',
			'PonyTail',
			'ManBun',
			'Undercut'
		];

		const accessoriesTypes = [
			'Blank',
			'Kurt',
			'Prescription01',
			'Prescription02',
			'Sunglasses',
			'RoundGlasses',
			'ReadingGlasses',
			'Eyepatch',
			'HoopEarrings',
			'StudEarrings',
			'Scarf',
			'Necklace',
			'Tie',
			'BowTie',
			'Bandana',
			'Hat'
		];

		const hairColor = [
			'Auburn',
			'Black',
			'Blonde',
			'Brown',
			'Red',
			'Silver',
			'Platinum',
			'PastelPink',
			'Blue',
			'Green',
			'Purple',
			'Cyan',
			'Magenta',
			'Yellow',
			'Grey',
			'Rainbow'
		];

		const facialHair = [
			'Blank',
			'BeardMedium',
			'BeardLight',
			'BeardMagestic',
			'MoustacheFull',
			'GoateeRound',
			'ChinStrap',
			'Whiskers',
			'FuManchu',
			'MoustacheCurly',
			'BeardLong',
			'Stubble',
			'SoulPatch',
			'BeardPatchy',
			'GoateeSquare',
			'SideburnsLong'
		];

		const facialHairColor = [
			'Auburn',
			'Black',
			'Blonde',
			'Brown',
			'Red',
			'Silver',
			'Golden',
			'DarkGrey',
			'Blue',
			'Green',
			'Purple',
			'Cyan',
			'Magenta',
			'Yellow',
			'Grey',
			'Rainbow'
		];

		// Randomly select options
		const randomTop = topTypes[Math.floor(Math.random() * topTypes.length)];
		const randomAccessories = accessoriesTypes[Math.floor(Math.random() * accessoriesTypes.length)];
		const randomHairColor = hairColor[Math.floor(Math.random() * hairColor.length)];
		const randomFacialHair = facialHair[Math.floor(Math.random() * facialHair.length)];
		const randomFacialHairColor =
			facialHairColor[Math.floor(Math.random() * facialHairColor.length)];

		// Generate the URL
		avatarUrl = `https://avataaars.io/?topType=${randomTop}&accessoriesType=${randomAccessories}&hairColor=${randomHairColor}&facialHairType=${randomFacialHair}&facialHairColor=${randomFacialHairColor}`;
	});
</script>

<main
	class="bg-gradient-to-tr from-[#fff_8%] via-[#97E0FF_40%] to-[#fff_90%] bg-no-repeat bg-[300%,300%] animate-wave"
>
	<header class=" text-gray-600 body-font">
		<div class="justify-between pl-9 flex flex-wrap p-5 flex-col md:flex-row items-center">
			<div class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
				{#if data.session}
					<img src={avatarUrl} alt="Random Profile Avatar" class="rounded-full w-24 h-24" />
					<span class="ml-3 text-xl"> {data.session.user.user_metadata.first_name}</span>
				{:else}
					<div class="rounded-full w-24 h-24">
						<svg
							viewBox="0 0 24 24"
							data-name="Layer 1"
							id="Layer_1"
							xmlns="http://www.w3.org/2000/svg"
							><title /><path
								d="M12.3232,8.03613l-1.3183-.71484a3.13222,3.13222,0,0,0-.8584-3.76563l1.0068-1.11132A4.6226,4.6226,0,0,1,12.3232,8.03613Z"
								style="fill:#c78657"
							/><path
								d="M7.125,6h-.25C4.1826,6,2,9.35785,2,13.5S4.1826,21,6.875,21h.25C9.8174,21,12,17.6422,12,13.5S9.8174,6,7.125,6Z"
								style="fill:#ffab66"
							/><path
								d="M17.125,6h-.25C14.1826,6,12,9.35785,12,13.5S14.1826,21,16.875,21h.25C19.8174,21,22,17.6422,22,13.5S19.8174,6,17.125,6Z"
								style="fill:#ffab66"
							/><path
								d="M12.0758,6h-.1516C9.20465,6,7,9.35785,7,13.5S9.20465,21,11.9242,21h.1516C14.7954,21,17,17.6422,17,13.5S14.7954,6,12.0758,6Z"
								style="fill:#ffab66"
							/><polygon points="10 12 5 12 6 9 10 12" style="fill:#fff" /><polygon
								points="14 12 19 12 18 9 14 12"
								style="fill:#fff"
							/><polygon points="13.5 14 10.5 14 12 12 13.5 14" style="fill:#fff" /><polygon
								points="15.111 17.828 12 16.791 8.889 17.828 5.584 15.624 6.416 14.376 9.111 16.172 12 15.209 14.889 16.172 17.584 14.376 18.416 15.624 15.111 17.828"
								style="fill:#fff7c2"
							/></svg
						>
					</div>
					<span class="ml-3 text-xl">User</span>
				{/if}
			</div>
			{#if data.session}
				<form action="/logout" method="POST">
					<Button type="submit">Logout</Button>
				</form>
			{:else}
				<div>
					<a href="/login" class="btn btn-primary">
						<Button type="">Login</Button>
					</a>
					<a href="/register" class="btn btn-secondary">
						<Button type="">Sign Up</Button>
					</a>
				</div>
			{/if}
		</div>
	</header>

	{#if data.session}
		<h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
			Welcome, {data.session.user.user_metadata.first_name}
			<br class="hidden sm:block" /> Enjoy the project
		</h1>
	{:else}{/if}
	<section class="text-gray-600 body-font">
		<div class="container px-5 py-14 mx-auto">
			<div
				class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"
			>
				<div
					class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0"
				>
					<svg
						height="130"
						viewBox="-23.04085003 -23.7 545.4320132 647"
						width="120"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="m466.95 79.52c-55.66-79.62-165.6-103.22-245.08-52.6l-139.58 88.93c-9.39 5.9-18.15 12.76-26.12 20.47-7.98 7.71-15.13 16.23-21.34 25.42s-11.45 19-15.64 29.27a160.478 160.478 0 0 0 -9.26 31.87c-1.65 9.15-2.55 18.43-2.67 27.73-.13 9.31.52 18.61 1.93 27.8 1.41 9.2 3.58 18.27 6.48 27.11s6.53 17.42 10.85 25.66a161.68 161.68 0 0 0 -8.22 13.97c-2.51 4.79-4.77 9.71-6.78 14.73s-3.76 10.14-5.25 15.34-2.71 10.47-3.67 15.79a170.365 170.365 0 0 0 1.55 67.48c2.5 11.05 6.09 21.83 10.73 32.17s10.29 20.2 16.89 29.42c55.66 79.62 165.59 103.22 245.07 52.6l139.58-88.56c9.39-5.91 18.13-12.78 26.1-20.5a160.58 160.58 0 0 0 21.33-25.42c6.21-9.18 11.45-18.99 15.64-29.26 4.19-10.26 7.3-20.94 9.29-31.85 1.65-9.15 2.54-18.42 2.66-27.72s-.53-18.6-1.95-27.79c-1.41-9.19-3.58-18.25-6.49-27.09-2.91-8.83-6.54-17.41-10.86-25.65 2.97-4.51 5.72-9.18 8.23-13.97 2.5-4.79 4.77-9.71 6.78-14.73s3.77-10.14 5.27-15.34c1.49-5.19 2.73-10.46 3.7-15.78 1.98-11.16 2.84-22.49 2.58-33.82s-1.65-22.6-4.15-33.66c-2.5-11.05-6.09-21.83-10.73-32.17a170.906 170.906 0 0 0 -16.87-29.42"
							fill="#ff3e00"
						/><path
							d="m208.23 527.78a110.876 110.876 0 0 1 -33.49 3.42c-11.27-.58-22.39-2.86-32.97-6.79a111.06 111.06 0 0 1 -29.42-16.35 111.108 111.108 0 0 1 -23.15-24.42c-3.97-5.55-7.37-11.47-10.15-17.69a102.38 102.38 0 0 1 -6.45-19.34c-1.49-6.65-2.33-13.43-2.48-20.24s.38-13.62 1.58-20.33c.19-1.09.41-2.18.65-3.26.23-1.09.49-2.17.77-3.24.27-1.08.57-2.15.89-3.22.31-1.06.65-2.12 1-3.17l2.63-8.03 7.17 5.35c4.11 3 8.35 5.83 12.7 8.47 4.35 2.65 8.81 5.11 13.37 7.37 4.55 2.27 9.21 4.35 13.94 6.22 4.73 1.88 9.54 3.55 14.42 5.02l5.35 1.55-.48 5.35a31.395 31.395 0 0 0 1.12 10.81c.49 1.76 1.14 3.46 1.93 5.1s1.72 3.21 2.78 4.69a33.4 33.4 0 0 0 6.99 7.35c2.68 2.08 5.67 3.74 8.86 4.92s6.53 1.86 9.93 2.03c3.39.18 6.79-.17 10.08-1.03.76-.2 1.5-.43 2.24-.69s1.47-.54 2.18-.86c.72-.31 1.42-.65 2.12-1.02.69-.36 1.36-.75 2.02-1.17l139.37-88.94a28.96 28.96 0 0 0 4.75-3.72c1.45-1.41 2.74-2.96 3.87-4.63s2.07-3.46 2.83-5.33c.75-1.87 1.31-3.81 1.67-5.79.35-2.03.5-4.08.45-6.14-.05-2.05-.31-4.09-.77-6.1-.45-2-1.11-3.95-1.96-5.83-.84-1.87-1.88-3.65-3.08-5.32-1.94-2.79-4.29-5.26-6.98-7.34s-5.68-3.74-8.86-4.92a33.464 33.464 0 0 0 -9.93-2.04c-3.4-.17-6.8.18-10.09 1.03-.75.2-1.5.43-2.24.69s-1.46.54-2.18.85c-.72.32-1.42.66-2.11 1.03-.69.36-1.37.76-2.03 1.18l-53.52 33.98c-2.18 1.38-4.42 2.68-6.7 3.9-2.29 1.21-4.61 2.34-6.98 3.38s-4.78 1.99-7.22 2.84c-2.44.86-4.91 1.62-7.41 2.29-10.91 2.82-22.18 3.96-33.43 3.38s-22.34-2.87-32.9-6.78c-10.56-3.92-20.46-9.43-29.36-16.33s-16.7-15.11-23.13-24.36c-3.95-5.55-7.34-11.48-10.11-17.7-2.78-6.22-4.93-12.7-6.42-19.34-1.49-6.65-2.31-13.43-2.45-20.24-.15-6.8.38-13.61 1.59-20.31a96.419 96.419 0 0 1 14.94-36.86 96.283 96.283 0 0 1 28.57-27.68l139.8-88.93c2.17-1.38 4.39-2.68 6.66-3.9 2.27-1.21 4.59-2.34 6.94-3.38a98.21 98.21 0 0 1 7.18-2.84c2.42-.86 4.88-1.63 7.37-2.3 10.92-2.83 22.21-3.99 33.47-3.42 11.27.58 22.38 2.86 32.96 6.79 10.58 3.92 20.49 9.44 29.41 16.35a111.11 111.11 0 0 1 23.14 24.43c3.96 5.54 7.37 11.46 10.16 17.68s4.95 12.69 6.46 19.34c1.5 6.65 2.34 13.43 2.49 20.24.16 6.81-.36 13.62-1.56 20.33-.21 1.1-.43 2.2-.68 3.29-.24 1.09-.5 2.18-.78 3.26-.27 1.09-.57 2.17-.88 3.24-.31 1.08-.63 2.15-.98 3.21l-2.67 8.03-7.12-5.35c-4.12-3.03-8.37-5.87-12.73-8.54-4.36-2.66-8.84-5.14-13.41-7.43a182.39 182.39 0 0 0 -28.45-11.32l-5.36-1.55.49-5.35c.15-1.83.14-3.67-.03-5.49-.16-1.82-.49-3.63-.97-5.4-.49-1.76-1.12-3.49-1.91-5.14-.78-1.66-1.71-3.24-2.77-4.74a33.153 33.153 0 0 0 -6.99-7.2 32.991 32.991 0 0 0 -8.82-4.8 33.244 33.244 0 0 0 -19.83-.89c-.76.2-1.51.43-2.24.68-.74.26-1.47.55-2.19.86-.71.31-1.42.66-2.11 1.02-.69.37-1.37.76-2.03 1.18l-139.63 88.78c-1.7 1.07-3.29 2.32-4.73 3.72s-2.74 2.95-3.87 4.61a29.724 29.724 0 0 0 -2.83 5.31c-.76 1.87-1.32 3.8-1.68 5.78-.35 2.03-.5 4.09-.45 6.15a31.547 31.547 0 0 0 2.73 11.95 31.84 31.84 0 0 0 3.07 5.34c1.93 2.76 4.27 5.22 6.94 7.28a33.26 33.26 0 0 0 8.79 4.9 33.533 33.533 0 0 0 19.86 1.09c.75-.21 1.5-.44 2.24-.7.73-.26 1.46-.55 2.18-.86a29.2 29.2 0 0 0 2.11-1.02c.69-.36 1.37-.75 2.03-1.17l53.52-33.92c2.19-1.4 4.42-2.72 6.71-3.94 2.28-1.23 4.61-2.36 6.99-3.41a99.39 99.39 0 0 1 7.23-2.84c2.45-.86 4.93-1.62 7.44-2.28 10.92-2.84 22.2-4 33.47-3.44 11.27.57 22.38 2.85 32.96 6.77 10.57 3.92 20.49 9.43 29.4 16.35 8.92 6.91 16.72 15.14 23.15 24.41 3.96 5.55 7.36 11.47 10.15 17.69a102.65 102.65 0 0 1 6.46 19.34c1.5 6.64 2.34 13.42 2.5 20.23.16 6.82-.37 13.63-1.56 20.33a96.419 96.419 0 0 1 -5.55 19.21 95.753 95.753 0 0 1 -9.4 17.65c-3.73 5.54-8.03 10.68-12.83 15.33s-10.07 8.79-15.73 12.35l-139.64 88.93c-2.19 1.39-4.43 2.7-6.71 3.92-2.29 1.22-4.62 2.35-7 3.39-2.37 1.05-4.78 2-7.23 2.86-2.44.86-4.92 1.63-7.42 2.3"
							fill="#fff"
						/></svg
					>
				</div>
				<div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
					<h2 class="text-gray-900 text-lg title-font font-medium mb-2">
						Svelte/SvelteKit - The Future of Reactive UIs:
					</h2>
					<p class="leading-relaxed text-base">
						SvelteKit provides the next-generation framework for building reactive web applications.
						With its compiler-based approach, SvelteKit ensures lighter and faster applications by
						doing the heavy lifting at compile time, rather than runtime. Enjoy a simpler
						development experience with less boilerplate and more productivity.
					</p>
				</div>
			</div>
			<div
				class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"
			>
				<div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
					<h2 class="text-gray-900 text-lg title-font font-medium mb-2">
						Tailwind CSS - Streamlined Styling
					</h2>
					<p class="leading-relaxed text-base">
						Dive into the world of utility-first CSS with Tailwind. With its atomic class structure,
						responsive modifiers, and customizability, Tailwind CSS offers developers an
						unparalleled level of flexibility and efficiency. Say goodbye to bloated stylesheets and
						hello to faster, more intuitive frontend development.
					</p>
				</div>
				<div
					class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0"
				>
					<svg
						height="130"
						preserveAspectRatio="xMidYMid"
						width="100"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 153.6"
						><linearGradient id="a" x1="-2.778%" y1="32%" y2="67.556%"
							><stop offset="0" stop-color="#2298bd" /><stop
								offset="1"
								stop-color="#0ed7b5"
							/></linearGradient
						><path
							d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z"
							fill="url(#a)"
						/></svg
					>
				</div>
			</div>
			<div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
				<div
					class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0"
				>
					<svg
						xmlns:dc="http://purl.org/dc/elements/1.1/"
						xmlns:cc="http://creativecommons.org/ns#"
						xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
						xmlns:svg="http://www.w3.org/2000/svg"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
						xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
						width="64"
						height="64"
						viewBox="0 0 64 64"
						version="1.1"
						id="svg20"
						sodipodi:docname="supabase-icon.svg"
						style="fill:none"
						inkscape:version="0.92.4 (5da689c313, 2019-01-14)"
					>
						<metadata id="metadata24">
							<rdf:RDF>
								<cc:Work rdf:about="">
									<dc:format>image/svg+xml</dc:format>
									<dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
									<dc:title />
								</cc:Work>
							</rdf:RDF>
						</metadata>
						<sodipodi:namedview
							pagecolor="#ffffff"
							bordercolor="#666666"
							borderopacity="1"
							objecttolerance="10"
							gridtolerance="10"
							guidetolerance="10"
							inkscape:pageopacity="0"
							inkscape:pageshadow="2"
							inkscape:window-width="1687"
							inkscape:window-height="849"
							id="namedview22"
							showgrid="false"
							inkscape:zoom="2.0884956"
							inkscape:cx="54.5"
							inkscape:cy="56.5"
							inkscape:window-x="70"
							inkscape:window-y="0"
							inkscape:window-maximized="0"
							inkscape:current-layer="svg20"
						/>
						<path
							d="m 37.41219,62.936701 c -1.634985,2.05896 -4.950068,0.93085 -4.989463,-1.69817 L 31.846665,22.786035 h 25.855406 c 4.683108,0 7.294967,5.409033 4.382927,9.07673 z"
							id="path2"
							style="fill:url(#paint0_linear);stroke-width:0.57177335"
							inkscape:connector-curvature="0"
						/>
						<path
							d="m 37.41219,62.936701 c -1.634985,2.05896 -4.950068,0.93085 -4.989463,-1.69817 L 31.846665,22.786035 h 25.855406 c 4.683108,0 7.294967,5.409033 4.382927,9.07673 z"
							id="path4"
							style="fill:url(#paint1_linear);fill-opacity:0.2;stroke-width:0.57177335"
							inkscape:connector-curvature="0"
						/>
						<path
							d="m 26.89694,1.0634102 c 1.634986,-2.05918508 4.950125,-0.93090008 4.989521,1.698149 L 32.138899,41.214003 H 6.607076 c -4.6832501,0 -7.29518376,-5.409032 -4.3830007,-9.07673 z"
							id="path6"
							inkscape:connector-curvature="0"
							style="fill:#3ecf8e;stroke-width:0.57177335"
						/>
						<defs id="defs18">
							<linearGradient
								id="paint0_linear"
								x1="53.973801"
								y1="54.973999"
								x2="94.163498"
								y2="71.829498"
								gradientUnits="userSpaceOnUse"
								gradientTransform="matrix(0.57177306,0,0,0.57177334,0.98590077,-0.12074988)"
							>
								<stop stop-color="#249361" id="stop8" />
								<stop offset="1" stop-color="#3ECF8E" id="stop10" />
							</linearGradient>
							<linearGradient
								id="paint1_linear"
								x1="36.1558"
								y1="30.577999"
								x2="54.484402"
								y2="65.080597"
								gradientUnits="userSpaceOnUse"
								gradientTransform="matrix(0.57177306,0,0,0.57177334,0.98590077,-0.12074988)"
							>
								<stop id="stop13" />
								<stop offset="1" stop-opacity="0" id="stop15" />
							</linearGradient>
						</defs>
					</svg>
				</div>
				<div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
					<h2 class="text-gray-900 text-lg title-font font-medium mb-2">
						Supabase - The Open Source Firebase Alternative:
					</h2>
					<p class="leading-relaxed text-base">
						Elevate your applications with Supabase, the open-source real-time backend service. With
						its integrated database, authentication services, real-time subscriptions, and storage
						capabilities, Supabase is the perfect companion for modern web apps. It's not just an
						alternative; it's the next step in backend development.
					</p>
				</div>
			</div>
		</div>
	</section>

	<footer class="text-gray-600 body-font">
		<div class=" px-5 pl-9 py-8 mx-auto flex items-center sm:flex-row flex-col">
			<div
				class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
			>
				<img
					alt="redhead"
					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAIHUlEQVR4nO2YfUwb5xnAva0f0v7Y1P6zP8IdwYWq6V9ZN2lLKq2VNm3dqimdKEVbslVLWlrOkBQl21IljCqJEsIdDckK8dEMqiRNM5J0iQbko6sCPrCNjY2BgL8w/rbPYDsYuIOkmHd6D+648wcY2gCaeKTnD5/vfZ7n9z7P836cTLYhG7IhG7ISARXPP8ESSCGDo5cYArEwBDo5p4gFPmNx5A34jmw9C1ON5jM46mAJFCymDIEOMVXZv5OtNwFNsu8wBEIsBZAMhFSBCtm3ZetFmFQQjT8fmjGQd+PuOwbganHGzZccD5oKPEkwOHJStl7KiRUHd2ZLLO5p6wTjrlkw4QaCjpoAcDUD4GwZYWq3Tkgzk/XamkKAiuefkPTEmS0xELXaJABivW+Zg/HcnBbDMDhqX9MFgCWQQvHMcplIByHOjPMGAK6WkCST1WjBmoFwy6moJ7hyGndP+/RX2uOxYUdqGBcAntsczIOm14WeYXDk4lqCWPlAZgz1d8G4KzbQWqOnSAXQfnIg+jBqGUgJQ2s5kPjgp0JZwn1GtoYgC03b3/SF6coxG4TgVX3uvUnWb9QkgYSNc+XlbKZFfTKxliBcEL7T2wClVLBiCLH6dFc18XHXxAJI73yftIZFIGBNIOBGRuNbgbHuD0mBd31a7lYpS2bFz3Tn/0aPDas1YNzF8iBxV2tEADmJgjXZHGMHc57V1fwpCcKqbu6NjNDTtMus7WwoG0/8X9O4fzRkvGaMu2+PxV2tQmlNHs8GoVLkmVUHiWLy4h6iYCELF8tj9l79fZtJD6IjNKdh2uc0Ndca0pUcRWIz2rN7gKFuF7BV/gKM7t1ctOogoSK5ZvDIKwuZoG64zN1aADUaCgowUEMum85w5YQ5PZACWI78EtBF8s5VhQiX5W3yF+bGHQdfFALpa6l38yCjfq8EhNeI3zNgoa6ptBcO+xJBnAe3A39hXhzaXj2QUrnKl58HPPt+KASivXDoPg8ScDtSgog1TPtcHR/vneLHe/duBdBmuCSnbVUgGALZFzu8mXPq3/2ctNF79F9BELd1MBOQYfFY/5+f42xC2wyBlj4ygGil/PssjtZxS+VxdA6kIA9QymIhmCGTPghBhvp6lgQJ2Hooflyn8h3Oli8/DzAn5jdYHPkInM793jcS/ERNzg/YKvRFhkArWRwdFR/ygjtzOcf9lTsEkAHqupUrL0MXCNP+RUHu3WrQCuOOv8rZCu7Kld5pcHSEwdETLIFuh7GsCAKeRhe73YVL5Jxzd9mPBZDOhgOMpbtrFsL4h+2LgUx2nntvkh/nKXthvj/ki98qV3JCXgokVj7XJ4Fdz0r6xG7S0xDE3p++vHxmg4p/X6VUzEIbXH+Ub37EIDgaYQjUlpB2EPh9LvC9ngfUtW+b+MAM1z/08KtXyOtKXoJDwbj+8lG7sNP/420VtAFtsUnXYNQOfX8tEKZyU9YUnv3y9KnsLWx11ksMjsQSHUX25oDgzmeYjnpspyQrvboQBHGkyErA3ic0OdSOs9hvoI3IvpwUIEiMxbN+BmOAscCYlg0iABFoEYMj0ym/ghxHwUiRvPNuRcVjFIkJR3jt+cNRq1EXn+sV20I2aH9Q0/iXiACiVAwCIPvWSJFcA89abCofODI9SaBvrRhg6kNUzuJIS4pPOGrJ72M5v4Xvt5PFr4pn2vifWqfF0DVrMWgB7XaCSIiOJh5TVErsFTh2/NjmHdKyRTTJUEjzFI7mLAuCJdBaBkceSgHQOEsgh/i9ZN54CFTIHuPHUSTWIDm6f3Y0ZOtRe+xGtVd78VBQCqH4Jz8OkD96XLK845yP8jmfkkl8AGPLGITBkQsJsxGaJLJ+BU7nPilpPhw5Ix7XTRZ9979n3kp7MOQVvgPflUwejnwkXlygr0k8+9fQd0KpXcg8I1XZ2+az8BVLoGfHTqBPzWdq+/yzeaObfiIed6t6z9P/Kn8N3Dm1Oy3EnZrdAL7TXFf8lGTyqrN/Kso+9LEdPh+rznqaJVCSwdEZ7v+q7G0Zg8zNEPr3qarkiw5cORgCOcoQqCrxv1Z8157Lh3cAqNePFQLD56fcHY0HGKjdn9d44DP+/9aTf9wtHgubniFQFYMjR1KtTlPVWbkwJtmjFhgIpcS+uFn9JjfjVz7Ij5v1Gm4/gTqo14CmivxZ+N9N4k2gIhW34RjZepLW06VPUiT2MV8+bXXvAu2Nc9wBEqrF0AWG+oyg699KR/vZdxdKTamoh2PXNPj22mKEqsfeUCmxGhWpCIn7QH+1yguXXghBexZ290goyOgufeBMWIJpFYmdosiSgrv1pSvf8DIROGsdSsU2FYmVUSTWRCkxb7pm1px/f8xu0k9DCKe5P/keEvSY1Q37x9KuakpoG2uCvqDPr52xbrLocYrE3qFIrIMisemlllSoPc3KYaup++HcncQIInQg9aUq4HMYr54czMQmxfnGOiilogjGtOwMUKTiZiaOuq/hPou61Wbv7RauuhBiqfsIPDzCjxLWtsuUPqHcqDSqIhUty8oQRSreT2Wos/EA03frE4dV96XTbtJHLfPnKXFTe+0WGOSSN8QkpQPjo16HwWn4su3erXqdumH//dQwJX/NGERFYsKZSH8V99l7u/xc3Ru6hKB5tfbogXOgD/idjrSltBKNhIIz4YDH4rPo2yUZUyoGM8+IUjHDDxzq1Y+IZ9zeb+Q+LgScDjAa9H1jgS+mQce9DhHIzHJKS3S36A5DCO+QNenD22ppaNisFseUMciGbMiG/P/J/wD3Yl07/VLZpQAAAABJRU5ErkJggg=="
				/>
				<span class="ml-3 text-xl">Nicole AlKassas</span>
			</div>
			<p
				class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"
			>
				Web developer —
				<a
					href="https://github.com/Nicole5707"
					class="text-gray-600 ml-1"
					rel="noopener noreferrer"
					target="_blank">@Nicole5707</a
				>
			</p>
			<span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
				<div class="text-gray-500">
					<svg
						fill="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-5 h-5"
						viewBox="0 0 24 24"
					>
						<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
					</svg>
				</div>
				<div class="ml-3 text-gray-500">
					<svg
						fill="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-5 h-5"
						viewBox="0 0 24 24"
					>
						<path
							d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
						/>
					</svg>
				</div>
				<div class="ml-3 text-gray-500">
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-5 h-5"
						viewBox="0 0 24 24"
					>
						<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
						<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
					</svg>
				</div>
				<div class="ml-3 text-gray-500">
					<svg
						fill="currentColor"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="0"
						class="w-5 h-5"
						viewBox="0 0 24 24"
					>
						<path
							stroke="none"
							d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
						/>
						<circle cx="4" cy="4" r="2" stroke="none" />
					</svg>
				</div>
			</span>
		</div>
	</footer>
</main>
