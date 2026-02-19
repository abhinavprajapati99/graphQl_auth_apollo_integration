import { useQuery } from "@apollo/client";
import { companyByIdQuery, jobByIdQuery, jobsByIdQuery } from "./queries"

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

export function useJobs() {
  const
    { data,
      error,
      loading
    }
      = useQuery(jobsByIdQuery, {
        fetchPolicy: 'network-only'
      })

  return {
    jobs: data?.jobs, loading, error: Boolean(error)
  }
}