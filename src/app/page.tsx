import { Header } from "@/components/Header"
import { ListView } from "@/components/ListView"

export default async function Home(){

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getJobList`, {
    next: {
      revalidate: 86400 // 1日（秒単位）
      // revalidate:  604800 // 1週間（秒単位）
    }
  })
  const data = await res.json()

  return (
    <div>
      <Header />
      <ListView data={data}/>
    </div>
  )
}