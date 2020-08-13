import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import "./index.scss";
import MenuData from "./menu-data.json";

const ItemList = () => {
const { Meta } = Card;
    useEffect(() => {
     console.log(MenuData)
    }, []);

    const gotToDetail=(data)=>{
       localStorage.setItem("itemData", JSON.stringify(data))
    }

  return (
    <>
      <div className="item-container">
        {MenuData.map((data, key) => {
          return (
            <Link onClick={(e)=>gotToDetail(data)} 
            className="item" key={key} to={{ pathname: `/items/${data.name}` }}>
            <Card
              style={{ width: 300 }}
              cover={<img alt="example" src={data.imageUrl} />}
            >
              <Meta title={data.name} description={data.description} />
            </Card>
              </Link>
           
          );
        })}
      </div>
    </>
  );
};

export default ItemList;
