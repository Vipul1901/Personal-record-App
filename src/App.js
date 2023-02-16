
import './App.css';
import Header from './components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
// import Fields from './components/Fields';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  }
  const handlePress=(event)=>{
    if(event.key==='Enter'&&data!==''){
      addData();
    }
  }
  const removeItem =(index)=>{
      let arr = data;
      arr.splice(index,1);
      setData([...arr]);
  }

  return (
    <div className="App">
      <Header />
      <div className='form'>
        <Stack direction="row" spacing={2}>
          <TextField value={name} onKeyPress={(e)=>handlePress(e)} onChange={(event) => setName(event.target.value)} id="outlined-basic" label="Name" variant="outlined" />
          <TextField value={email} onKeyPress={(e)=>handlePress(e)} onChange={(event) => setEmail(event.target.value)} id="outlined-basic" label="Email" variant="outlined" />
          <Button onClick={addData} variant="contained" color='success'>
            Add
          </Button>
        </Stack>
      </div>
      <div className='data'>
        <div className='data_val'>
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {
          data.map((element, index) => {
            return (
              <div key={index} className='data_val'>
                <h4>{element.name}</h4>
                <h4>{element.email}</h4>
                <Stack>
                  <Button onClick={()=>removeItem(index)} color="error">
                    <DeleteOutlineIcon />
                  </Button>
                </Stack>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
