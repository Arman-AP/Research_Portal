
import { FaRegUser, FaRegPlusSquare } from "react-icons/fa"
import React, { useEffect, memo } from 'react';
var navItems=[
  {
    value:"Dashboard",
    link:`/portal`,
    icon:<FaRegUser/>
  },
  {
    value:"Dashboard",
    link:`/portal/porta31`,
    icon:<FaRegUser/>,
    pullRight:false
  },
  {
    value:"",
    username:true,
    link:`/portal/profile`,
    icon:<FaRegUser/>,
    pullRight:true
  }
]

navItems.map((each,index)=>{
each.id = index;
})
export default navItems;