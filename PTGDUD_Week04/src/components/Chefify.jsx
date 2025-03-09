import chefify from "../assets/chefify.png";
import avatar from "../assets/avatar.png";
import list from '../assets/list_filter.png';
import slider from '../assets/slider.png'
import rating5 from '../assets/rating_5.png'
import rating4 from '../assets/rating_4.png'
import rating3 from '../assets/rating_3.png'
import rating2 from '../assets/rating_2.png'
import rating1 from '../assets/rating_1.png'
import nothing from '../assets/nothing.png'
import chefifywhite from '../assets/chefifywhite.png'
import { CiBookmark } from "react-icons/ci";
import { MdNavigateNext } from "react-icons/md";
import { RiShareForwardLine } from "react-icons/ri";
import { useEffect, useState } from "react";

function Chefify() {
  const style={
    JustifyCenter:{
      display:'flex',
      justifyContent:"space-around",
      alignItems:"space-around"
    }
  }

  const [recipeList,setRecipeList]=useState([])
  
  useEffect(()=>{
    fetch('https://67cd4770dd7651e464ede9b0.mockapi.io/Recipes')
        .then(res=>res.json())
        .then(data=>{
            console.log('data',data)
            setRecipeList(data)
            console.log('list:',recipeList)
        })
  },[])

    return (
      <div style={{
          display: 'grid',
          gridTemplateAreas: `
            "Header"
            "Content"
            "Footer"`,
          gridTemplateColumns: '2fr',
            gridTemplateRows: '1fr 15fr 4fr',
          gridGap:0,
          width: '1440px',
          height:'953px'
      }}>
          <div className="Header" style={{ backgroundColor: 'white', gridArea: 'Header',display:'flex',justifyContent:"center",alignItems:"center",border:'3px solid gray',padding:'10px 30px'}}>
              <div style={{display:'flex',flex:4}}>
                <img src={chefify} alt=""/>
                <input type="text" placeholder="cakescasca" style={{backgroundColor:'#F3F4F6FF',borderRadius:15,border:0,marginLeft:'20px',width:'100%',paddingLeft:20}}/>
              </div>
              <div style={{flex:4, justifyContent:"space-around", display:"flex"}}>
                <a href="#" style={{color:'#565E6CFF',fontSize:15}}>What to cook</a>
                <a href="#" style={{color:'#565E6CFF',fontSize:15}}>Recipes</a>
                <a href="#" style={{color:'#565E6CFF',fontSize:15}}>Ingredients</a>
                <a href="#" style={{color:'#565E6CFF',fontSize:15}}>Occassions</a>
                <a href="#" style={{color:'#565E6CFF',fontSize:15}}>About us</a>
              </div>
              <div style={{
                display:'flex',
                justifyContent:"space-around",
                alignItems:"center",
                flex:2
              }}>
                <button style={{color:'#F44B87FF',backgroundColor:'#FEF0F5FF'}}>Your Recipe Box</button>
                <img src={avatar} alt=""/>
              </div>
          </div>
          <div className="Content" style={{gap:30,padding:'30px 100px',gridArea: 'Content',borderRight:'3px solid gray',borderLeft:'3px solid gray',display:"flex",flexDirection:'column' }}>
              <div style={{display:"flex"}}>
                <p style={{color:"black"}}>Home</p>
                <p style={{color:"black", marginInline:10}}><MdNavigateNext size='28px'/></p>
                <p style={{color:"pink"}}>Your Recipe Box</p>
              </div>
              <div>
                <p style={{color:'black',textAlign:"start",fontSize:32,fontWeight:"bold",marginBottom:20}}>Emma Gonzalez's Recipe Box</p>
                <div style={{display:"flex",justifyContent:"start",alignItems:"center"}}>
                    <img width='164px' height='164px' src={avatar}/>
                    <div style={{display:"flex",flexDirection:"column",paddingLeft:40}}>
                        <p style={{color:"#424955FF",textAlign:"start",fontSize:16}}>Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times. She is 
                            also an accomplished author, contributing to numerous cookbooks and food publications.
                            Originally from East Los Angeles, Emma now resides in New York City, where she explores
                             a wide range of culinary delights.</p>
                        <div style={{display:"flex",alignItems:"center",gap:30,marginTop:40}}>
                            <p style={{color:'#F44B87FF'}}>6.5k Subcribes</p>
                            <button style={{backgroundColor:'#F44B87FF',padding:10}}>Share<span><RiShareForwardLine/></span></button>
                        </div>
                    </div>
                </div>
                
              </div>
                <div class="table-item">
                    <div style={{display:'flex',width:'100%',borderBottom:'1px solid #424955FF'}}>
                        <button style={{borderRadius:"20px 20px 0 0",backgroundColor:'#FBC8DAFF',color:'#F44B87FF',fontWeight:"bolder",padding:15}}>Saved Recipes</button>
                        <button style={{borderRadius:"20px 20px 0 0",backgroundColor:'white',color:'#424955FF',fontWeight:"bolder",padding:15}}>Folders</button>
                        <button style={{borderRadius:"20px 20px 0 0",backgroundColor:'white',color:'#424955FF',fontWeight:"bolder",padding:15}}>Recipes by Genevene</button>
                    </div>
                    <div style={{marginTop:40,display:"flex",flexWrap:'wrap'}}>
                        <div style={{display:'flex',flexDirection:'column',border:'1px solid black',borderRadius:'20px 20px 0 0'}}>
                            <img height={'176px'} width={'273px'} style={{borderRadius:'10px 10px 0 0',objectFit:"contain"}}/>
                            <div style={{display:'flex',flexDirection:'column',padding:10}}>
                            <div style={{display:'flex'}}>
                                <p style={{color:'black',width:'200px',textAlign:'start'}}>italian style tomato salad</p>
                                <button style={{borderRadius:100,margin:'0',backgroundColor:'white',border:'1px solid #F44B87FF',color:'#F44B87FF'}}><CiBookmark /></button>
                            </div>
                            <p style={{lineHeight:'40px',color:'#F44B87FF',backgroundColor:'#FBC8DAFF',width:'40%',borderRadius:30}}>15 min</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
          </div>
          <div className="Footer" style={{ backgroundColor: 'black', gridArea: 'Footer',padding:40,display:'flex',justifyContent:"center",borderTopLeftRadius:10,borderTopRightRadius:10}}>
              <div style={{display:'flex',flex:3,flexDirection:'column',alignItems:'start',justifyContent:"space-between"}}>
                <div style={{display:'flex',flex:1,flexDirection:'column',alignItems:'start'}}>
                  <p style={{fontSize:20,fontWeight:"bold",color:'white'}}>About us</p>
                  <p style={{color:"white",textAlign:'start'}}>Welcome to our website, a wonderful place to explore and learn how to cool like a pro</p>
                    <div style={{display:'flex',gap:10,width:'100%'}}>
                      <input type='text' style={{flex:1,border:0,borderRadius:10,backgroundColor:'white',padding:10}} placeholder="Enter your email"/>
                      <button style={{border:0,borderRadius:10, backgroundColor:'#F44B87FF',color:"white"}}>Send</button>
                    </div>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:20}}>
                  <img src={chefifywhite}/>
                  <p style={{color:'white'}}>2021 Chefify Company</p>
                  <a href="#" style={{color:'white'}}>Term of Servical Privacy Policy</a>
                </div>
              </div>
              <div style={{display:'flex',flex:1,flexDirection:'column',justifyContent:"space-between"}}>
                <div style={{display:'flex',flexDirection:'column',alignItems:'start',gap:25}}>
                  <p style={{margin:0,color:'white',fontSize:20,fontWeight:"bold"}}>Learn More</p>
                  <a href='#' style={{color:'white'}}>Our Cooks</a>
                  <a href='#' style={{color:"white"}}>See Our Features</a>
                  <a style={{color:'white'}}>FAQ</a>
                </div>
                <div style={{display:'flex',flexDirection:'column',alignItems:'start',gap:25}}>
                  <p style={{margin:0,color:'white',fontSize:20,fontWeight:"bold"}}>Shop</p>
                  <a href='#' style={{color:'white'}}>Gift Subscription</a>
                  <a href='#' style={{color:"white"}}>Send US Feedback</a>
                </div>
              </div>
              <div style={{display:'flex',flex:1,flexDirection:'column',gap:25,alignItems:"start"}}>
                <p style={{margin:0,fontSize:20,fontWeight:"bold",color:"white"}}>Recipes</p>
                <a href="#" style={{color:'white'}}>What to Cook This Week</a>
                <a href="#" style={{color:'white'}}>Pasta</a>
                <a href="#" style={{color:'white'}}>Dinner</a>
                <a href="#" style={{color:'white'}}>Healthy</a>
                <a href="#" style={{color:'white'}}>Vegetarian</a>
                <a href="#" style={{color:'white'}}>Vegan</a>
                <a href="#" style={{color:'white'}}>Chirtmas</a>
              </div>
          </div>
      </div>
    );
  }
  
  export default Chefify;
  