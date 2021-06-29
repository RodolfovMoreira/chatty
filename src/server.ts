import express from "express";

const app = express();

/**
 * GET    -> Searches
 * POST   -> Creation
 * PUT    -> Modifications
 * DELETE -> Remove
 * PATCH  -> Modifying specific informations (change client password)
 */

app.get("/", (request, response) => {
  return response.json({
    message: "Olá NLW 05!",
  });
});

app.post("/", (request, response) => {
  return response.json({
    message: "Usuário salvo com sucesso!"
  });
});

app.listen(3333, () => console.log("Server is running on port 3333"));

