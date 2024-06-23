import { JobListingType } from "@/types/JobListingType"

type Props = {
  data: JobListingType[]
}

export const ListView = (props: Props) => {

  const { data } = props

  return (
    <div className="py-3">
      {data.map((job: any) => (
        <div key={job.name} className="p-3 border-b bg-white ">
          <a href={job.link} className="text-sky-500 hover:text-sky-300">{job.name}</a>
          <div className="flex flex-col md:flex-row justify-between">
            <p className="bg-zinc-300 text-zinc-600">{job.industry}</p>
            <p className="text-black">{job.deadline}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
