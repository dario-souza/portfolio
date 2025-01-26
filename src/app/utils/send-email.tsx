

const sendEmail = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  const response = await fetch("/api/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export default sendEmail;