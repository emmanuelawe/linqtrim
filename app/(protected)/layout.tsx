import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { createServerClient } from '@supabase/ssr';

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {

  //ONLY VISIBLE WHEN USER SESSION IS ACTIVE
  const supabase = createClient()

  const { data: { session } } = await supabase.auth.getSession();


  if (!session) {
    redirect('/login');
  }

  return <>{children}</>;
}
