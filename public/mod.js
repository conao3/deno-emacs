function handleRequest(request) {
  const { pathname } = new URL(request.url);

    /* if (pathname.startsWith("/html")) {
     *   const html = `<html>
     *     <p><b>Message:</b> Hello from Deno Deploy.</p>
     *     </html>`;

     *   return new Response(html, {
     *     headers: {
     *       // The interpretation of the body of the response by the client depends
     *       // on the 'content-type' header.
     *       // The "text/html" part implies to the client that the content is HTML
     *       // and the "charset=UTF-8" part implies to the client that the content
     *       // is encoded using UTF-8.
     *       "content-type": "text/html; charset=UTF-8",
     *     },
     *   });
     * } */

    /* if (pathname.startsWith("/json")) {
     *   // Use stringify function to convert javascript object to JSON string.
     *   const json = JSON.stringify({
     *     message: "Hello from Deno Deploy",
     *   });

     *   return new Response(json, {
     *     headers: {
     *       "content-type": "application/json; charset=UTF-8",
     *     },
     *   });
     * }
     */

  return new Response(
    `<body
      align="center"
      style="font-family: Avenir, Helvetica, Arial, sans-serif; font-size: 1.5rem;"
     >
     <p>There're no contents.</p>
     <p>If you have a any idea to use this URL, please contact me using <a href="https://github.com/conao3/deno-emacs">conao3/deno-emacs</a> issue board.</p>
    </body>`,
      {
          headers: {
        "content-type": "text/html; charset=UTF-8",
      },
    },
  );
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
