import React, {useEffect,useState} from 'react';


function Temp(){
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8081/user')
        .then(res=>res.json())
        .then(data=> setData(data))
        .catch(err=>console.log(err))
    },[])
    return(
        <div>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Score</th>
                </thead>
                <tbody>
                    {
                        data.map((d,i)=>(
                            <tr>
                                <td>{d.Name}</td>
                                <td>{d.score}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Temp