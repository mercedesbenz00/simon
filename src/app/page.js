import { redirect } from 'next/navigation';

import { paths } from 'src/routes/paths';
// config
import { PATH_AFTER_LOGIN } from 'src/config-global';

// ----------------------------------------------------------------------

export default async function HomePage() {

  redirect('/dashboard');
  // redirect(paths.dashboard.root)
  // redirect(PATH_AFTER_LOGIN)
}
