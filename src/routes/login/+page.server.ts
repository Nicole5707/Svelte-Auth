import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { isAuthenticated } from '../../store/auth';



import { signInWithPassword } from './server';

export const actions = {
  login: async ({ request,locals }:any) => {
    const body = Object.fromEntries(await request.formData());

    const { status, response } = await signInWithPassword(
      body.email as string,
      body.password as string,
	  locals as any
    );

    if (status === 400) {
      return { status: 400, body: response,session:response };
    } else if (status === 500) {
      return { status: 500, body: response,session:response };
    }

	isAuthenticated.set(true)
    // Handle successful login here
	throw redirect(303, '/');
  },
};
/* export const actions: Actions = {
	login: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());

		const { data, error: err } = await locals.sb.auth.signInWithPassword({
			email: body.email as string,
			password: body.password as string,
		});

		console.log('request :>> ', request);

		console.log('data :>> ', data);
		console.log('err :>> ', err);
		console.log('body :>> ', body);

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
		throw redirect(303, '/');
	}
};
 */