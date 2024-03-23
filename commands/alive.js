/**
========================================================

██████╗░░█████╗░██████╗░██╗░░██╗
██╔══██╗██╔══██╗██╔══██╗██║░██╔╝
██║░░██║███████║██████╔╝█████═╝░
██║░░██║██╔══██║██╔══██╗██╔═██╗░
██████╔╝██║░░██║██║░░██║██║░╚██╗
╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝

░██████╗██╗░░██╗░█████╗░███╗░░██╗
██╔════╝██║░░██║██╔══██╗████╗░██║
╚█████╗░███████║███████║██╔██╗██║
░╚═══██╗██╔══██║██╔══██║██║╚████║
██████╔╝██║░░██║██║░░██║██║░╚███║
╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝

███╗░░░███╗██████╗░
████╗░████║██╔══██╗
██╔████╔██║██║░░██║
██║╚██╔╝██║██║░░██║
██║░╚═╝░██║██████╔╝
╚═╝░░░░░╚═╝╚═════╝░
========================================================
 Copyright (C) 2022.                                                                                        
 Licensed under the  GPL-3.0 License;                                                      
 You may not use this file except in compliance with the License.    
 It is supplied in the hope that it may be useful                                     
 * @project_name : DARK SHAN MD                                                                    
 * @author : kushansewmina1234 <https://github.com/kushansewmina1234>   
 * @description : DARK SHAN MD ,A Multi-functional whatsapp bot.       
 * @version 0.0.1                                                                                             
 ========================================================
 **/

 var alivemessage = `*HELLO IM 𝐶𝑌𝐵𝛯𝑅 𝑇𝛨𝛯𝛯𝛫𝑆𝛨𝛥𝛮𝛥 𝛭𝐷*
 
_IM MULTI DEVICE WHATSAPP BOT_ 

_If any query : wa.me/94764234673

@🅲🆈🅱🅴🆁 🆇 🆃🅷🅴🅴🅺🅷🅰🅽🅰✿:.
　　　__
　　 / )))　　 _
　 ／ イ　　　((( ＼
　(　 ﾉ　　　　￣Ｙ＼
　|　(＼ ∧＿∧　｜　)
　ヽ　ヽ`(´^ㅅ^)_／ノ/
　　＼ |　⌒Ｙ⌒　/ /
　　 ＼ヽ　 |　 ﾉ ／
　　　＼ ﾄー仝ーｲ /
　　　 ｜ ミ土彡 ｜


*_Update Alive Message by adding text with Alive_*
*Eg: _.alive Your_Alive_Message_*`;
  





 const { tlang, ffmpeg,cmd ,alive,botpic} = require('../lib')

 cmd({
    pattern: "alive",
    category: "general",
    filename: __filename,
    desc: "is bot alive??"
},
async(Suhail, msg, text, {isCreator}) => {
  let get = text;
let urll = 'https://telegra.ph/file/2b185f6501a5198d9e55b.mp4';     
  let image = false;
  let video = true;
  
if(isCreator && text){
let aliv = await alive.findOne({ id:"Suhail_Md" }) || await new alive({ id:"Suhail_Md"}).save();
if (text.startsWith("get")) return msg.reply(aliv.get);

const linkPattern = /(https?:\/\/\S+)/gi;
const imageExtensions = ['.jpg', '.jpeg', '.png'];
const videoExtensions = ['.mp4', '.avi', '.mov', '.mkv', '.gif'];
let match = text.match(linkPattern) || false ; 
if(match)
{
    let i = 0;
    while (i < match.length && !image && !video ) 
    {
          urll = match[i];
          const extension = urll.substring(urll.lastIndexOf('.')).toLowerCase();
          if (imageExtensions.includes(extension)) { image = true;  video = false; } 
          else if (videoExtensions.includes(extension)) { video = true; image = false; }
          else { console.log(`Unknown link: ${urll}`)  }
          i++;
    }
}
if( video || image) { text = text.replace(urll, ''); }
await alive.updateOne({ id: 'Suhail_Md' }, { text: text, get : get, url: urll,  image: image,   video: video });
}
let aliv = await alive.findOne({ id:"Suhail_Md" }) || await new alive({ id:"Suhail_Md"}).save() ; 


alivemessage = aliv.text || "";
 

  image = aliv.image || false;
  video=aliv.video || false ;
  urll = aliv.url || await botpic() ;

  

const messageOptions = image ? { image: { url: urll }, caption: alivemessage } : video? { video: { url: urll },gifPlayback: true, caption: alivemessage } : {  text: alivemessage }

Suhail.sendMessage(msg.chat, messageOptions,{quoted : msg });
}
)

