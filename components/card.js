import React from "react";

export default function Card({post}) {
  const { API_URL } = process.env;

  console.log("image :", post.image[0].url)
  // console.log("loop")
  // for (let prop in post.image) {
  //   console.log(`post.image.${prop} = ${post.image[prop]}`);
  // }

  return (

    <div className="card justify-content-center">
      <img src={API_URL + post.image[0].url} className="card-img-top" alt={post.title} />
      <div className="card-body h-100 ">
        <h3 className="card-title font-weight-bolder text-dark">{post.title}</h3>
        <p className="card-text">{post.description}</p>
        <a href="#" className="card-link text-muted"><u>Read all</u></a>
      </div>


      <style jsx>{`
        img{
          padding-top: 5px;
          padding-left: 5px;
          padding-right: 5px;
        }
      `}</style>
    </div>



  );
}