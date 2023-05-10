import { AiFillAccountBook } from "react-icons/ai";
import { AiFillBank } from "react-icons/ai";
export const item=[
    {
        type:1,
        label:'button 1',
        icon:<AiFillAccountBook/>,
        href:'/'
    },
    {
        type:1,
        label:'button 2',
        icon:<AiFillAccountBook/>,
        href:'/aboutus'
    },
    {
        type:2,
        label:'button 3',
        icon:<AiFillBank/>,
        dropdown:[
            {
                label:'dropDown1',
                href:"/somelink"
            },
            {
                label:'dropDown1',
                href:"/somelink"
            },
            {
                label:'dropDown1',
                href:"/somelink"
            }
        ]
    }];