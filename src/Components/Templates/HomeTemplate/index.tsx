import { Button } from "../../Atoms/Button";
import { ButtonGroupForm } from "../../Atoms/ButtonGroupForm";
import { Card } from "../../Atoms/Card";
import { FormBasicData } from "../../Molecules/Forms/ FormBasicData";
import { FormAdvancedData } from "../../Molecules/Forms/FormAdvancedData";
import { PageTemplate } from "../PageTemplate";
import * as S from "./styles";
import { useHome } from "./useHome";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar,
  BarChart,
  // Rectangle,
} from "recharts";

const dataLinear = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const dataBar = [
  {
    uv: 4000,
    amt: 2400,
  },
  {
    uv: 3000,
    amt: 2210,
  },
  {
    uv: 2000,
    amt: 2290,
  },
  {
    uv: 2780,
    amt: 2000,
  },
];
export const HomeTemplate = () => {
  const { formNumber, setFormNumber } = useHome();

  return (
    <PageTemplate>
      <S.Container>
        <Card>
          <S.Form>
            <div>
              <ButtonGroupForm getButtonActiveNumber={setFormNumber} />
            </div>

            {formNumber === 1 && <FormBasicData />}
            {formNumber === 2 && <FormAdvancedData />}

            <S.WrapperButtons>
              <Button variant="default">Ver resultado</Button>
              <Button
                iconleft="/assets/svg/icon-print-blue.svg"
                variant="blue-light"
                type="button"
              >
                Relatório
              </Button>
              <Button
                variant="blue-light"
                type="reset"
                iconleft="/assets/svg/icon-reset-blue.svg"
              >
                Reiniciar
              </Button>
            </S.WrapperButtons>
          </S.Form>
        </Card>

        <Card>
          <S.TitleCard>Comparativo (R$)</S.TitleCard>
          <ResponsiveContainer width={"100%"} height={400}>
            <LineChart data={dataLinear}>
              <CartesianGrid strokeDasharray="3 3" />
              {/* <XAxis dataKey="name" padding={{ left: 30, right: 30 }} /> */}
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <S.TitleCard>Comparativo de remuneração (R$)</S.TitleCard>
          <ResponsiveContainer width={"100%"} height={400}>
            <LineChart data={dataLinear}>
              <CartesianGrid strokeDasharray="3 3" />
              {/* <XAxis dataKey="name" padding={{ left: 30, right: 30 }} /> */}
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </S.Container>
    </PageTemplate>
  );
};
