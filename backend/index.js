
import express from "express";
import cors from "cors";
import Parser from "rss-parser";

const app = express();
const port = process.env.PORT || 4000;
const parser = new Parser();

app.use(cors());

app.get("/api/blog", async (req, res) => {
  try {
    const feed = await parser.parseURL("https://blog.naver.com/hanbada100/rss");
    const posts = feed.items.slice(0, 3).map((item) => ({
      title: item.title,
      link: item.link,
      guid: item.guid
    }));
    res.json(posts);
  } catch (error) {
    console.error("블로그 RSS 파싱 오류:", error);
    res.status(500).json({ error: "블로그 불러오기 실패" });
  }
});

app.get("/", (req, res) => {
  res.send("Horangifence API 서버 작동 중입니다.");
});

app.listen(port, () => {
  console.log(`✅ 호랭이 휀스 API 서버 실행 중: http://localhost:${port}`);
});
