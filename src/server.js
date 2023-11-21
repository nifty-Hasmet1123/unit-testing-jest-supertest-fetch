import { app, port } from "./app.js";

app.listen(port || 8002, () => {
    console.log(`Server started at: http://localhost:${port}`);
})