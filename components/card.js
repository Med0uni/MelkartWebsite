import React from "react";

export default function Card({post}) {
  const { API_URL } = process.env;

  console.log("image :", post.image[0].url)
  // console.log("loop")
  // for (let prop in post.image) {
  //   console.log(`post.image.${prop} = ${post.image[prop]}`);
  // }

  return (

    <div className="card">
      <img src={API_URL + post.image[0].url} className="card-img-top" alt={post.title} />
      <div className="card-body">
        <h4 className="card-title">{post.title}</h4>
        <p className="card-text">{post.description}</p>
        <a href="#" className="btn btn-primary">Read all</a>
      </div>
    </div>



  );
}