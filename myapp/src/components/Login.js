import {Studentdata} from '../data/data'
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export default function Login(){
    const Navigate = useNavigate()

    const [Credential, setCredentails] = useState({
         name:"",password:""
    });
   

    const handlechange = (e) => {
     e.preventDefault();
    const {name,value} = e.target;
    setCredentails(prev=>({
        ...prev,
        [name]:value
    }))
    }

    const handlelogin = () => {
        if (Studentdata.name === Credential.name && Studentdata.password && Credential.password){
            console.log("Login Successfull");
            Navigate('/dashboard');
        }
       





    }


    return (


       <>
          <div>
             <h3>Name:</h3>
             <input type="text" name="username" onChange={handlechange}/>
             <h3>Password:</h3>
             <input type="text" name="password" onChange={handlechange}/>
             <button onClick={handlelogin}>Login</button>
             
          </div>
        
       
       </>
    )
}