
//  ░██████╗██╗░░░██╗██╗░░██╗░█████╗░░██████╗    ███╗░░░███╗██████╗░    ██╗░░░██╗░█████╗░
//  ██╔════╝██║░░░██║██║░░██║██╔══██╗██╔════╝    ████╗░████║██╔══██╗    ██║░░░██║██╔══██╗
//  ╚█████╗░██║░░░██║███████║███████║╚█████╗░    ██╔████╔██║██║░░██║    ╚██╗░██╔╝╚█████╔╝
//  ░╚═══██╗██║░░░██║██╔══██║██╔══██║░╚═══██╗    ██║╚██╔╝██║██║░░██║    ░╚████╔╝░██╔══██╗
//  ██████╔╝╚██████╔╝██║░░██║██║░░██║██████╔╝    ██║░╚═╝░██║██████╔╝    ░░╚██╔╝░░╚█████╔╝
//  ╚═════╝░░╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░    ╚═╝░░░░░╚═╝╚═════╝░    ░░░╚═╝░░░░╚════╝░

//  ░██╗░░░░░░░██╗██╗░░██╗░█████╗░████████╗░██████╗░█████╗░██████╗░██████╗░    ██████╗░░█████╗░████████╗
//  ░██║░░██╗░░██║██║░░██║██╔══██╗╚══██╔══╝██╔════╝██╔══██╗██╔══██╗██╔══██╗    ██╔══██╗██╔══██╗╚══██╔══╝
//  ░╚██╗████╗██╔╝███████║███████║░░░██║░░░╚█████╗░███████║██████╔╝██████╔╝    ██████╦╝██║░░██║░░░██║░░░
//  ░░████╔═████║░██╔══██║██╔══██║░░░██║░░░░╚═══██╗██╔══██║██╔═══╝░██╔═══╝░    ██╔══██╗██║░░██║░░░██║░░░
//  ░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║░░░██║░░░██████╔╝██║░░██║██║░░░░░██║░░░░░    ██████╦╝╚█████╔╝░░░██║░░░
//  ░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚═════╝░╚═╝░░╚═╝╚═╝░░░░░╚═╝░░░░░    ╚═════╝░░╚════╝░░░░╚═╝░░░



// * Project name - SUHAS- MD 
// * Author - Suhas Pathsindu
// * Team - Suhas Bro 
// * Version - V2

// World best and powerfull whatsapp user bot in Sri lanka
// 🧬©ꜱᴜʜᴀꜱ-ᴍᴅ ʙʏ ꜱᴜᴀʜꜱ ᴘᴀᴛʜꜱɪɴᴅᴜッ







const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "bRM2RSBD#TATOyiIeHV1DI4C8YFtb0ASKuVtHuJwFLXetcRVnfeg", // 📌 𝗚𝗲𝘁 𝗦𝗲𝘀𝘀𝗶𝗼𝗻 𝗶𝗱 𝗶𝗻 𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗣𝗮𝗶𝗿 𝗦𝗶𝘁𝗲 📌
SUDO_NB: process.env.SUDO_NB || "+2349039951951", // 𝗔𝗱𝗱 𝗬𝗼𝘂𝗿 𝗡𝘂𝗺𝗯𝗲𝗿 𝗛𝗲𝗿𝗲 𝗪𝗶𝘁𝗵 𝗖𝗼𝘂𝗻𝘁𝗿𝘆 𝗖𝗼𝗱𝗲
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", // 📌 𝘁𝗿𝘂𝗲 𝗼𝗿 𝗳𝗮𝗹𝘀𝗲 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
MODE: process.env.MODE || "public", // 📌 𝗽𝗿𝗶𝘃𝗮𝘁𝗲 𝗼𝗿 𝗽𝘂𝗯𝗹𝗶𝗰 𝗮𝘀 𝗬𝗼𝘂 𝗟𝗶𝗸𝗲 📌
};
