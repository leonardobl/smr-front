import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { IFormMainDTO } from "../../../Types/formMain";
import { SexoEnum } from "../../../Enum/sexo";

const schema = z.object({
  nome: z.string().min(1),
  data_nascimento: z.string(),
  sexo: z.string(),
  remuneracao_ativa_atual: z.number(),
  beneficio_especial: z.number(),
  prazo_recebimento_beneficio_rpc: z.string(),
  idade_ingresso_ente_federativo: z.number(),
  idade_prevista_aposentadoria: z.number(),
  taxa_juros_anual: z.number(),
  taxa_contribuicao_rpps: z.number(),
  taxa_contribuicao_rpc: z.number(),
  valor_teto_rgps: z.number(),
  salario_contribuicao_rpc: z.number(),
  indice_infl: z.number(),
  indice_reajuste_beneficio_rpc: z.number(),
  indice_reajuste_beneficio_rpps: z.number(),
  indice_reajuste_paridade: z.number(),
});
export const useHome = () => {
  const [formNumber, setFormNumber] = useState(1);

  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormMainDTO>({
    defaultValues: {
      nome: "",
      data_nascimento: "",
      sexo: SexoEnum.Masculino,
      remuneracao_ativa_atual: 0,
      beneficio_especial: 0,
      prazo_recebimento_beneficio_rpc: "",
      idade_ingresso_ente_federativo: 0,
      idade_prevista_aposentadoria: 0,
      taxa_juros_anual: 0,
      taxa_contribuicao_rpps: 0,
      taxa_contribuicao_rpc: 0,
      valor_teto_rgps: 0,
      salario_contribuicao_rpc: 0,
      indice_infl: 0,
      indice_reajuste_beneficio_rpc: 0,
      indice_reajuste_beneficio_rpps: 0,
      indice_reajuste_paridade: 0,
    },
    resolver: zodResolver(schema),
  });

  function getData(data: IFormMainDTO) {
    console.log(data);
  }

  return {
    formNumber,
    setFormNumber,
    control,
    register,
    reset,
    handleSubmit,
    errors,
    Controller,
    getData,
  };
};
