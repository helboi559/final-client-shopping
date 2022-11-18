import { Typography } from '@mui/material';
import moment from 'moment';
import { useEffect, useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { useValue } from '../../../context/ContextProvider';

const months = 5;
const today = new Date();
const tempData = [];
for (let i = 0; i < months; i++) {
  const date = new Date(
    today.getFullYear(),
    today.getMonth() - (months - (i + 1))
  );
  tempData.push({
    date,
    name: moment(date).format('MMM YYYY'),
    ordersAdmin: 0,
  });
}

export default function OrdersChart() {
  const {
    state: { ordersAdmin, users },
  } = useValue();
  const [data, setData] = useState([]);

  useEffect(() => {
    for (let i = 0; i < months; i++) {
      tempData[i].ordersAdmin = 0;
    }
    ordersAdmin.forEach((room) => {
      for (let i = 0; i < months; i++) {
        if (moment(tempData[i].date).isSame(room?.date, 'month'))
          return tempData[i].ordersAdmin++;
      }
    });
    setData([...tempData]);
  }, [ordersAdmin]);
  return (
    <div style={{ width: '100%', height: 300, minWidth: 250 }}>
        <Typography variant="h6"> Last 5 Months - Orders Placed</Typography>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Area
            type="monotone"
            dataKey="users"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          /> */}
          <Area
            type="monotone"
            dataKey="ordersAdmin"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}