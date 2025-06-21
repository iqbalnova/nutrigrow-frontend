export function openWhatsApp({
  phone,
  message,
}: {
  phone: string;
  message: string;
}) {
  const encodedMessage = encodeURIComponent(message);
  if (typeof window !== "undefined") {
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
  }
}
