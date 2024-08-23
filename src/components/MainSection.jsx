import React, { useEffect } from 'react'
import { fetchData, fetchFormData } from '../app/actions/dataAction';
import { useDispatch, useSelector } from 'react-redux';

const MainSection = () => {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchData());
  },[dispatch])
  const {fileList} = useSelector((state)=> state.data);
  console.log(fileList);


  return (
    <div className='h-full w-full bg-[#F9F9F9]'>
      Section
    </div>
  )
}

export default MainSection
