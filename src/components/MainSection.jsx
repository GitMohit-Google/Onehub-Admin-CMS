import React, { useContext, useEffect } from 'react'
import { fetchData, fetchFormData } from '../app/actions/dataAction';
import { useDispatch, useSelector } from 'react-redux';
import HomeContext from '../context/Home/HomeContext';

const MainSection = () => {
  const { selectedSection } = useContext(HomeContext);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchData());
    dispatch(fetchFormData("home-page-carousel"));
  },[dispatch])


  const {fileList,formList} = useSelector((state)=> state.data);

  const filteredFileList = fileList.filter((file) => {
    if (selectedSection === 'OneHub-Testing') {
      return file.startsWith('test');
    } else {
      return !file.startsWith('test');
    }
  });
  
  return (
    <div className='h-full w-full bg-[#F9F9F9]'>
      {selectedSection}
    </div>
  )
}

export default MainSection
