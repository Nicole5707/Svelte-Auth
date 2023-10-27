import { AuthApiError } from '@supabase/supabase-js';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
function isPasswordValid(password: string) {
	return /^(?=.*\d).{8,}$/.test(password);
}
export const actions: Actions = {
	register: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());
		const password = body.password as string;
		const confirmPassword = body.confirm_password as string;

		if (password !== confirmPassword) {
			return {
				status: 400,
				response: { error: 'Password and confirm password does not match.' }
			};
		}
		// else  (!isPasswordValid(password)) {
		// 	return {
		// 	  status: 401,
		// 	  response: { error: 'Password must be at least 8 characters long and contain at least one digit.' },
		// 	};
		//   }
		const { data, error: err } = await locals.sb.auth.signUp({
			email: body.email as string,
			password: body.password as string,
			options: {
				data: {
					first_name: body.first_name as string,
					last_name: body.last_name as string
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
		return { result: data, response: 'success' };
	}
};
