import { JobListingType } from "@/types/JobListingType"

type Props = {
  data: JobListingType[]
  setSelectData: any
}

export const ConditionSearch = (props: Props) => {

  const { data, setSelectData } = props

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectData(data.filter((job) => job.industry === e.target.value))
  }

  const industries = data.map((job) => job.industry)
  const uniqueIndustries = Array.from(new Set(industries))


  return (
    <div className="p-3 bg-white mb-5 flex">
      <div className="text-black bg-gray-300 mr-5 leading-10">検索条件</div>
      <select
        className="border border-gray-300 p-2 hover:cursor-pointer w-2/3 md:w-1/3"
        onChange={handleChange}
      >
        {uniqueIndustries.map((industry:string) => (
          <option key={industry} value={industry}>{industry}</option>
        ))}
      </select>
    </div>
  )
}