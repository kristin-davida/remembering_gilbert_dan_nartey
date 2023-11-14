import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const submitMessage = async (obj) => {
  const result = await fetch('/api/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getMessages = async () => {
  const query = gql`
    query GetMessages {
        postsConnection {
          edges {
            node {
              name
              id
              comments {
                message
                location
              }
            }
          }
        }
      }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
}

