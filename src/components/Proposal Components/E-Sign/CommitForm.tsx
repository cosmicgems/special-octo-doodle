import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const CommitForm = () => {
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<any>({
        first_name: "",
        last_name: "",
    });
    const [notes, setNotes] = useState<string>("");
    const [ready, setReady] = useState<boolean>(false);
    
    const currentDate = new Date().toDateString();
    const currentTime = new Date().toTimeString();
    const [date, setDate] = useState<string>(currentDate);
    const [time, setTime] = useState<string>(currentTime)
    const [sending, setSending] = useState<boolean>(false);
    const [sent, setSent] = useState<boolean>(true);
    const [success, setSuccess] = useState<any>({
        message: "",
        status: false
    });
    const [error, setError] = useState<any>({
        message: "",
        status: false
    })

    const handleSubmit = async (e:any) => {
        e.preventDefault()
        try {

            setSending(!sending);

            const form = {
                first_name: name.first_name,
                last_name: name.last_name,
                email, 
                notes,
                date,
                time
            };

            const res = await axios.post("/api/invest/form", {form});
            setSuccess({status: true, message: "Proposal submitted successfully. Notes will be analyzed for any requested feature additions or deletions."})
            console.log(res.data);
            

        } catch (error) {
            setSending(!sending)
            setError({status: true, message: "There was an error submitting your request. Please feel free to refresh and try again."})
            console.error(`Error: ${error}`)
        }
        console.log("here");
        
        setTimeout(()=>{
            setSent(true)
            setSending(false)
        }, 1000)

        
        setTimeout(()=>{
            setError({status:false, message: ""})
            setSuccess({status:false, message: ""})
            setDate("");
            setTime("");
            setName({first_name: "", lastName: ""});
            setNotes("");
            setEmail("");

        }, 5000)

        setTimeout(()=>{
            setSent(false)
            setReady(false)
            setDate(currentDate);
            setTime(currentTime);
        }, 6000)
        
    }
    

  return (
    <form onSubmit={handleSubmit} className='w-full md:w-2/5 px-6 flex flex-col gap-3'>
        {
            !ready && !sending ?
                <>
                    <TextField fullWidth value={name.first_name} onChange={(e)=> {setName({...name,first_name: e.target.value})}} variant='outlined' label="First Name"  />
                    <TextField fullWidth value={name.last_name} onChange={(e)=> {setName({...name,last_name: e.target.value})}} variant='outlined' label="Last Name"  />
                    <TextField fullWidth value={email} onChange={(e)=> {setEmail(e.target.value)}} variant='outlined' label="Email"  />
                    <TextField fullWidth value={notes} onChange={(e)=> {setNotes(e.target.value)}} variant='outlined' label="Notes" multiline rows={4}  />
                    <div className='gap-1 flex flex-col'>
                        <div className='flex gap-1'>
                            <Typography variant='body1' className='font-bold'>
                                First Name
                            </Typography>
                            <Typography variant='body1'>
                                {name.first_name}
                            </Typography>
                        </div>
                        <div className='flex gap-1'>
                            <Typography variant='body1' className='font-bold'>
                                Last Name
                            </Typography>
                            <Typography variant='body1'>
                                {name.last_name}
                            </Typography>
                        </div>
                        <div className='flex gap-1'>
                            <Typography variant='body1' className='font-bold'>
                                Email
                            </Typography>
                            <Typography variant='body1'>
                                {email}
                            </Typography>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Typography variant='body1' className='font-bold'>
                                Notes
                            </Typography>
                            <Typography variant='caption'>
                                {notes}
                            </Typography>
                        </div>

                        
                    </div>
                    {
                        name !== "" && email !== "" ?
                            <Button variant='contained' onClick={()=> {setReady(!ready)}} size='large' className='gradient-button'>
                                Submit
                            </Button> 
                        :
                        <Button disabled variant='contained' onClick={()=> {setReady(!ready); }} size='large' className='gradient-button'>
                            Submit
                        </Button> 

                    }
               
                </>
            : ready  && !sending  ?
                <>

                    <div className='gap-1 flex flex-col'>
                        <div className='flex gap-1'>
                            <Typography variant='body1' className='font-bold'>
                                First Name
                            </Typography>
                            <Typography variant='body1'>
                                {name.first_name}
                            </Typography>
                        </div>
                        <div className='flex gap-1'>
                            <Typography variant='body1' className='font-bold'>
                                Last Name
                            </Typography>
                            <Typography variant='body1'>
                                {name.last_name}
                            </Typography>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Typography variant='body1' className='font-bold'>
                                Email
                            </Typography>
                            <Typography variant='body2'>
                                {email}
                            </Typography>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Typography variant='body1' className='font-bold'>
                                Notes
                            </Typography>
                            <Typography variant='body2'>
                                {notes}
                            </Typography>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Typography variant='body1' className='font-bold'>
                                Date
                            </Typography>
                            <Typography variant='body2'>
                                {currentDate}
                            </Typography>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Typography variant='body2'>
                                {currentTime}
                            </Typography>
                        </div>

                        
                    </div>
                    <Button variant='contained' type='submit' onClick={(e)=> {handleSubmit(e)}} size='large' className='gradient-button'>
                        Submit
                    </Button> 
                
                </>
                :
                null
        }

        {
            sending ?
                <div  className='flex flex-col justify-center items-center w-full h-full'>
                    <CircularProgress color="success" />
                </div>
            :
            sent && success.status ?
                <div  className='flex flex-col justify-center items-center w-full h-full'>
                    <CheckCircleOutlineRoundedIcon color='success' sx={{fontSize: "5rem"}} />
                    <Typography variant='body1'>
                        {success.message}
                    </Typography>
                </div>
            :

            error.status ?
                <div  className='flex flex-col justify-center items-center w-full h-full'>
                    <ErrorOutlineIcon color='error' sx={{fontSize: "5rem"}} />
                    <Typography variant='body1'>
                        {error.message}
                    </Typography>
                </div>
            :
            null
        }


    </form>
  )
}

export default CommitForm