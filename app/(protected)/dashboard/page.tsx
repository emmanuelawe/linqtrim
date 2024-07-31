import { createClient } from '@/utils/supabase/server';

export default async function Dashboard() {
  const supabase = createClient();
  const { data: clicks, error } = await supabase
    .from('analytics')
    .select(`
      clicked_at,
      referrer,
      user_agent,
      ip_address,
      urls(custom_alias, long_url)
    `)
    .order('clicked_at', { ascending: false });

  if (error) {
    return <p>Error loading analytics: {error.message}</p>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="text-left py-2 px-4 border-b">Short URL</th>
            <th className="text-left py-2 px-4 border-b">Long URL</th>
            <th className="text-left py-2 px-4 border-b">Clicked At</th>
            <th className="text-left py-2 px-4 border-b">Referrer</th>
            <th className="text-left py-2 px-4 border-b">User Agent</th>
            <th className="text-left py-2 px-4 border-b">IP Address</th>
          </tr>
        </thead>
        <tbody>
            Hello
          {/* {clicks.map((entry) => (
            <tr key={entry.clicked_at}>
              <td className="py-2 px-4 border-b">{entry.urls.custom_url}</td>
              <td className="py-2 px-4 border-b">{entry.urls.original_url}</td>
              <td className="py-2 px-4 border-b">{entry.clicked_at}</td>
              <td className="py-2 px-4 border-b">{entry.referrer}</td>
              <td className="py-2 px-4 border-b">{entry.user_agent}</td>
              <td className="py-2 px-4 border-b">{entry.ip_address}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
}
