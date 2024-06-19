
export const ListView = async() => {

  const data = await fetch(`${process.env.HOME_URL}/api/getJobList`).then(res => res.json())


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
