'use client'

interface URLData {
  original_url: string;
  short_url: string;
  qr: string;
}

interface DashboardProps {
  urls: URLData[]
}

const DashboardPage: React.FC<DashboardProps> = ({urls}) => {
  
  return (
    <main>Dashboard</main>
  )
}

export default DashboardPage