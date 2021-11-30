import { useRouter } from 'next/router'; 

const DetailPage = () => {
  const router = useRouter(); 
  //query gives us access to the nested object 
  //in the query object we have access to the identifier
  router.query.nesId;
  const newsId = router.query.newsId; 
  //send the request to the API 
  return (
    <div>
      <h1>Detail</h1>
    </div>
  )
}

export default DetailPage
