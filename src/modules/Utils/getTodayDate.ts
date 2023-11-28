export default function getTodayDate(): string {
  const today = new Date();

  // Get day, month, and year
  const day = today.getDate().toString().padStart(2, '0');
  const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Note: Months are zero-based
  const year = today.getFullYear();

  // Combine into dd-mm-yyyy format
  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
}