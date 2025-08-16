# EmailJS Setup Guide

This guide will help you set up EmailJS to receive contact form messages at `kdurgaeswarcse@gmail.com`.

## 🚀 Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 📧 Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your email account (`kdurgaeswarcse@gmail.com`)
5. Copy the **Service ID** (starts with `service_`)

## 📝 Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

```html
Subject: New Contact Form Message from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

---
This message was sent from your portfolio contact form.
Reply directly to: {{reply_to}}
```

4. Save the template and copy the **Template ID** (starts with `template_`)

## 🔑 Step 4: Get Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## ⚙️ Step 5: Configure Environment Variables

Create a `.env` file in your project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual IDs and keys.

## ✅ Step 6: Test the Form

1. Restart your development server
2. Fill out the contact form
3. Submit the form
4. Check your email (`kdurgaeswarcse@gmail.com`) for the message

## 🎯 What Happens Now

- When someone submits the contact form, you'll receive an email
- The email will include their name, email, and message
- You can reply directly to their email address
- All messages go to your specified email: `kdurgaeswarcse@gmail.com`

## 🔒 Security Notes

- The public key is safe to expose in frontend code
- EmailJS handles the email sending securely
- No sensitive credentials are stored in your code

## 🆘 Troubleshooting

- Make sure all environment variables are set correctly
- Check the browser console for any error messages
- Verify your EmailJS service is connected and active
- Ensure your email template variables match the code

## 💰 Pricing

- EmailJS free tier: 200 emails/month
- Paid plans start at $15/month for more emails
- Perfect for portfolio contact forms!
