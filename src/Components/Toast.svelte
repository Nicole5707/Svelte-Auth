<script lang="ts">
	import { toastMessage } from '../store/toast'; // Import the store

	export let timer: any;

	function clearToast() {
		$toastMessage = ''; 
		clearTimeout(timer); 
	}

	// Watch for changes to the toast message and set a timer to clear it
	$: {
		if ($toastMessage) {
			// Set a timer to clear the toast message after 3000 milliseconds (3 seconds)
			timer = setTimeout(clearToast, 100000);
		}
	}
</script>

{#if $toastMessage}
	<div class="bg-green-500 text-white py-2 px-4 fixed bottom-4 right-4 rounded">
		{$toastMessage}
	</div>
{/if}
