// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  console.log(req.query.id, 123);
  const hash = {
    jiaran: 672328094,
    xiaoyueliang: 9310983,
    azi: 7706705,
    nanami: 434334701,
  };
  const r = await fetch(
    `https://api.bilibili.com/x/space/acc/info?mid=${
      hash[req.query.id]
    }&jsonp=jsonp`
  );

  const data = await r.json();

  res.status(200).json(data.data.live_room.liveStatus);
}
