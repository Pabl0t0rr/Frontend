import { People } from "@/types";
import { useRouter } from "next/navigation";
type Props = {
  person: People;
};

const Person = ({ person }: Props) => {
  const router = useRouter();
  const id = person.url.split("/").pop();
  return (
    <div onClick={() => router.push(`/people/${id}`)}>
      <p>{person.name}</p>
      <p>{person.films.join(", ")}</p>
      <p>{person.starships.join(", ")}</p>
      <p>{person.homeworld}</p>
    </div>
  );
};

export default Person;
