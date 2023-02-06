import dynamic from "next/dynamic";

const AppOrderIndexPage = dynamic(
  () => import('app-order/OrderDetail'),
  { ssr: false }
)

function OrderPage() {
  return (
    <>
      <AppOrderIndexPage />
    </>
  );
}

export default OrderPage;
