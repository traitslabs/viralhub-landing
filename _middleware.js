export async function onRequest(context) {
  const userAgent = context.request.headers.get('User-Agent') || '';

  // Facebook bots detect
  if (/facebookexternalhit|Facebot|meta-externalagent/i.test(userAgent)) {
    return Response.redirect('https://www.airbridge.io/en', 302);
  }

  // Real users ke liye normal page
  return context.next();
}