// chart
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import "./chart.scss"



const Chart = ({title, data, dataKey, grid ,aspect}) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <LineChart data={data}>          
          <XAxis dataKey="name" stroke='#5550bd'/>          
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          <Tooltip />
          {grid && <CartesianGrid stroke='#e0dfdf'strokeDasharray={"5 5"}/>}          
        </LineChart>
      </ResponsiveContainer>      
    </div>
  )
}

export default Chart