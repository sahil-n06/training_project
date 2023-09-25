import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { error } from 'console';

  const Navigaton = () =>{
    const [menuList, setmenuList] = useState([]);

    useEffect (()=>{
      const apiUrl = 'http://localhost:5555/menu';
      axios
      .get(apiUrl)
      .then((response)=>{
        setmenuList(response.data);
        console.log("Menu list data is ",response.data);
      })
    .catch((error)=>{
      console.log("Error while fetching the data ",error)
    })
    },[])
    return(
    <Sidebar>
  <Menu>
      {/* <MenuItem> Home </MenuItem>
      <MenuItem> Admin </MenuItem> */}
      {menuList.map((item,index)=>{
        return <MenuItem key={item["Id"]}>{item["MenuText"]}</MenuItem>;
      })}
  </Menu>
</Sidebar>);
  }
export default Navigaton;