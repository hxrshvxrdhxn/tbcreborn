/**
 * TBC Contact Form → Google Sheets
 * ─────────────────────────────────
 * SETUP (do this once):
 *
 * 1. Go to https://sheets.google.com and create a new spreadsheet.
 *    Name it "TBC Leads" (or anything you like).
 *
 * 2. Copy the spreadsheet ID from the URL:
 *    https://docs.google.com/spreadsheets/d/<<THIS_PART>>/edit
 *    Paste it into the SPREADSHEET_ID constant below.
 *
 * 3. Go to https://script.google.com → New Project
 *    Delete the default code, paste THIS entire file in.
 *
 * 4. Click Deploy → New Deployment
 *    - Type: Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    Click Deploy and copy the Web App URL.
 *
 * 5. Paste the Web App URL into your .env.local:
 *    GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_ID/exec
 *
 * That's it. Every contact form submission will appear as a new row.
 */

const SPREADSHEET_ID = "YOUR_SPREADSHEET_ID_HERE"; // ← paste yours here
const SHEET_NAME = "Leads";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);

    // Create sheet with headers if it doesn't exist yet
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow([
        "Timestamp",
        "Name",
        "Company",
        "Email",
        "Phone",
        "Service",
        "Budget",
        "Message",
        "Status",
      ]);
      // Bold the header row
      sheet.getRange(1, 1, 1, 9).setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    // Append the lead
    sheet.appendRow([
      new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.name || "",
      data.company || "",
      data.email || "",
      data.phone || "",
      data.service || "",
      data.budget || "",
      data.message || "",
      "New", // default status
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ success: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test this manually in the Apps Script editor — run from the editor, not called by the app
// eslint-disable-next-line no-unused-vars
function testPost() {
  doPost({
    postData: {
      contents: JSON.stringify({
        name: "Test User",
        company: "Test Co",
        email: "test@example.com",
        phone: "+91 98765 43210",
        service: "Custom LLM & AI",
        budget: "₹2,00,000–₹5,00,000",
        message: "This is a test submission.",
      }),
    },
  });
}
