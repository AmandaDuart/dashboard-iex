import React, {Component, useState, useEffect} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, AreaChart} from 'recharts';
import {chartsClient} from '../../api/client'


async function getLastPrice() {
  var resultApi = await chartsClient()
  return resultApi
}

const SimpleLineChart = () => {

  const [data, setData] = useState([]);
  const [lastValue, setLastValue] = useState([]);

  let newData = [...data]
  
  setTimeout(() => {

    getLastPrice().then((result)=>{
      
      var date = new Date();
    var actual = `${date.getHours()}:${date.getMinutes()}`

    newData.push(
      {
        "name": actual,
        "uv":  result,
        "pv": 4300,
        "amt": 2100
      }
    )
     setData(newData)
    console.log(newData.length)
    if(newData.length > 4){
      newData.shift()
    }
      

    })
  }, 5000);
  return (
    <>
        <AreaChart width={730} height={250} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0047BB" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#0047BB" stopOpacity={0}/>
              </linearGradient>
   
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#0047BB75" fillOpacity={1} fill="url(#colorUv)" />
          </AreaChart>
    </>
  )
  }

        
    export default SimpleLineChart;