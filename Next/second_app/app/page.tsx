import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-lg w-screen h-screen flex flex-col items-center justify-center gap-2">
      <div>Todo application</div>
      <div><Link href={'/signin'}>Signin to todo app</Link></div>
      <div><Link href={'/signup'}>Signup to todo app</Link></div>
    </div>
  )
}
