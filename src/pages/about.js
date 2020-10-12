import React, { useEffect, useState } from 'react';
import axios from "axios";
import image from "../assets/img.jpg";

const About = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get('/test')
        // axios.get('http://api.xiawx.top/photos/all')
            .then(res => {
                setList(res.data.result)
            })
    }, []);
    return (<div>
        <h3>关于</h3>
        <img width='275px' src={image} />
        <div>
            {
                list.map(item => 
                    <div 
                        style={{marginTop: '15px'}} 
                        key={item.open_id}
                    >
                        {item.describe}
                    </div>
                )
            }
        </div>
    </div>)
}

export default About;