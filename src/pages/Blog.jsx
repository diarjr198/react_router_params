import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Blog() {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setContent(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <MainLayout>
      <h1>Blog Page</h1>
      {loading ? (
        <div className="loading" style={{ margin: "0 auto" }}></div>
      ) : (
        <div className="blog-wrapper">
          {content.map((item) => (
            <span key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              <Link to={`/blog/${item.id}/${item.title}`}>
                Read More &rarr;
              </Link>
            </span>
          ))}
        </div>
      )}
    </MainLayout>
  );
}
