export async function onRequest(context) {
  const userAgent = context.request.headers.get('User-Agent') || '';

  if (/facebookexternalhit|Facebot|meta-externalagent/i.test(userAgent)) {
    return Response.redirect('https://www.airbridge.io/en', 302);
  }

  return context.next();
}
