/**
 * GET /api/geo — devuelve país y ciudad aproximados según Cloudflare.
 * No guarda nada.
 */

interface GeoRequest extends Request {
  cf?: { country?: string; city?: string };
}

interface GeoContext {
  request: GeoRequest;
}

export const onRequest = async ({ request }: GeoContext): Promise<Response> => {
  if (request.method !== "GET") {
    return new Response(JSON.stringify({ error: "method_not_allowed" }), {
      status: 405,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store",
        Allow: "GET",
      },
    });
  }

  return new Response(
    JSON.stringify({
      country: request.cf?.country ?? null,
      city: request.cf?.city ?? null,
    }),
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store",
      },
    },
  );
};
