import { Card } from "antd";
import { useLocation } from "react-router-dom";

export default function CantidadComponent() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <Card
        title={`Cantidad de ${pathname
          .replace("/dashboard/cantidad", "")
          .replace("-", " ")}`}
        style={{ width: "100%", marginTop: 50 }}
      ></Card>
    </>
  );
}
