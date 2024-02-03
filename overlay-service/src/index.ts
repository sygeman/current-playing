import { Elysia, t } from "elysia";
import { cors } from "@elysiajs/cors";
import { staticPlugin } from "@elysiajs/static";

type Data = {
  artist: string;
  title: string;
  imageUrl: string;
};

let id: string | null = null;
let data: Data | null = null;

const app = new Elysia()
  .use(cors({ origin: true }))
  .get("/", () => Bun.file("public/index.html"))
  .use(staticPlugin())
  .post(
    "/",
    ({ body }) => {
      console.log('New data', body)

      if (
        (body.data === null && data === null) ||
        (body.data.artist === data?.artist &&
          body.data.title === data?.title &&
          body.data.imageUrl === data?.imageUrl)
      )
        return;

      if (body.data === null && data !== null) {
        data = null;
        id = crypto.randomUUID();
        return;
      }

      data = body.data;
      id = crypto.randomUUID();
    },
    {
      body: t.Object({
        data: t.Object({
          artist: t.String(),
          title: t.String(),
          imageUrl: t.String(),
        }),
      }),
    }
  )
  .get("/data", () => ({ data, id }))
  .listen(5644);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
