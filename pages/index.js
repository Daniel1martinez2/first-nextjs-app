import Link from 'next/link'; 
import { Fragment } from "react"; 

const HomePage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/something"> Elem 1 </Link>
        </li>
        <li>Elem 2</li>
      </ul>
    </Fragment>
  )
}

export default HomePage
