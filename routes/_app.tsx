import { PageProps } from "$fresh/server.ts";

export default ({ Component }: PageProps) => {
  return (
    <html>
      <head>
        <title>RFUI</title>
        <link rel="stylesheet" type="text/css" href="/app.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans"
          rel="stylesheet"
        />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
};
