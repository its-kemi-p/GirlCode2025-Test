import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import MyButton from "~/components/MyButton";
import Profile from "~/components/Person";
import type Person from "~/types/Person";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const person : Person = { name:'Mickey Mouse', imageURL: 'https://tse4.mm.bing.net/th/id/OIP.z1GQUa53-4f_h3E015wTogHaEK?rs=1&pid=ImgDetMain&o=7&rm=3', imageSize: 90 };
  return (
    <div> 
      <h1>Welcome to Entelect</h1>
      <MyButton />
      <Profile person={person} />
    </div>
  );

}
