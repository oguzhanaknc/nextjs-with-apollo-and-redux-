import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
export default function getAll() {
  const photos_q = gql`
    query photos {
      photos {
        id
        title
        like
        url
      }
    }
  `;
  const { data, loading, error } = useQuery(photos_q);
  localStorage.setItem("photos", JSON.stringify(data.photos));
}
