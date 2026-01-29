import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession()
  
  
  return (<div>
    {JSON.stringify(session)}
  </div>)
  
}
