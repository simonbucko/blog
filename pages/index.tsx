import Head from 'next/head'
import {PostCard, Categories, PostWidget} from "../components"
import {getPosts} from "../services"

// const posts = [
//   {
//     title:"React testing",
//     excerpt: "Learn react testing"
//   },
//   {
//     title:"React testing2",
//     excerpt: "Learn react testing"
//   },
//   {
//     title:"React testing3",
//     excerpt: "Learn react testing"
//   },
// ]

//post are coming as props from the static function at the botttom
export default function Home({posts}) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post,index) => (
            <PostCard post={post.node} key={index}/>
          )
         )}
        </div>
        <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories/>
            </div>
        </div>
      </div>
    </div>
  )
}

//way how we can fetch static data in Nextjs
export async function getStaticProps(){
  const posts = (await getPosts()) || []
  return {
    props:{
      posts
    }
  }
}
