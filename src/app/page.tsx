import { Header } from "@/components/Header"
import { ListView } from "@/components/ListView"

export default async function Home(){

  const data = await fetch(`${process.env.HOME_URL}/api/getJobList`).then(res => res.json())

  return (
    <div>
      <Header />
      <ListView data={data}/>
    </div>
  )
}