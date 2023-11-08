import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Customhooks/useFetch';

function Detailspage() {
  const {name} = useParams();
  const [data, setData] = useState();
  const axiosFetch = useFetch();



  useEffect(() => {
    axiosFetch.get(`/AllData/${name}`)
      .then((res) => setData(res?.data))
      .catch(error => console.log(error));
  }, [])


  console.log(data);


  return (
    <div>Detailspage</div>
  )
}

export default Detailspage