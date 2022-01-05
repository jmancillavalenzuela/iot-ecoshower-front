import { Card } from "antd";
import { useLocation } from "react-router-dom";

export default function GraficoComponent() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <Card
        title={`Grafico de ${pathname
          .replace("/dashboard/", "")
          .replace("-", " ")}`}
        style={{ width: "100%", marginTop: 50 }}
      ></Card>
    </>
  );
}
