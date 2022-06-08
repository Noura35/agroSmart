import {
    UilEstate,
    UilTemperature,
    UilTear,
    UilHistory,
    UilCloudSun ,

} from '@iconscout/react-unicons';

export const SidebarData = [
    {
        icon: UilEstate,
        heading:"Acceuil",
    },

 {
        icon: UilTear,
        heading:"Humidité de sol",
    },
 
  {
        icon: UilTemperature,
        heading:"Température de l'air",
    },
  
   {
        icon: UilCloudSun ,
        heading:"Humidité de l'air",
    },
    {
        icon: UilHistory ,
        heading:"Historique de l'arrosage",
    },


]


export const CardsData = [
    {
        title: "Température de l'air",
        color: {
            backGround: "linear-gradient(180deg,#ffda79,#fad390 100%)",
            boxShadow:"0px 10px 20px 0px #f9d598",
        },
        barValue: 60,
        value: "40.270",
        png: UilTemperature,
        series: [
            {
                name: "Température de l'air",
                data:[10,25,15,30,12,20],
            },
        ],

    },
     {
        title: "Humidité de l'air",
        color: {
            backGround: "linear-gradient(180deg,#bb67ff,#c484f3 100%)",
            boxShadow:"0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "25.970",
        png: UilCloudSun,
        series: [
            {
                name: "Humidité de l'air",
                data:[31,40,26,51,42,100,100],
            },
        ],

    },
      {
        title: "Humidité de sol",
        color: {
            backGround: "linear-gradient(180deg,#ff919d,#fc929d 100%)",
            boxShadow:"0px 10px 20px 0px #fdc0c7",
        },
        barValue: 80,
        value: "14.270",
        png: UilTear,
        series: [
            {
                name: "Humidité de sol",
                data:[10,100,50,70,80,30,40],
            },
        ],

    },
      
]