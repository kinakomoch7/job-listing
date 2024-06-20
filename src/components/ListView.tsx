'use client'
import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then(res => res.json())

export const ListView = () => {

  const data = useSWR("/api/getJobList", fetcher).data


  if (!data) {
    return <div>failed to load</div>
  }

  return (
    <div className="py-3">
      {data.map((job: any) => (
        <div key={job.name} className="p-3 border-b bg-white ">
          <a href={job.link} className="text-sky-500 hover:text-sky-300">{job.name}</a>
          <div className="flex flex-col md:flex-row justify-between">
            <p className="bg-zinc-300 text-zinc-600">{job.industry}</p>
            <p>{job.deadline}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
