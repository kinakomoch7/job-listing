import { Header } from "@/components/Header"
import { ListView } from "@/components/ListView"

export default async function Home(){

  const res = await fetch(`${process.env.HOME_URL}/api/getJobList`, {
    next: {
      revalidate:  604800 // 1週間（秒単位）
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