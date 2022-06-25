import React, { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import axios from "axios";
import moment from "moment";

// parent Card

const Card2 = (props) => {
  const [expanded, setExpanded] = useState(false);
const [time, setTime] = useState([]);



    const fetchData = async () => {
        const res = await axios.get('https://smartwaterring.herokuapp.com/sensors')
        console.log("response", res.data);
        

        const time = [];

        for (let i = 0; i < res.data.length; i++) {
        
          time.unshift(moment(res.data[i].date).format("LT"))
          time.reverse()

    }

        setTime(time);
       


    }

    useEffect(() => {
        fetchData();
},[])






  return (
    <AnimateSharedLayout>
        <ExpandedCard param={props} time={time} setExpanded={() => setExpanded(true)} />
    </AnimateSharedLayout>
  );
};




// Expanded Card
function ExpandedCard({ param, setExpanded ,time}) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        categories:time,
      },
    },
  };

  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
        <span>{param.title}</span>
      <div className="chartContainer">
        <Chart options={data.options} series={param.series} type="area" />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
}

export default Card2;