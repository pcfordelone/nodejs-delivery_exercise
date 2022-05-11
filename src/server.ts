import { app } from "./app";

const port: string | 3000 = process.env.PORT || 3000;

app.listen(port, () => {
  `Server running on port ${port} 🤟🏻🤟🏻🤟🏻`;
});
