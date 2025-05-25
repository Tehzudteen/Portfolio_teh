export const EMAIL_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ""
export const EMAIL_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ""
export const EMAIL_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""

/**
 * Optional: You can add a function to validate the config
 */
export function isEmailConfigValid() {
  return EMAIL_SERVICE_ID && EMAIL_TEMPLATE_ID && EMAIL_PUBLIC_KEY
}
