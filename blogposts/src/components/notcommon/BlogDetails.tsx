import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../globalstate/store";
import { blogActions } from "../../globalstate/slices/blogSlice";
import { useState } from "react";
import { Link } from "react-router-dom";


interface Blog {
    id: string;
    title: string;
    description: string;
    category: string;
    author: string;
    date: string;
  }

const BlogDetails=() : JSX.Element=>{
    const { id } = useParams();
    const textId=id?.toString();
    const numberId = Number(id);
    const dispatch: AppDispatch=useDispatch();
    const blogs : Blog[] = useSelector((state:RootState)=>state.blog.blogs);
    const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(blogActions.fetchBlogs());
            const blog = blogs.find(x=>x.id===id);
            setSelectedBlog(blog as Blog);
        };
        fetchData();
    }, [dispatch]);

    const onClickDelete=()=>{
        const deleteData = async () => {
            await dispatch(blogActions.removeBlog(textId as string));
            
        };
        deleteData();
    }
    
    return (
        <>
        <div id="wrapper" className="flex items-center min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mx-auto">
                <p className="mb-2 col-span-1 md:col-span-2 flex items-center justify-center w-full bg-orange-600 rounded-xl p-4">
                    {selectedBlog?.description}
                </p>
                <div className="bg-gray-600 col-span-1 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold text-gray-900">
                        {selectedBlog?.title}
                    </h2>
                    <p className="font-bold text-orange-600">
                        Category: {selectedBlog?.category}
                    </p>
                    <p className="italic text-gray-600">
                        Author: {selectedBlog?.author}
                    </p>
                    <p className="text-gray-500">
                        Date: {selectedBlog?.date}
                    </p>
                    <div className="mt-4">
                        <Link to={`/editBlog/${id}`}><button className="bg-green-400 text-white px-4 py-2 rounded mr-2">Edit</button></Link>
                        <Link to={`/`}><button onClick={()=>onClickDelete()} className="bg-red-400 text-white px-4 py-2 rounded">Delete</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default BlogDetails;