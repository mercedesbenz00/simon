import { redirect } from 'next/navigation';

// config

// ----------------------------------------------------------------------

export default async function HomePage() {

  redirect('/dashboard');
  // redirect(paths.dashboard.root)
  // redirect(PATH_AFTER_LOGIN)
}
