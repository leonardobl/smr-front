import { Button } from "../../Atoms/Button";
import { ButtonGroupForm } from "../../Atoms/ButtonGroupForm";
import { Card } from "../../Atoms/Card";
import { FormBasicData } from "../../Molecules/Forms/ FormBasicData";
import { FormAdvancedData } from "../../Molecules/Forms/FormAdvancedData";
import { Table } from "../../Molecules/Table";
import { TableItem } from "../../Molecules/Table/TableItem";
import { PageTemplate } from "../PageTemplate";
import * as S from "./styles";
import { useHome } from "./useHome";
import {
  LineChart,
  Line,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,

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

        <Card>
          <S.TitleCard>Fase ativa</S.TitleCard>
          <Table.Root>
            <Table.Header columns="2fr 1fr 1fr 1.2fr 1.2fr">
              <h2>Fase ativa</h2>
              <h2>Sem migração</h2>
              <h2>Com migração</h2>
              <h2>
                <span>Com migração e adesão ao RPC</span>
                Cont. Básica
              </h2>
              <h2>
                <span>Com migração e adesão ao RPC</span>
                Cont. Básica + Facultativa
              </h2>
            </Table.Header>
            <Table.WrapperItems>
              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>Remuneração</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>(-) Contribuição para RPPS</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>(-) Contribuição para o RPC (Básica)</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>(-) Contribuição para o RPC (Básica + Facultativa)</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>(-) Soma das Contribuições</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>
              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>Salário Líquido após contribuição</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>(-) Imposto de Renda - tabela progressiva</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>
            </Table.WrapperItems>
            <Table.Footer columns="2fr 1fr 1fr 1.2fr 1.2fr">
              <p>Remuneração Líquida após IR</p>
              <p>R$ 25.665,37</p>
              <p>R$ 28.907,32</p>
              <p>R$ 26.938,99</p>
              <p>R$ 25.665,37</p>
            </Table.Footer>
          </Table.Root>
        </Card>
        <Card>
          <S.TitleCard>Fase de benefício</S.TitleCard>

          <Table.Root>
            <Table.Header columns="2fr 1fr 1fr 1.2fr 1.2fr">
              <h2>Fase de benefício</h2>
              <h2>Sem migração</h2>
              <h2>Com migração</h2>
              <h2>
                <span>Com migração e adesão ao RPC</span>
                Cont. Básica
              </h2>
              <h2>
                <span>Com migração e adesão ao RPC</span>
                Cont. Básica + Facultativa
              </h2>
            </Table.Header>
            <Table.WrapperItems>
              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>Benefício pago pelo RPPS</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>Benefício Especial</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>Saldo Acumulado RPC (Apenas com a Básica)</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>Benefício RPC (Referente à Contribuição Básica)</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>Saldo Acumulado RPC (Apenas com a Facultativa)</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>
              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>Benefício RPC (Referente à Contribuição Facultativa)</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>(-) Contribuição sobre o benefício do RPPS</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>(-) Contribuição sobre o benefício do RPPS</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>(Salário Líquido após contribuição para IR</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>(-) Imposto de Renda - tabela progressiva</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>
            </Table.WrapperItems>
            <Table.Footer columns="2fr 1fr 1fr 1.2fr 1.2fr">
              <p>Remuneração Líquida após IR</p>
              <p>R$ 25.665,37</p>
              <p>R$ 28.907,32</p>
              <p>R$ 26.938,99</p>
              <p>R$ 25.665,37</p>
            </Table.Footer>
          </Table.Root>
        </Card>
        <Card>
          <S.TitleCard>Comparativo</S.TitleCard>

          <Table.Root>
            <Table.Header columns="2fr 1fr 1fr 1.2fr 1.2fr">
              <h2>Migração para RPC x Paridade</h2>
              <h2>Sem migração</h2>
              <h2>Com migração</h2>
              <h2>
                <span>Com migração e adesão ao RPC</span>
                Cont. Básica
              </h2>
              <h2>
                <span>Com migração e adesão ao RPC</span>
                Cont. Básica + Facultativa
              </h2>
            </Table.Header>
            <Table.WrapperItems>
              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>Valor do cargo efetivo projetado</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>Valor com migração</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>Valor com migração - Básica</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>

              <TableItem columns="2fr 1fr 1fr 1.2fr 1.2fr">
                <p>Valor com migração - Básica + Facultativa</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
                <p>R$ 39.726,34</p>
              </TableItem>
            </Table.WrapperItems>
            <Table.Footer columns="2fr 1fr 1fr 1.2fr 1.2fr">
              <p>Remuneração Líquida após IR</p>
              <p>R$ 25.665,37</p>
              <p>R$ 28.907,32</p>
              <p>R$ 26.938,99</p>
              <p>R$ 25.665,37</p>
            </Table.Footer>
          </Table.Root>
        </Card>
      </S.Container>
    </PageTemplate>
  );
};
