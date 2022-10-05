import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default function BlogDetail() {
  const { id, slug } = useParams();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <MainLayout>
      <Link to="/blog" className="back">
        &larr; Back to Blog
      </Link>
      <div className="detail">
        {loading ? (
          <div className="loading"></div>
        ) : (
          <div className="blog-content">
            <h1>{data.title}</h1>
            <p>{data.body}</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
