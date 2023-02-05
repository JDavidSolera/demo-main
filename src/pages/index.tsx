import dynamic from "next/dynamic"

const ExampleComponent = dynamic(
  () => import('app-product/ExampleComponent'),
  { ssr: false }
)

export default function Home() {
  return (
    <>
      Hello app-main
      <ExampleComponent />
    </>
  )
}
