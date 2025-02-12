import React,{useState,useEffect} from 'react';
import DashboardCard from '../../UI/DashboardCard/DashboardCard';
import { FaSunPlantWilt } from "react-icons/fa6";
import { GrVmMaintenance } from "react-icons/gr";
import { FaUsers } from "react-icons/fa";
import AppDataTable from '../../UI/DataTable/DataTable';
import { getuserList, getPlantationCount } from '../../../Service/dashboardService';
import Loading from '../../UI/Loading/loading';

const Dashboard=()=> {
    const [isloading, setIsloading]= useState(false);
    const [error, setError] = useState("");
    const [userList, setUserList]=useState([]);
    const [plantationCount, setPlanatationCount]=useState(0);
    const [userCount, setUsercount]=useState(0);


    const getDashboardData=async ()=>{
        try {
            setIsloading(true)
            const response = await getuserList();
            const response2 = await getPlantationCount();


            if(response.responseStatus == "true" && response2.responseStatus == "true"){
                //console.log(response, response2);
                setUserList(response.result);
                setPlanatationCount(response2.result[0].count);
                setUsercount(response.result.length)
                navigate("/admin/");
            }else{
                alert(response.responseMasage);
            }
            setFormData({ username: "", password: "" }); // Reset form
        } catch (err) {
            setError(err.message);
        } finally {
            setIsloading(false)
        }
    }

    // Call function on mount
    useEffect(() => {
        getDashboardData();
    }, []);


  return (
    <div className='h-[calc(100%-100px)] overflow-auto'>
        {isloading?<Loading></Loading>:''}
        <div className="p-4 grid grid-cols-3 gap-3">
            <DashboardCard title="Plantation" value={plantationCount} color="bg-blue-500" Icon={FaSunPlantWilt} />
            <DashboardCard title="Maintenance" value="0" color="bg-green-500" Icon={GrVmMaintenance} />
            <DashboardCard title="User & Support" value={userCount} color="bg-orange-500" Icon={FaUsers} />
        </div>
        <div className="p-4 grid grid-cols-1 gap-1">
            <AppDataTable dataset={userList}></AppDataTable>
        </div>
    </div>
  )
}

export default Dashboard