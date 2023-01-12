import dynamic from "next/dynamic";

export default function dynamicClientImport(relativePath: string) {
  dynamic(() => import(relativePath), {
    ssr: false,
  });
}
