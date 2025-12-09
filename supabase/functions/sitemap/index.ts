import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Service and location configurations (mirrored from frontend)
const SERVICES = [
  {
    slug: "blocked-drains",
    subServices: [
      { slug: "kitchen-drains" },
      { slug: "bathroom-drains" },
      { slug: "outside-drains" },
      { slug: "main-sewer-line" },
    ],
  },
  {
    slug: "drain-unblocking",
    subServices: [
      { slug: "toilet-unblocking" },
      { slug: "sink-unblocking" },
      { slug: "shower-unblocking" },
      { slug: "bath-unblocking" },
    ],
  },
  {
    slug: "cctv-surveys",
    subServices: [
      { slug: "pre-purchase-surveys" },
      { slug: "drain-mapping" },
      { slug: "structural-surveys" },
    ],
  },
  {
    slug: "drain-jetting",
    subServices: [
      { slug: "high-pressure-jetting" },
      { slug: "root-removal" },
      { slug: "grease-removal" },
    ],
  },
  {
    slug: "emergency-drains",
    subServices: [
      { slug: "flooding" },
      { slug: "sewage-backup" },
      { slug: "collapsed-drains" },
    ],
  },
];

const LOCATIONS = [
  { slug: "swindon" },
  { slug: "old-town" },
  { slug: "wroughton" },
  { slug: "highworth" },
  { slug: "cricklade" },
  { slug: "wootton-bassett" },
  { slug: "marlborough" },
  { slug: "purton" },
  { slug: "chiseldon" },
  { slug: "blunsdon" },
  { slug: "stratton" },
  { slug: "haydon-wick" },
  { slug: "north-swindon" },
  { slug: "west-swindon" },
  { slug: "east-swindon" },
  { slug: "south-swindon" },
  { slug: "old-walcot" },
  { slug: "rodbourne" },
  { slug: "gorse-hill" },
  { slug: "pinehurst" },
  { slug: "penhill" },
  { slug: "moredon" },
  { slug: "covingham" },
  { slug: "nythe" },
  { slug: "eldene" },
  { slug: "liden" },
  { slug: "lawn" },
  { slug: "walcot" },
  { slug: "park-north" },
  { slug: "park-south" },
  { slug: "upper-stratton" },
  { slug: "lower-stratton" },
  { slug: "kingsdown" },
  { slug: "pembroke-park" },
  { slug: "abbey-meads" },
  { slug: "oakhurst" },
  { slug: "priory-vale" },
  { slug: "tadpole-garden-village" },
  { slug: "stanton-fitzwarren" },
  { slug: "south-marston" },
  { slug: "sevenhampton" },
  { slug: "broad-blunsdon" },
  { slug: "wanborough" },
  { slug: "liddington" },
  { slug: "badbury" },
  { slug: "coate" },
  { slug: "broome-manor" },
  { slug: "hodson" },
  { slug: "draycot-foliat" },
  { slug: "ogbourne-st-george" },
  { slug: "ogbourne-st-andrew" },
];

const BASE_URL = "https://swindonblockeddrains.co.uk";

function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}

function generateUrlEntry(
  loc: string,
  priority: string,
  changefreq: string,
  lastmod?: string
): string {
  return `  <url>
    <loc>${BASE_URL}${loc}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Generating dynamic sitemap...");

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Fetch blog posts
    const { data: blogPosts, error } = await supabase
      .from("blog_posts")
      .select("slug, updated_at")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching blog posts:", error);
    }

    const today = formatDate(new Date());
    const urls: string[] = [];

    // Static pages
    const staticPages = [
      { url: "/", priority: "1.0", changefreq: "weekly" },
      { url: "/services", priority: "0.9", changefreq: "weekly" },
      { url: "/locations", priority: "0.9", changefreq: "weekly" },
      { url: "/about", priority: "0.7", changefreq: "monthly" },
      { url: "/contact", priority: "0.8", changefreq: "monthly" },
      { url: "/faq", priority: "0.6", changefreq: "monthly" },
      { url: "/blog", priority: "0.7", changefreq: "daily" },
      { url: "/sitemap", priority: "0.5", changefreq: "weekly" },
      { url: "/privacy", priority: "0.3", changefreq: "yearly" },
      { url: "/terms", priority: "0.3", changefreq: "yearly" },
      { url: "/cookies", priority: "0.3", changefreq: "yearly" },
    ];

    for (const page of staticPages) {
      urls.push(generateUrlEntry(page.url, page.priority, page.changefreq, today));
    }

    // Service pages
    for (const service of SERVICES) {
      urls.push(generateUrlEntry(`/services/${service.slug}`, "0.8", "weekly", today));

      // Sub-service pages
      for (const sub of service.subServices || []) {
        urls.push(
          generateUrlEntry(`/services/${service.slug}/${sub.slug}`, "0.7", "weekly", today)
        );
      }
    }

    // Location pages
    for (const location of LOCATIONS) {
      urls.push(generateUrlEntry(`/location/${location.slug}`, "0.8", "weekly", today));

      // Service-in-location pages
      for (const service of SERVICES) {
        urls.push(
          generateUrlEntry(
            `/location/${location.slug}/${service.slug}`,
            "0.7",
            "weekly",
            today
          )
        );

        // Sub-service-in-location pages
        for (const sub of service.subServices || []) {
          urls.push(
            generateUrlEntry(
              `/location/${location.slug}/${service.slug}/${sub.slug}`,
              "0.6",
              "weekly",
              today
            )
          );
        }
      }
    }

    // Blog posts
    if (blogPosts && blogPosts.length > 0) {
      for (const post of blogPosts) {
        const lastmod = post.updated_at
          ? formatDate(new Date(post.updated_at))
          : today;
        urls.push(generateUrlEntry(`/blog/${post.slug}`, "0.6", "monthly", lastmod));
      }
    }

    console.log(`Generated sitemap with ${urls.length} URLs`);

    // Generate XML
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

    return new Response(xml, {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600", // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new Response("Error generating sitemap", {
      status: 500,
      headers: corsHeaders,
    });
  }
});
