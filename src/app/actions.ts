

import { cookies } from 'next/headers'

export async function serverFetch(query:string, variables:any, options:any) {
  try {
    const data = await fetch(
      `https://a0b8-2405-201-c009-c89d-1936-c054-2b64-5b39.ngrok-free.app/graphql`,
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
