import UserData from './UserData';
import UserDisplay from './UserDisplay';
import { useState } from 'react';

function App() {

  const [userInfo,setUserInfo] = useState({
    fname:'',
    lname:'',
    age:null,
    gender:'',
    destination:'',
    nuts:false,
    lactose:false,
    vegan:false
  })

const handleSubmit = (event) => {
  event.preventDefault();
  let inputs = event.target.getElementsByTagName('input');
  
  // Create a copy of the current state to make changes to
  let updatedUserInfo = { ...userInfo };

  for (let item of inputs) {
    if (item.type === 'radio' && item.checked) {
      console.log("gender", item.id);
      updatedUserInfo = { ...updatedUserInfo, gender: item.id };
    } else if (item.type === 'checkbox') {
      console.log(item.id, item.checked);
      updatedUserInfo = { ...updatedUserInfo, [item.id]: item.checked };
    } else if (item.type === 'text' || item.type === 'number') {
      console.log(item.id, item.value);
      updatedUserInfo = { ...updatedUserInfo, [item.id]: item.value };
    }
  }
  
  let select = event.target.getElementsByTagName('select')[0];
  console.log(select.id, select.value);
  updatedUserInfo = { ...updatedUserInfo, [select.id]: select.value };

  // Update the state with the new object
  setUserInfo(updatedUserInfo);
  console.log(updatedUserInfo); // This will show the updated state
};

  return (
    <>
      <UserData handleSubmit={handleSubmit} />
      <UserDisplay userInfo={userInfo} />
    </>
  );
}

export default App;
