import { CiBookmark } from "react-icons/ci";

export function Recipe(item){
    <div style={{display:'flex',flexDirection:'column',border:'1px solid black',borderRadius:'20px 20px 0 0'}}>
        <img src={item.img} height={'176px'} width={'273px'} style={{borderRadius:'10px 10px 0 0',objectFit:"contain"}}/>
        <div style={{display:'flex',flexDirection:'column',padding:10}}>
        <div style={{display:'flex'}}>
            <p style={{color:'black',width:'200px',textAlign:'start'}}>{item.name}</p>
            <button style={{borderRadius:100,margin:'0',backgroundColor:'white',border:'1px solid #F44B87FF',color:'#F44B87FF'}}><CiBookmark /></button>
        </div>
        <p style={{lineHeight:'40px',color:'#F44B87FF',backgroundColor:'#FBC8DAFF',width:'40%',borderRadius:30}}>{item.time}</p>
        </div>
    </div>
} 