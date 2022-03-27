export const loader = () => {
  // handle "GET" request
  // separating xml content from Response to keep clean code.
  const content = `
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://www.bolt-ux.com/plan</loc>
    </url>
    <url>
      <loc>https://www.bolt-ux.com/contact</loc>
    </url>
    <url>
      <loc>https://www.bolt-ux.com/services/branding</loc>
    </url>
    <url>
      <loc>https://www.bolt-ux.com/services/appdesign</loc>
    </url>
    <url>
      <loc>https://www.bolt-ux.com/services/publishing</loc>
    </url>
    <url>
      <loc>https://www.bolt-ux.com/services/singlepage</loc>
    </url>
    <url>
      <loc>https://www.bolt-ux.com/services/homepage</loc>
    </url>
    <url>
      <loc>https://www.bolt-ux.com/uiux/bolt-ui</loc>
    </url>
    <url>
      <loc>https://www.bolt-ux.com/design/appdesign-reference</loc>
    </url>
    <url>
      <loc>https://www.bolt-ux.com/dev/remix-run</loc>
    </url>
    <url>
      <loc>https://www.bolt-ux.com/badminton</loc>
    </url>
    <url>
      <loc>https://www.bolt-ux.com/uiux</loc>
    </url>
    <url>
      <loc>https://www.bolt-ux.com/design</loc>
    </url>
    <url>
      <loc>https://www.bolt-ux.com/news</loc>
    </url>
    <url>
      <loc>https://www.bolt-ux.com/notices</loc>
    </url>
    <url>
      <loc>https://www.bolt-ux.com/dev</loc>
    </url>
    <url>
      <loc>https://www.bolt-ux.com/posts/bolt-ui</loc>
    </url>
    <url>
      <loc>https://www.bolt-ux.com/posts</loc>
    </url>
    <url>
      <loc>https://www.bolt-ux.com</loc>
    </url>
    </urlset>
    `
  // Return the response with the content, a status 200 message, and the appropriate headers for an XML page
  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'xml-version': '1.0',
      encoding: 'UTF-8',
    },
  })
}
