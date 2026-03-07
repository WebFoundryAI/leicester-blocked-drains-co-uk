// Cloudflare Pages Function – postcode lookup via Ideal Postcodes API
// Royal Mail PAF licensed data | https://ideal-postcodes.co.uk
//
// Set IDEAL_POSTCODES_API_KEY in Cloudflare Pages dashboard:
//   Settings > Environment variables
//
// Sign up at https://ideal-postcodes.co.uk (~2p per lookup) for a production key.

const postcodeRegex = /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i;

export const onRequestGet = async (context: any) => {
  const url = new URL(context.request.url);
  const postcode = (url.searchParams.get('postcode') || '').trim();

  if (!postcode || !postcodeRegex.test(postcode)) {
    return Response.json({ error: 'Enter a valid UK postcode.' }, { status: 400 });
  }

  const apiKey = (context.env?.IDEAL_POSTCODES_API_KEY as string | undefined);
  if (!apiKey) {
    return Response.json(
      { error: 'Address lookup is not configured. Please enter your address manually.' },
      { status: 503 },
    );
  }
  const cleanPostcode = postcode.replace(/\s/g, '');

  try {
    const response = await fetch(
      `https://api.ideal-postcodes.co.uk/v1/postcodes/${encodeURIComponent(cleanPostcode)}?api_key=${encodeURIComponent(apiKey)}`
    );
    const payload = await response.json() as any;

    // Ideal Postcodes uses code 2000 for success, 4040 for not found,
    // 4010 for invalid/exhausted key, 4020 for limit reached
    if (payload.code === 4040) {
      return Response.json({ error: 'No addresses found for this postcode.' }, { status: 404 });
    }

    if (payload.code === 4010 || payload.code === 4020) {
      return Response.json(
        { error: 'Postcode lookup limit reached. Please enter your address manually.' },
        { status: 429 },
      );
    }

    if (!Array.isArray(payload.result) || !payload.result.length) {
      return Response.json(
        { error: payload.message || 'No addresses found for this postcode.' },
        { status: 404 },
      );
    }

    const addresses = payload.result.map((addr: any) => {
      const line = [addr.line_1, addr.line_2, addr.line_3, addr.post_town, addr.postcode]
        .filter(Boolean)
        .join(', ');
      return { line };
    });

    return Response.json({ addresses });
  } catch (err: any) {
    return Response.json(
      { error: 'Address lookup temporarily unavailable. Please enter your address manually.' },
      { status: 502 },
    );
  }
};
