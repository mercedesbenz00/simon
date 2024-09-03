import { redirect } from 'next/navigation';

// config

// ----------------------------------------------------------------------

export default async function HomePage() {

  redirect('/dashboard');
}
