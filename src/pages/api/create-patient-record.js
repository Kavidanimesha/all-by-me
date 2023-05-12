export default async function handler(req, res) {
  console.log('Helloooo');

  console.log(req.body);

  const response = await fetch("http://localhost:5050/records", {
    method: "POST",
    headers: {
      "Access-Control-Allow-Credentials": "*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
    },
    body: req.body,
  });

  const jsonRes = response.json();

  console.log(jsonRes.then((res) => {
    console.log(res);
  }));

  res.status(200).json({ response: jsonRes });
}
