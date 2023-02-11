import { Box, Button, Typography } from '@mui/material'
import React, { useState,useEffect } from 'react'
import demo from '../../assets/demo.png'
import { getAllEvents } from '../../functions/eventFunctions'
const items = [
    {
        "_id": '1',
        "image": '',
        "name": "One Of The Deadliest Earthquakes Of The Century Has Destroyed Turkey, Help Now",
        "CreatedBy?.userName": 'Rishabh Foundation',
        "Attendees.length": '46',
        "category": 'animal'
    },
    {
        "_id": '1',
        "image": '',
        "name": "One Of The Deadliest Earthquakes Of The Century Has Destroyed Turkey, Help Now",
        "CreatedBy?.userName": 'Rishabh Foundation',
        "Attendees.length": '46',
        "category": 'animal'
    },
    {
        "_id": '1',
        "image": '',
        "name": "One Of The Deadliest Earthquakes Of The Century Has Destroyed Turkey, Help Now",
        "CreatedBy?.userName": 'Rishabh Foundation',
        "Attendees.length": '46',
        "category": 'animal'
    },
    {
        "_id": '1',
        "image": '',
        "name": "One Of The Deadliest Earthquakes Of The Century Has Destroyed Turkey, Help Now",
        "CreatedBy?.userName": 'Rishabh Foundation',
        "Attendees.length": '46',
        "category": 'animal'
    },
    {
        "_id": '1',
        "image": '',
        "name": "One Of The Deadliest Earthquakes Of The Century Has Destroyed Turkey, Help Now",
        "CreatedBy?.userName": 'Rishabh Foundation',
        "Attendees.length": '46',
        "category": 'animal'
    },
    {
        "_id": '1',
        "image": '',
        "name": "One Of The Deadliest Earthquakes Of The Century Has Destroyed Turkey, Help Now",
        "CreatedBy?.userName": 'Rishabh Foundation',
        "Attendees.length": '46',
        "category": 'animal'
    },
]
const Items = () => {

    const [items, setitems] = useState([])

    const fetchevents=async()=>{
        const x = await getAllEvents()
        if(x?.data?.success){
            console.log(x)
            setitems(x.data.data)
        }
    }

    useEffect(() => {
        fetchevents()
    }, [])
    

    return (
        <>
            { items && items.map((item) => {
                const percentage = `${((Number(item.raised)) / Number((+item.needed))) * 100}%`
                console.log(item.image)
                return (
                    <Box style={{ w_idth: '31%', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '8px', boxShadow: '0px 5px 10px -5px', marginBottom: '16px' }}>
                        <img src={"/images/"+ item.image} style={{ height: '200px' }} />
                        <Box style={{ padding: '20px' }}>
                            <Box>
                                <Typography style={{ fontFamily: 'inherit', fontWeight: '600' }}>{item.name}</Typography>
                                <Typography style={{ fontFamily: 'inherit', fontSize: '14px', color: 'rgba(0,0,0,.3)', marginTop: '12px' }}>{item.CreatedBy?.userName}</Typography>
                            </Box>
                            <Box style={{ marginTop: '12px' }}>
                                <Typography style={{ fontFamily: 'inherit', textAlign: 'center', fontWeight: 'bold', fontSize: '15px' }}>{item.Attendees.length} Attendees</Typography>
                            </Box>
                            <Box style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px' }}>
                                <Button variant='outlined' style={{ fontFamily: 'inherit', w_idth: '49%' }}>Share</Button>
                                <Button variant='contained' style={{ fontFamily: 'inherit', w_idth: '49%', background: 'linear-gradient(to bottom right, #7C65D8, #20B9CC)' }}>Join</Button>
                            </Box>
                        </Box>
                    </Box>
                )
            })}
        </>
    )
}

export default Items