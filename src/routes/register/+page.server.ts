import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';
import { toastMessage } from '../../store/toast'; // Import the store
import type { Actions } from './$types';

export const actions: Actions = {
	register: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());

		const { data, error: err } = await locals.sb.auth.signUp({
			email: body.email as string,
			password: body.password as string,
            options: {
                data: {
                  first_name: body.first_name as string,
                  last_name: body.last_name as string,
                }
            }
		});

		if (err) {
			if (err instanceof AuthApiError && err.status === 400) {
				return fail(400, {
					error: 'Invalid email or password'
				});
			}
			return fail(500, {
				error: 'Server error. Please try again later.'
			});
		}

		// Sign-up was successful, set a success message for the toast
		toastMessage.set("Sign-up successful!");
		console.log("toassssst",toastMessage);

		// throw redirect(303, '/');
	}
};
