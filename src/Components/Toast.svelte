<script lang="ts">
	import { toastMessage } from '../store/toast'; // Import the store
</script>

{#if $toastMessage}
	<div class="bg-green-500 text-white py-2 px-4 fixed top-4 rounded">
		{$toastMessage}
	</div>
{/if}
