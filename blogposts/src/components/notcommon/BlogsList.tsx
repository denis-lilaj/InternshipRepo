import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../globalstate/store";
import { blogActions } from "../../globalstate/slices/blogSlice"; 
import { Link } from "react-router-dom";

const BlogsList = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const blogs = useSelector((state: RootState) => state.blog.blogs);

  useEffect(() => {
    const getData = async () => {
      try {
        await dispatch(blogActions.fetchBlogs());
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    getData();
  }, [dispatch]); 

  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">Blogs List</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" key={blog.id}>
              <h2 className="text-xl font-semibold text-gray-900">{blog.title}</h2>
              <p className="text-gray-700 mb-2">{blog.description.slice(0, 200).concat("...")}</p>
              <p className="font-bold text-orange-600">Category: {blog.category}</p>
              <p className="italic text-gray-600">Author: {blog.author}</p>
              <p className="text-gray-500 mb-3">Date: {blog.date}</p>
              <Link to={`/viewBlog/${blog.id}`}>
                <button className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-500 transition duration-300">
                  Read More
                </button>
              </Link>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-600 text-lg">No blogs available.</p>
        )}
      </ul>
    </div>
  );
}

export default BlogsList;