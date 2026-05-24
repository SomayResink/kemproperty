export default async function handler(req, res) {

  const BOT_TOKEN = process.env.BOT_TOKEN;
  const CHAT_ID = process.env.CHAT_ID;

  if(req.method !== "POST"){
    return res.status(405).json({
      message:"Method not allowed"
    });
  }

  const { nama, email, wa } = req.body;

  const text = `
🏠 LEADS BARU

👤 Nama: ${nama}
📧 Email: ${email}
📱 WA: ${wa}
`;

  try {

    await fetch(
      `https://api.telegram.org/bot${'8795325571:AAH-OvLezSfS_M3_s8MlqBNtuCIzjyjVPRc'}/sendMessage`,
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          chat_id: CHAT_ID,
          text:text
        })
      }
    );

    return res.status(200).json({
      message:"Berhasil dikirim"
    });

  } catch(err){

    return res.status(500).json({
      message:"Error server"
    });

  }
}