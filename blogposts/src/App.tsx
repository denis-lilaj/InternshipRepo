import './App.css';
import  { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import {JSX} from 'react';
import { Provider } from 'react-redux';
import store from './globalstate/store';
import MainLayout from './components/common/Mainlayout';
import BlogsList from './components/notcommon/BlogsList';
import BlogDetails from './components/notcommon/BlogDetails';
import EditBlog from './components/notcommon/EditBlogForm';
import AddBlog from './components/notcommon/AddBlog';

function App() : JSX.Element  {
    const router=createBrowserRouter(createRoutesFromElements(
         <Route path="/" element={<MainLayout/>}>
            <Route path="/" element={<BlogsList/>}/>
            <Route path="/viewBlog/:id" element={<BlogDetails/>}/>
            <Route path="/createBlog" element={<AddBlog></AddBlog>}/>
            <Route path="/editBlog/:idP" element={<EditBlog/>}/>
         </Route>  
    ));

    return(
      <Provider store={store}>
         <RouterProvider router={router}/>
      </Provider> 

    )
}

export default App;
