import { useQuery } from "@apollo/client";
import { companyByIdQuery, jobByIdQuery } from "./queries"

export function useCompany(id) {
  const { data, error, loading } = useQuery(companyByIdQuery, { variables: { id } })

  return { company: data?.company, loading, error: Boolean(error) }
}

export function useJob(id) {
  const
    { data,
      error,
      loading
    }
      = useQuery(jobByIdQuery, { variables: { id } })
  console.log("data ==> ", data);

  return {
    job: data?.job, loading, error: Boolean(error)
  }
}