import React from 'react'
import {
    useQuery,
    gql
  } from "@apollo/client";
export function Posts(props) {
    const WP_POSTS = gql`
    {
      posts {
        nodes {
          title
        }
      }
    }
  `;
const { loading, error, data } = useQuery(WP_POSTS);
console.log(data)
if (loading) return <p>Loading...</p>;
if (error) return <p>Error :(</p>;
    return (
        <div>
            {
             data.posts.nodes.map((node,index) => {
                    return <li key={index}>{node.title}</li>
                })
            }
        </div>
    )
}


