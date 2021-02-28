import React from "react";
import fetch from 'isomorphic-unfetch';
import Card from '../components/card';
import Link from "next/link";


export default function blog({posts}) {
  //console.log(posts)//
  return (
    <div className="container">
      <h1>Blogs</h1>
      <br/><br/>

      <div className="row">
        {posts.map(post => (
          <Link href={`/${post.Slug}`} key={post.id}>
            
            <div className="col-6">
              <Card  post={post} />
            </div>
            
          </Link>
        ))} 
        
      </div>

    </div>
  );
}

export async function getServerSideProps(){
  const { API_URL } = process.env;

  const res= await fetch(`${API_URL}/posts`);
  const data = await res.json();


  return{
    props: {
      posts: data
    }
  }



}
