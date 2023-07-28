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
    email: "ale.rosete2@gmail.com",
    imgSrc:
      "https://payloadcms-inteminer.s3.us-east-2.amazonaws.com/images/PHOTO-2023-07-24-21-29-58.jpg",
  },
  {
    id: "G9QSq51YoKZo73TPbvvq",
    displayName: "Jezabel",
    email: "jezabell.grupotaha@gmail.com",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/inteminer-26db4.appspot.com/o/cotizador%2Fgrupo-taha%2FWhatsApp%20Image%202023-07-27%20at%2018.56.05.jpeg?alt=media&token=e20c2ef2-6474-465f-a102-6cfc55f2796d",
  },
  {
    id: "5CJYG2D2TYMIXdFP1Li1",
    displayName: "Abel",
    email: "a.jimenez.grupotaha@gmail.com",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/inteminer-26db4.appspot.com/o/cotizador%2Fgrupo-taha%2FWhatsApp%20Image%202023-07-27%20at%2018.57.18.jpeg?alt=media&token=c6c9d4b8-a4e5-443e-8c9a-d9d7c8c13a84",
  },
  {
    id: "MBq8k3Oy3u4s9203pqn1",
    displayName: "Alejandro",
    email: "alex.mejia.grupotaha@gmail.com",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/inteminer-26db4.appspot.com/o/cotizador%2Fgrupo-taha%2FWhatsApp%20Image%202023-07-27%20at%2018.58.38.jpeg?alt=media&token=2dca361f-9774-4464-b10a-230197cc87ab",
  },
  {
    id: "PjrInUvWnDuz5SeFUnsh",
    displayName: "José",
    email: "jmhernandez.cdmx@gmail.com",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/inteminer-26db4.appspot.com/o/cotizador%2Fgrupo-taha%2FWhatsApp%20Image%202023-07-27%20at%2019.03.58.jpeg?alt=media&token=1bd13085-9596-4a25-99d5-39e4abd03be3",
  },
];
