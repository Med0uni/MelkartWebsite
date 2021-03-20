import React from "react";
import fetch from 'isomorphic-unfetch';
import Card from '../components/card';
import Link from "next/link";
import Button from "@material-ui/core/Button";
import Router, { useRouter } from "next/router";

export default function blog({posts, page, nbreOfPosts}) {
  //console.log(posts)//
  const router = useRouter();
  // console.log(router.query);
  const lastPage = Math.ceil(nbreOfPosts / 4);
  return (
    <div classNameName="container">
      <h1>Blogs</h1>
      <br/><br/>

      <div classNameName="row row-cols-2">
        {posts.map(post => (
          <Link href={`/${post.Slug}`} key={post.id}>
            
            <div classNameName="col">
              <Card post={post} />
            </div>
            
          </Link>

        ))} 

      <style jsx>{`
        .col{
          padding-top: 5px;
          padding-left: 5px;
          padding-right: 5px;
          padding-bottom: 5px;
        }
      `}</style>
        
      </div>


      <button className="btn btn-outline-dark"
        onClick={()=> router.push(`/blog?page=${page-1}`) }
        disabled={page <= 1} >
          Previous</button>
      <button className="btn btn-outline-dark"
        onClick={()=> router.push(`/blog?page=${page+1}`) }
        disabled={page >= lastPage} >
          Next</button>
      <br/><br/><br/><br/>
    </div>
  );
}

export async function getServerSideProps({query: {page =1} }){
  const { API_URL } = process.env;

  const start = +page ===1 ? 0 : (+page -1 )* 4;

  const nbreOfPostsResponse = await fetch(`${API_URL}/posts/count`);
  const nbreOfPosts = await nbreOfPostsResponse.json();


  const res= await fetch(`${API_URL}/posts?_limit=4&_start=${start}`);
  const data = await res.json();

  return{
    props: {
      posts: data,
      page: +page,
      nbreOfPosts
    }
  }



}