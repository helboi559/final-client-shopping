// import React, { useCallback, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useValue } from "../../../context/ContextProvider";



const COLORS = ["#00C49F","#0088FE", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function ProductsCostPie() {
    const {state:{products}} = useValue()
    const [costGroup,setCostGroup] = useState([])
    useEffect(() => {
        let lessThan25 = 0; let lessThan50=0; let lessThan100=0; let moreThan100=0;
        products.forEach(product => {
           if(product.price < 25){
               lessThan25++
           }else if(product.price < 50){
                lessThan50++
           }else if(product.price < 100){
                lessThan100++
           }else{
               moreThan100++
           }
        })
        setCostGroup([
            {name:'Less than $25',qty:lessThan25},
            {name:'Between $25 & $50',qty:lessThan50},
            {name:'Between $50 & $100',qty:lessThan100},
            {name:'More than $100',qty:moreThan100}
        ])

    }, [products])
  return (
    <Box
    sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexwrap: "wrap",
    }}
    >
        <PieChart width={200} height={200}>
        <Pie
            data={costGroup}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="qty"
        >
            {costGroup.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
        <Tooltip />
        </PieChart>
        <Stack
        gap={2}
        >
            <Typography variant="h6">Products Cost</Typography>
            <Box
            sx={{display:'flex',gap:3, flexWrap:'wrap'}}
            >
                {COLORS.map((color,index) => (
                    <Stack key={color} alignItems="center" spacing={1}>
                        <Box sx={{width:20,height:20, background: color}}/>
                        <Typography variant="body2" sx={{ opacity: 0.7 }}>{costGroup[index]?.name}</Typography>
                    </Stack>
                ))}

            </Box>

        </Stack>
    </Box>
  );
}