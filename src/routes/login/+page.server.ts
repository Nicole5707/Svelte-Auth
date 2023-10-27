import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

import { signInWithPassword } from './server';

export const actions = {
	login: async ({ request, locals }: any) => {
		const body = Object.fromEntries(await request.formData());

		const { status, response } = await signInWithPassword(
			body.email as string,
			body.password as string,
			locals as any
		);

		if (status === 400) {
			return { status: 400, body: response, session: response };
		} else if (status === 500) {
			return { status: 500, body: response, session: response };
		}
		throw redirect(303, '/');
	}
};
