

const sendEmail = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  await fetch("/api/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export default sendEmail;