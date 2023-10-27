<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { supabaseClient } from '$lib/supabase';
	import { onMount } from 'svelte';
	import Tailwindcss from '../Tailwindcss.svelte'
	import { getServerSession } from '@supabase/auth-helpers-sveltekit';
	import { redirect } from '@sveltejs/kit';

	// import '../app.postcss';
  

	onMount( async () => {
      const{data: { subscription }} = supabaseClient.auth.onAuthStateChange(() => {
		invalidateAll();
	  });

/* 	  const myData: any = await getServerSession(event);

const user = myData.access_token; */


   // Redirect to the /dashboard page if the user is logged in

/*    window.location.replace('/'); */
  


      return () => {
		subscription.unsubscribe();
	  }
  });

</script>

<slot />
