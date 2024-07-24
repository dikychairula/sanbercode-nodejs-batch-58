import express from "express";
import router from "./route";

const app = express();
app.use("/", router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
