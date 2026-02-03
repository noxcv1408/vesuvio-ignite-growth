import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface AuditRequest {
  name: string;
  email: string;
  company?: string;
  website?: string;
  goals: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, website, goals }: AuditRequest = await req.json();

    // Validate required fields
    if (!name || !email || !goals) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: name, email, goals" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (!resendApiKey) {
      console.error("RESEND_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const resend = new Resend(resendApiKey);

    // Build email content
    const emailContent = `
Nuova Richiesta di Audit Gratuito
==================================

Nome: ${name}
Email: ${email}
${company ? `Azienda: ${company}` : ""}
${website ? `Sito Web: ${website}` : ""}

Obiettivi e Sfide:
${goals}

--
Inviato dal form di Vesuvio Digital
    `.trim();

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Vesuvio Digital <onboarding@resend.dev>",
      to: ["info@vesuviodigital.com"],
      subject: `🔥 Nuova Richiesta Audit - ${name}`,
      text: emailContent,
      reply_to: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(
        JSON.stringify({ error: error.message || "Failed to send email" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Audit request email sent successfully:", { name, email, id: data?.id });

    return new Response(
      JSON.stringify({ success: true, message: "Audit request sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error sending audit request:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to send audit request" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
