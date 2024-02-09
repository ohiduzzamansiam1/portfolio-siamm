import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

function generateRandomString() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

export interface Project {
  name: string;
  description: string;
  image: {
    url: string;
  };
  link: string;
  category: {
    name: string;
  };
  github: string;
}

interface ProjectType {
  projects: Project[];
}

// Initialize Apollo Client
export const client = new ApolloClient({
  uri: "https://api-ap-south-1.hygraph.com/v2/clseqk62k19ru01upsskwr197/master",
  cache: new InMemoryCache(),
});

const getProjectsQuery = gql`
  query ${generateRandomString()} {
    projects(orderBy: createdAt_DESC) {
        github
        link
        name
        description
        image {
          url
        }
        category {
            name
          }
      }
  }
`;

export async function getProjects() {
  const { data }: { data: ProjectType } = await client.query({
    query: getProjectsQuery,
    fetchPolicy: "no-cache",
  });
  return data;
}
