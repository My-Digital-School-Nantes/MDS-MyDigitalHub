import { getData } from './dataFetcher'
import JobOffersClient from './jobOffersClient'

export const dynamic = 'force-dynamic'

export default async function JobOffersPage () {
  const data = await getData()

  return <JobOffersClient initialData={data} />
}
