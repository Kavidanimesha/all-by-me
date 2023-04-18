export default async function handler(req, res) {

  if (req.method === "POST") {
    // Create
     const response = await fetch("http://localhost:5050/drug", {
            method: "POST",
            headers: {
              "Access-Control-Allow-Credentials": "*",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods":
                "GET,OPTIONS,PATCH,DELETE,POST,PUT",
            },
            body: req.body,
          });
          const drugs = await response.json()
    res.status(200).json({ drug: drugs })
  } 
  
  // else if (req.method === "PATCH") {
  //   // Update

  //   const response = await fetch("http://localhost:5050/drug/a234q45bq43bk", {
  //           method: "PUT",
  //           headers: {
  //             "Access-Control-Allow-Credentials": "*",
  //             "Content-Type": "application/json",
  //             "Access-Control-Allow-Origin": "*",
  //             "Access-Control-Allow-Methods":
  //               "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  //           },
  //           body: req.body,
  //         });
  //         const drugs = await response.json()
  //   res.status(200).json({ drug: drugs })
  // } else if (req.method === "DELETE") {
  //   // Need to delete
  // }

   
  }