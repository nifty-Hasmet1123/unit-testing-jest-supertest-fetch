import express from "express";

const app = express();
const baseUrl = "https://jsonplaceholder.typicode.com/";
const port = 8002;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", async (req, res) => {
    const response = await fetch(baseUrl + "/posts/1");
    const data = await response.json();

    if (data?.title) {
        res.status(200).json({ title: data?.title });
    } else {
        res.status(400).json({ error: "no title" });
    };
})

export {
    app,
    port
}