import React from "react";

export default function Card({post}) {
  const { API_URL } = process.env;

  console.log("image :", post.image[0].url)
  // console.log("loop")
  // for (let prop in post.image) {
  //   console.log(`post.image.${prop} = ${post.image[prop]}`);
  // }

  return (

    <div className="card shadow p-3 mb-5 rounded ">
      <img src={API_URL + post.image[0].url} className="card-img-top" alt={post.title} />
      <div className="card-body h-100">
        <h3 className="card-title font-weight-bolder text-dark">{post.title}</h3>
        <p className="card-text">{post.description}</p>
        <a href="#" className="card-link text-muted"><u>Read all</u></a>
      </div>


      <style jsx>{`
        .card{
          background-color: rgb(255,255,248, 0.8);
          opacity: 1;
        }
        
        .card-title{
          color: black;
        }
        img{
          height: 400px;
          padding-top: 5px;
          padding-left: 5px;
          padding-right: 5px;
        }
      `}</style>
    </div>



  );
}