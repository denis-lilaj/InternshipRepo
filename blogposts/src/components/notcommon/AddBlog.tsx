import { useState } from "react";
import { useDispatch } from "react-redux";
import { blogActions } from "../../globalstate/slices/blogSlice";
import { AppDispatch } from "../../globalstate/store";
import { useNavigate } from "react-router-dom";


interface BlogAdd{
    title: string;
    description: string;
    category: string;
    author: string;
    date: string;
}

const AddBlog = (): JSX.Element => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [date, setDate] = useState<string>(new Date().toISOString().split("T")[0]); 
    const [author, setAuthor] = useState<string>("");
    const navigate=useNavigate();

    const dispatch: AppDispatch = useDispatch();

    const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newBlog : BlogAdd = {
            title:title,
            description:description,
            category:category,
            author:author,
            date:date,
        };
        await dispatch(blogActions.postBlog(newBlog)); 

        navigate("../")
        
    };

    return(
    
    <div className="flex flex-col justify-center min-h-screen">
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md w-full">
        <h2 className="text-2xl font-bold mb-4">Add Blog</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
                <input
                    type="text"
                    id="category"
                    name="category"
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author:</label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
            >
                Create Blog
            </button>
        </form>
    </div>
</div>
)
}

export default AddBlog;