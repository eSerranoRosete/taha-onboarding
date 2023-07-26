import { Form } from "./Form";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const user = await getData(params.id);

  if (!user) return <>User not found</>;

  return <Form user={user} />;
}

async function getData(id: string) {
  const user = users.find((u) => u.id === id);
  return user;
}

const users = [
  {
    id: "JF95zMhzULliXJq56NEH",
    displayName: "Alejandra",
    imgSrc:
      "https://payloadcms-inteminer.s3.us-east-2.amazonaws.com/images/PHOTO-2023-07-24-21-29-58.jpg",
  },
];
