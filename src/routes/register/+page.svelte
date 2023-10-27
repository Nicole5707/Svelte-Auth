<script context="module" lang="ts">
	import {  redirect } from '@sveltejs/kit';
	import { isAuthenticated } from '../../store/auth';

	/** @type {import('./$types').LayoutServerLoad} */
	// Import necessary modules
	let user;

	isAuthenticated.subscribe(value => {
		user = value;
	}); 
	
	if (user) {
		redirect(302, '/');
	}


	import Button from "../../Components/Button.svelte";
	import Input from "../../Components/input.svelte";
</script>

<main class="bg-gradient-to-tr from-[#fff_8%] via-[#97E0FF_40%] to-[#fff_90%] bg-no-repeat bg-[300%,300%] animate-wave">
    <div class="container flex justify-center items-center w-screen h-screen mx-auto">
	  <form  action="?/register" method="POST" 
        class="auth-form lg:w-2/6 md:w-1/2 bg-opacity-40 bg-white backdrop-blur rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
		<h1 class=" text-2xl font-bold title-font mb-5">Sign Up</h1>
		<Input label="First-Name" name="first_name" type="text" required/>
		<Input label="Last-Name" name="last_name" type="text" required/>
		<Input label="Email" name="email" type="email" required/>
		<Input label="Password" name="password" type="password" required />
        <Button type="">Sign Up</Button>
		<p class="text-xs mt-3">Already have an account? <a href="/login" class="underline">Login</a>.</p>
	  </form>
	<!--   <Toast /> -->
	</div>
</main>