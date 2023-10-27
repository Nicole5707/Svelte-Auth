import { AuthApiError } from '@supabase/supabase-js';

export async function signInWithPassword(email:string, password:string,locals:any) {
  try {
    // Server-side code to sign in with password using Supabase
    const { data, error } = await locals.sb.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      if (error instanceof AuthApiError && error.status === 400) {
        return {
          status: 400,
          response: { error: 'Invalid email or password' },
        };
      }
      return {
        status: 500,
        response: { error: 'Server error. Please try again later.' },
      };
    }

    return { status: 200, response: data };
  } catch (error) {
    return { status: 500, response: { error: 'Internal server error.' } };
  }
}