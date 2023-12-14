import React, {useEffect,useState} from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

function MedicineDetails(){
    const { id } = useParams();
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:8081/medicineDetails/${id}`)
        .then(res=>res.json())
        .then(data=> setData(data))
        .catch(err=>console.log(err))
    },[])

    console.log(data);

    return(
        <div>
            {
                console.log(id)
            }
            {id}
        </div>
    );
  };


  export default MedicineDetails
