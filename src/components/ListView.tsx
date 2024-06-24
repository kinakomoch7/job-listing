'use client'
import { JobListingType } from "@/types/JobListingType"
import { useState } from "react"
import { ConditionSearch } from "./ConditionSearch"

type Props = {
  data: JobListingType[]
}

export const ListView = (props: Props) => {

  const { data } = props
  const [selectData, setSelectData] = useState<JobListingType[]>(data)



  return (
    <div className="py-3">
      <ConditionSearch data={data} setSelectData={setSelectData} />
      {selectData.map((job: any) => (
        <div key={job.name} className="p-3 border-b bg-white ">
          <a href={job.link} className="text-sky-500 hover:text-sky-300">{job.name}</a>
          <div className="flex flex-col md:flex-row justify-between">
            <p className="py-1"><span className="bg-zinc-300 text-zinc-600 p-1">{job.industry}</span></p>
            <p className="text-black">{job.deadline}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
