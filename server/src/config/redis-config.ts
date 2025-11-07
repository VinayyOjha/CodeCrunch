import { createClient } from "redis";

const redisClient = createClient({
    url:process.env.REDIS_URL || "redis://localhost:6379",
});

redisClient.on("connect", () => { console.log("*****************(-REDIS Connected-)******************")})
redisClient.on("error", (error) => { console.error("***Redis Error***", error)});

( async () => {
    await redisClient.connect();
})();

export default redisClient;