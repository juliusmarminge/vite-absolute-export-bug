import Image from "next/image";
import { someAdapterFunction } from 'my-pkg/framework-a'

export default function Home() {
  someAdapterFunction()

  return (
    <div>Hello</div>
  );
}
