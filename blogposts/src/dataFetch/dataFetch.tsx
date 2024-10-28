interface Blog {
   id: string;
   title: string;
   description: string;
   category: string;
   author: string;
   date: string;
 }

interface AddBlog{
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
}


 
 const getAllBlogs = async (): Promise<Blog[]> => {
   try {
     const response = await fetch("http://localhost:5000/blogs");
     if (!response.ok) {
       throw new Error('Network response was not ok');
     }
     const data: Blog[] = await response.json();
     return data;
   } catch (error) {
     console.error('Error fetching blogs:', error);
     return [];
   }
 };


 const getBlogById= async(id : string): Promise<Blog> => {
   let data; 
   try{
      const response=await fetch(`http://localhost:5000/blogs?id=${id}`);
      if(!response.ok){
        throw new Error('Network response was not ok');
      }
      data=await response.json();
      }catch(error){
      console.error('Error fetching blog:',error);
      }
    return data;
 }
    
 
 
 const addBlog = async (newBlog: AddBlog): Promise<AddBlog> => {
   try {
     const response = await fetch("http://localhost:5000/blogs", {
       method: "POST",
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(newBlog),
     });
     if (!response.ok) {
       throw new Error('Network response was not ok');
     }
     return await response.json();
   } catch (error) {
     console.error('Error adding blog post:', error);
     throw error; 
   }
 };
 
 const updateBlog = async (id: string, updatedBlog: Blog): Promise<Blog> => {
   try {
     const response = await fetch(`http://localhost:5000/blogs/${id}`, {
       method: "PATCH",
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(updatedBlog),
     });
     if (!response.ok) {
       throw new Error('Network response was not ok');
     }
     return await response.json();
   } catch (error) {
     console.error('Error updating blog post:', error);
     throw error; 
   }
 };
 
 const deleteBlog = async (id: string): Promise<void> => {
   try {
     const response = await fetch(`http://localhost:5000/blogs/${id}`, {
       method: "DELETE",
     });
     if (!response.ok) {
       throw new Error('Network response was not ok');
     }
   } catch (error) {
     console.error('Error deleting blog post:', error);
     throw error; 
   }
 };
 

 const blogOperations = {
  getAllBlogs,
  getBlogById,
  addBlog,
  updateBlog,
  deleteBlog
};

export default blogOperations;
