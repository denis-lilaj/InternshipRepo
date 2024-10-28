import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../globalstate/store";
import { blogActions } from "../../globalstate/slices/blogSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Blog {
    id: string;
    title: string;
    description: string;
    category: string;
    author: string;
    date: string;
}

const EditBlog = () => {
    const { idP } = useParams();
    const id_number = Number(idP);
    const blogs: Blog[] = useSelector((state: RootState) => state.blog.blogs);
    const dispatch: AppDispatch = useDispatch();

    const [currentBlog, setCurrentBlog] = useState<Blog | null>(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            await dispatch(blogActions.fetchBlogs());
        };
        fetchBlogs();
    }, [dispatch]);

    useEffect(() => {
        if (blogs.length > 0) {
            setCurrentBlog(blogs.find(x=>x.id===idP) as Blog);
        }
    }, [blogs, id_number]);

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [date, setDate] = useState<string>(new Date().toISOString());
    const [author, setAuthor] = useState<string>("");
    const navigate=useNavigate();


    useEffect(() => {
        if (currentBlog) {
            setTitle(currentBlog.title);
            setDescription(currentBlog.description);
            setCategory(currentBlog.category);
            setAuthor(currentBlog.author);
            setDate(currentBlog.date);
        }
    }, [currentBlog]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); 
        const updateBlog: Blog = {
            id: currentBlog?.id || "",
            title,
            description,
            category,
            author,
            date,
        };

        const updatedObj = { id: idP as string, blog: updateBlog };

        await dispatch(blogActions.putBlog(updatedObj));

        navigate("../");
    };

    if (!currentBlog) {
        return <div>Loading...</div>; 
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Edit Blog</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
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
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded -md focus:ring focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={category}
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
                        value={author}
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
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
                >
                    Update Blog
                </button>
            </form>
        </div>
    );
};

export default EditBlog;