import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NewContact,{loader as loadContacts} from "./Component/NewContact";
import NewPage from "./Component/NewPage";
import Header from "./Component/header";
import ErrorPage from "./Pages/ErrorPage";
import AddContactPage from "./Pages/AddContactPage";
import AddContact from "./Component/AddContact";
import { action as saveContactAction } from "./Component/AddContact";
import ContactDetail from "./Component/ContactDetail";
import NewContactPage from "./Pages/NewContactPage";
import { loader as loaderContactDetails } from "./Component/ContactDetail";
import EditContactPage from "./Pages/EditContactPage";

function App() {
  const route=createBrowserRouter([
    {path:'/',element:<Header/>,errorElement:<ErrorPage/>,children:[
      {index:true,element:<NewPage/>},
      {
        path:'contact',element:<NewContactPage/>,id:'loadcontact',loader:loadContacts,children:[
          {index:true,element:<NewContact/>},
          {path:'addcontact',element:<AddContactPage/>,children:[
            {index:true,element:<AddContact method="POST"/>,action:saveContactAction},  
          ]},
          {path:':contactId',id:'individual',loader:loaderContactDetails,children:[
            {index:true,element:<ContactDetail/>},
            {path:'edit',element:<EditContactPage/>,children:[{index:true,element:<AddContact method="PATCH"/>,action:saveContactAction}]}
          ]},     
        ]      
      }, 
    ]},
  ])
  return (
    <RouterProvider router={route}></RouterProvider>
  );
}

export default App;
