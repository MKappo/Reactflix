/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button, { Options } from '../../../components/Button';
import Table from '../../../components/Table';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#000000',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://kpoflix.herokuapp.com/categorias';

    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });

    /*    setTimeout(() => {
      setCategorias([
        ...categorias,
        {
          id: 1,
          nome: 'Front End',
          descricao: 'Uma categoria',
          cor: '#cbd1ff',
        },
        {
          id: 2,
          nome: 'Back End',
          descricao: 'Outra categoria',
          cor: '#cbd1ff',
        },
      ]);
    }, 4 * 1000); */
  }, []);

  return (

    <PageDefault>
      <h1>
        Cadastro de Categoria:
      </h1>

      <form onSubmit={function handleSubimit(infosDoEvento) {
        infosDoEvento.preventDefault();

        setCategorias([
          ...categorias,
          values,
        ]);

        categoriasRepository.createCategory({
          titulo: values.titulo,
          descricao: values.descricao,
          cor: values.cor,
        })
          .then(() => {
            if (swal.getState().isOpen === false) {
              swal({
                title: 'Categoria Adicionada !',
                timer: 20000,
                customClass: 'swal-modal swal-button swal-overlay',
                dangerMode: true,
                button: {
                  text: 'Fechar',
                },
              }).then(() => {
                window.location.reload();
              });
            }
          });

        clearForm();
      }}
      >

        <FormField
          label="Titulo da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          value={values.descricao}
          name="descricao"
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          value={values.cor}
          name="cor"
          onChange={handleChange}
        />

        <Button>
          Salvar
        </Button>

        {categorias.length === 0 && (
          <div>
            Loading...
          </div>
        )}

      </form>
      <br />

      <Table>
        <tbody>

          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Editar</th>
            <th>Remover</th>
          </tr>

          {categorias.map((categoria) => (
            <tr key={`${categoria.titulo}`}>
              <td>
                {categoria.titulo}
              </td>

              <td>
                {categoria.descricao}
              </td>
              <td align="center">
                <Options>Editar</Options>
              </td>
              <td align="center">
                <Options
                  type="button"
                  id={categoria.id}
                  onClick={(event) => categoriasRepository.deleteCategory(event)
                    .then(() => {
                      if (swal.getState().isOpen === false) {
                        swal({
                          title: 'Categoria Removida',
                          timer: 20000,
                          customClass: 'swal-modal swal-button swal-overlay',
                          dangerMode: true,
                          button: {
                            text: 'Fechar',
                          },
                        }).then(() => {
                          window.location.reload();
                        });
                      }
                    })}
                >
                  Remover
                </Options>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/*       <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul> */}

      <br />
      <Link to="/">
        Ir para Home
      </Link>
      <br />

    </PageDefault>

  );
}

export default CadastroCategoria;
