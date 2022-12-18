import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import {IFiltroDeEventos} from "../interfaces/IFiltroDeEventos";

export const listaDeEventosState = atom<IEvento[]>({
  key: 'listaDeEventosState',
  default: [{
    "descricao": "Estudar React",
    "inicio": new Date("2022-01-15T09:00"),
    "fim": new Date("2022-01-15T13:00"),
    "completo": false,
    "id": 164
  },
  {
    "descricao": "Estudar Java",
    "inicio": new Date("2022-01-12T02:00"),
    "fim": new Date("2022-01-15T13:00"),
    "completo": false,
    "id": 165
  },
  {
    "descricao": "Estudar Recoil",
    "inicio": new Date("2022-01-16T09:00"),
    "fim": new Date("2022-01-16T11:00"),
    "completo": false,
    "id": 166
  }]
})

export const filtroDeEventos = atom<IFiltroDeEventos>({
  key:'filtroDeEvento',
  default:{}
})