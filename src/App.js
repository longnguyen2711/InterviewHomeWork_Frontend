import './App.css';
import { Route, Switch, Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Loading from './_Component/Loading/Loading';

// UserTemplate
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
// AdminTemplate
import { AdminTemplate } from './templates/AdminTemplate/AdminTemplate';
import ListAccount from './pages/Admin/ListAccount/ListAccount';
import DetailAccount from './pages/Admin/ListAccount/DetailAccount/DetailAccount';
import ListPosts from './pages/Admin/ListPosts/ListPost';
import DetailPost from './pages/Admin/ListPosts/DetailPost/DetailPost.jsx';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Loading />
      <Switch>
        <UserTemplate path="/register" exact Component={Register} />
        <UserTemplate path="/login" exact Component={Login} />


        <AdminTemplate path="/admin/listaccount" exact Component={ListAccount} />
        <AdminTemplate path="/admin/listaccount/detailaccount/:id" exact Component={DetailAccount} />+
        <AdminTemplate path="/admin/listposts" exact Component={ListPosts} />
        <AdminTemplate path="/admin/listposts/detailpost/:iduser/:idpost" exact Component={DetailPost} />


        <AdminTemplate path="/" exact Component={ListAccount} />
      </Switch> 
    </Router>
  );
}

export default App;

// npx create-react-app friverr
// npm react-router-dom@5.3.0
// npm i react-redux
// npm i redux
// npm i redux-thunk
// npm i lodash
// npm i axios
// npm i moment                      
// npm i antd                           
// npm install --save @ant-design/icons   
// npm install formik --save              
// npm install slick-carousel --save      
// npm install react-slick --save         
// npm i redux-devtools-extension
// npm install node-sass --save 
// npm i yup -S
