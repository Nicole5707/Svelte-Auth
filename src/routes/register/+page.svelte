<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data: any;
	/** @type {import('./$types').ActionData} */
	export let form: any;
	import { toastMessage } from '../../store/toast';
	if (data.session !== null) {
		window.location.href = '/';
	}
	form?.response === 'success'
		? toastMessage.set(
				'You have signed up successfully!😎, please check your email to confirm your account😁'
		  )
		: toastMessage.set('');
	import Toast from '../../Components/Toast.svelte';
	import Button from '../../Components/Button.svelte';
	import Input from '../../Components/input.svelte';
</script>

<main
	class="bg-gradient-to-tr from-[#fff_8%] via-[#97E0FF_40%] to-[#fff_90%] bg-no-repeat bg-[300%,300%] animate-wave"
>
	<div class="container flex justify-center items-center w-screen h-screen mx-auto">
		<form
			action="?/register"
			method="POST"
			class="auth-form lg:w-2/6 md:w-1/2 bg-opacity-40 bg-white backdrop-blur rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0"
		>
			<h1 class=" text-2xl font-bold title-font mb-5">Sign Up</h1>
			<Input label="First-Name" name="first_name" type="text" required />
			<Input label="Last-Name" name="last_name" type="text" required />
			<Input label="Email" name="email" type="email" required />
			<Input label="Password" name="password" type="password" required />
			<Button type="">Sign Up</Button>
			<p class="text-xs mt-3">
				Already have an account? <a href="/login" class="underline">Login</a>.
			</p>
		</form>
		<Toast />
	</div>
</main>
