import { useState } from "react";
import Header from "./Components/Header/Header";
import axios from "axios";


function App() {
  document.body.style.margin = '0';
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");

  const getImages = async () => {
    const res = await axios.get(`https://images-api.nasa.gov/search?q=${search}&media_type=image`);
    console.log(res.data.collection.items);
    setImages(res.data.collection.items);
  };

  return (
    <div style={{width:"100vw", height:"100vh", overflow:"hidden", display:"flex", flexDirection:"column"}} className="App">
      <Header/>
      <div style={{height:"78px", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <input onChange={(e)=>{
          setSearch(e.target.value);
        }} onKeyDown={(e)=>{
          if(e.keyCode === 13){
            getImages();
            console.log(e.target.value);
            e.target.value = "";
          }

        }} type="text" placeholder="Search" style={{width:"500px", height:"50px", outline:"none", fontSize:"20px", padding:"0 20px", border:"solid 1px"}}/>
      </div>
      <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", alignItems:"center", overflow:"scroll", height:"calc(100vh - 157px)"}}>
        {
          images.length > 0 && images.map((image, index) => {
            return (
              <div key={index} style={{width:"300px", margin:"10px"}}>
                <img src={image.links[0].href} alt="" style={{width:"100%", height:"100%"}}/>
              </div>
            )
          }
          )
        }
      </div>
    </div>
  );
}

export default App;
