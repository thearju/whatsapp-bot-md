let handler = async (m, { conn, text, usedPrefix, command }) => {
  // Sound
  let name = m.pushName || conn.getName(m.sender);
  var vn = "https://raw.githubusercontent.com/thearju/A17/master/Assets/audio/palak.m4a";
  let url = "https://github.com/thearju/gmx-1.0";
  let murl = "https://youtu.be/DibiLc17dh0?si=xp9bQ-_frEyDB1-i";
  let img = "https://i.postimg.cc/5y3dCjGv/IMG-20231226-WA1008.jpg";
  let con = {
    key: {
      fromMe: false,
      participant: `${m.sender.split`@`[0]}@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: "16504228206@s.whatsapp.net" } : {}),
    },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${
          m.sender.split("@")[0]
        }:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  };
  let doc = {
    audio: {
      url: vn,
    },
    mimetype: "audio/mp4",
    ptt: true,
    waveform: [0, 0, 0, 0, 0, 0, 0],
    fileName: "Arju",

    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: "I m fuckking alive mf",
        body: "Im Greatest of all time",
        thumbnailUrl: img,
        sourceUrl: "https://paypal.me/ArjuSonwani?country.x=IN&locale.x=en_GB",
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  };

  await conn.sendMessage(m.chat, doc, { quoted: con });
};

handler.help = ["alive"];
handler.tags = ["main"];
handler.command = /^(alive)$/i;

export default handler;
