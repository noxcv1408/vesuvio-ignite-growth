import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

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

    const smtpUser = Deno.env.get("SMTP_USER");
    const smtpPass = Deno.env.get("SMTP_PASS");

    if (!smtpUser || !smtpPass) {
      console.error("SMTP credentials not configured");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Create SMTP client for Zoho
    const client = new SMTPClient({
      connection: {
        hostname: "smtp.zoho.com",
        port: 587,
        tls: true,
        auth: {
          username: smtpUser,
          password: smtpPass,
        },
      },
    });

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

    // Send email
    await client.send({
      from: smtpUser,
      to: "info@vesuviodigital.com",
      subject: `🔥 Nuova Richiesta Audit - ${name}`,
      content: emailContent,
      replyTo: email,
    });

    await client.close();

    console.log("Audit request email sent successfully:", { name, email });

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
