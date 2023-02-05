import dynamic from "next/dynamic";

const AppOrderIndexPage = dynamic(() => import("app-order/pages/index"));

function OrderPage() {
  return (
    <>
      Order page
      <AppOrderIndexPage />
    </>
  );
}

export default OrderPage;
