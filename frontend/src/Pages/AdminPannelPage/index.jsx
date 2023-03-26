import React , {useState} from "react";
import Header from  '../../Components/Admin/Header';
import Sidebar from '../../Components/Admin/Sidebar';

const AdminPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };
    return (
        <>
          <Header toggle={toggle} />
          <Sidebar isOpen={isOpen} toggle={toggle} />
        </>
      );

};

export default AdminPage;