

import { cookies } from 'next/headers'

export async function serverFetch(query:string, variables:any, options:any) {
  try {
    const data = await fetch(
      `api/graphql`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          // "Authorization": cookies().get("authToken") ? `Bearer ${cookies().get("authToken").value}` : undefined
        },
        body: JSON.stringify({
          query,
          variables,
        }),
        ...options
      }
    );
    let parseData = await data.json();
    console.log(data)
    
    if (parseData?.errors) {
      return { error: parseData?.errors[0] };
    }
    return parseData?.data;
  } catch (error) {
    return { error: error}
  }
}
