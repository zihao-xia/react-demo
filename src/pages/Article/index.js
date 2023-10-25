import { useParams } from "react-router-dom"

const Article = () => {
  // const [params] = useSearchParams()
  // const id = params.get('id')
  // const name = params.get('name')
  const params = useParams()
  const id = params.id
  return <div>article{id}</div>
}

export default Article