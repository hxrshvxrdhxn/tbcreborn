const url = "https://script.google.com/macros/s/AKfycbx8cdSBMsA8aoXlwlucT7cXVAOyJ_jbqiFrTdTvuxHZUUh_Rw3QIiC1EFvZe7Dx4y8b/exec";

async function testWebhook() {
  try {
    console.log("Sending test alert to Google Apps Script...");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "emailAlert",
        subject: "TEST: TBC Alert System Active",
        message: "This is a test message to confirm your Google Apps Script email alert system is successfully configured and active."
      }),
    });
    
    const text = await response.text();
    console.log("Response:", text);
  } catch (error) {
    console.error("Error:", error);
  }
}

testWebhook();
